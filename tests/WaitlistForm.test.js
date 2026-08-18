const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
require('@testing-library/jest-dom');
const WaitlistForm = require('../WaitlistForm');

describe('WaitlistForm Component', () => {
  const mockSetWaitlistInput = jest.fn();
  const mockOnSubmit = jest.fn((e) => e.preventDefault());
  const mockT = jest.fn((key) => {
    const translations = {
      heroplaceholder: 'Enter your email',
      herobtn: 'Join Waitlist',
      successmsg: 'Success!'
    };
    return translations[key] || key;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders form elements correctly', () => {
    render(
      React.createElement(WaitlistForm, {
        waitlistInput: '',
        setWaitlistInput: mockSetWaitlistInput,
        submitStatus: 'idle',
        onSubmit: mockOnSubmit,
        t: mockT
      })
    );

    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('required');
    expect(input).toHaveValue('');

    const button = screen.getByRole('button', { name: 'Join Waitlist' });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  test('calls setWaitlistInput on input change', () => {
    render(
      React.createElement(WaitlistForm, {
        waitlistInput: '',
        setWaitlistInput: mockSetWaitlistInput,
        submitStatus: 'idle',
        onSubmit: mockOnSubmit,
        t: mockT
      })
    );

    const input = screen.getByPlaceholderText('Enter your email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });

    expect(mockSetWaitlistInput).toHaveBeenCalledWith('test@example.com');
  });

  test('calls onSubmit when form is submitted', () => {
    render(
      React.createElement(WaitlistForm, {
        waitlistInput: 'test@example.com',
        setWaitlistInput: mockSetWaitlistInput,
        submitStatus: 'idle',
        onSubmit: mockOnSubmit,
        t: mockT
      })
    );

    const button = screen.getByRole('button', { name: 'Join Waitlist' });
    fireEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  test('disables button and shows loader when submitStatus is loading', () => {
    render(
      React.createElement(WaitlistForm, {
        waitlistInput: 'test@example.com',
        setWaitlistInput: mockSetWaitlistInput,
        submitStatus: 'loading',
        onSubmit: mockOnSubmit,
        t: mockT
      })
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    // Check for loader icon
    const loader = screen.getByTestId('loader-icon');
    expect(loader).toBeInTheDocument();
  });

  test('shows success message when submitStatus is success', () => {
    render(
      React.createElement(WaitlistForm, {
        waitlistInput: 'test@example.com',
        setWaitlistInput: mockSetWaitlistInput,
        submitStatus: 'success',
        onSubmit: mockOnSubmit,
        t: mockT
      })
    );

    const button = screen.getByRole('button', { name: 'Success!' });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });
});
