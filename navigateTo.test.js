const fs = require('fs');
const babel = require('@babel/core');
const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
require('@testing-library/jest-dom');

// 1. Read index.html and extract the React component code inside <script type="text/babel">
const html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/<script type="text\/babel">\s*([\s\S]*?)<\/script>/);

if (!scriptMatch) {
  throw new Error("Could not find React code block in index.html");
}

let script = scriptMatch[1];
// 2. Remove the React mounting code at the bottom (ReactDOM.createRoot)
script = script.replace(/const root = ReactDOM\.createRoot[\s\S]*$/, '');
// 3. Export App component
script += '\nmodule.exports = App;\n';

// 4. Transpile the code with Babel
const transpiled = babel.transformSync(script, {
  presets: ['@babel/preset-env', '@babel/preset-react']
});
fs.writeFileSync('App.js', 'const React = require("react");\n' + transpiled.code);

const App = require('./App');

// Mock IntersectionObserver used in the code
class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = IntersectionObserver;

describe('navigateTo function', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  afterAll(() => {
    // Cleanup generated file
    if (fs.existsSync('App.js')) {
      fs.unlinkSync('App.js');
    }
  });

  test('navigates to privacy page and resets menu', () => {
    render(<App />);
    const privacyButtons = screen.getAllByRole('button', { name: /سياسة الخصوصية/i });
    const preventDefault = jest.fn();

    // Simulate navigation to privacy page
    fireEvent.click(privacyButtons[0], { preventDefault });

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    expect(screen.getByRole('heading', { name: /سياسة الخصوصية/i })).toBeInTheDocument();
  });

  test('navigates to terms page and scrolls to top', () => {
    render(<App />);
    const termsButtons = screen.getAllByRole('button', { name: /الشروط والأحكام/i });

    // Simulate navigation to terms page
    fireEvent.click(termsButtons[0]);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    expect(screen.getByRole('heading', { name: /الشروط والأحكام/i })).toBeInTheDocument();
  });

  test('returns to home page correctly', () => {
    render(<App />);
    const termsButtons = screen.getAllByRole('button', { name: /الشروط والأحكام/i });

    // First go to terms page
    fireEvent.click(termsButtons[0]);
    expect(screen.getByRole('heading', { name: /الشروط والأحكام/i })).toBeInTheDocument();

    // Then click logo which triggers navigateTo('home')
    const logoButton = screen.getAllByText('Faltah');
    fireEvent.click(logoButton[0].closest('div')); // Click the wrapper div that handles the click

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    // Verify we are back on home page by checking a known home page string
    const heroHeading = screen.getByText(/شحنتك\.\.\./);
    expect(heroHeading).toBeInTheDocument();
  });
});
