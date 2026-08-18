const React = require('react');
const { render, screen } = require('@testing-library/react');
const AppMockupSender = require('../components/AppMockupSender.jsx');

describe('AppMockupSender', () => {
  const mockT = jest.fn((key) => `translated_${key}`);

  beforeEach(() => {
    mockT.mockClear();
  });

  it('renders correctly with English language (ltr)', () => {
    render(<AppMockupSender lang="en" t={mockT} />);

    // Check main container dir
    const container = screen.getByTestId('app-mockup-sender');
    expect(container).toHaveAttribute('dir', 'ltr');

    // Check translations
    expect(screen.getByText('translated_mockupsendertitle')).toBeInTheDocument();
    expect(screen.getByText('translated_mockupsenderdriver')).toBeInTheDocument();
    expect(screen.getByText('translated_mockupsendername')).toBeInTheDocument();
    expect(screen.getByText('translated_mockupsenderotp')).toBeInTheDocument();
    expect(screen.getByText('translated_mockupsenderotpwarn')).toBeInTheDocument();
    expect(screen.getByText('translated_mockupsenderbtn')).toBeInTheDocument();

    // Check English specific icon
    expect(screen.getByTestId('verified-icon-en')).toBeInTheDocument();
    expect(screen.queryByTestId('verified-icon-ar')).not.toBeInTheDocument();

    // Check OTP numbers
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders correctly with Arabic language (rtl)', () => {
    render(<AppMockupSender lang="ar" t={mockT} />);

    // Check main container dir
    const container = screen.getByTestId('app-mockup-sender');
    expect(container).toHaveAttribute('dir', 'rtl');

    // Check Arabic specific icon
    expect(screen.getByTestId('verified-icon-ar')).toBeInTheDocument();
    expect(screen.queryByTestId('verified-icon-en')).not.toBeInTheDocument();
  });
});
