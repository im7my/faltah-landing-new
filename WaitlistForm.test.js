const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const WaitlistForm = require('./WaitlistForm');

describe('WaitlistForm', () => {
  const mockSetWaitlistInput = jest.fn();
  const mockOnSubmit = jest.fn((e) => e.preventDefault());
  const mockT = jest.fn((key) => key);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(
      React.createElement(WaitlistForm, {
        waitlistInput: "",
        setWaitlistInput: mockSetWaitlistInput,
        submitStatus: "idle",
        onSubmit: mockOnSubmit,
        t: mockT
      })
    );

    const input = screen.getByTestId('waitlist-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(input).toHaveAttribute('placeholder', 'heroplaceholder');

    const button = screen.getByTestId('waitlist-submit');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('herobtn');
    expect(button).not.toBeDisabled();
  });

  it('calls setWaitlistInput when input changes', () => {
    render(
      React.createElement(WaitlistForm, {
        waitlistInput: "",
        setWaitlistInput: mockSetWaitlistInput,
        submitStatus: "idle",
        onSubmit: mockOnSubmit,
        t: mockT
      })
    );

    const input = screen.getByTestId('waitlist-input');
    fireEvent.change(input, { target: { value: 'test@example.com' } });

    expect(mockSetWaitlistInput).toHaveBeenCalledTimes(1);
    expect(mockSetWaitlistInput).toHaveBeenCalledWith('test@example.com');
  });

  it('calls onSubmit when form is submitted', () => {
    render(
      React.createElement(WaitlistForm, {
        waitlistInput: "test@example.com",
        setWaitlistInput: mockSetWaitlistInput,
        submitStatus: "idle",
        onSubmit: mockOnSubmit,
        t: mockT
      })
    );

    const form = screen.getByTestId('waitlist-form');
    fireEvent.submit(form);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('disables button and shows loader when submitStatus is loading', () => {
    render(
      React.createElement(WaitlistForm, {
        waitlistInput: "test@example.com",
        setWaitlistInput: mockSetWaitlistInput,
        submitStatus: "loading",
        onSubmit: mockOnSubmit,
        t: mockT
      })
    );

    const button = screen.getByTestId('waitlist-submit');
    expect(button).toBeDisabled();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('shows success message when submitStatus is success', () => {
    render(
      React.createElement(WaitlistForm, {
        waitlistInput: "test@example.com",
        setWaitlistInput: mockSetWaitlistInput,
        submitStatus: "success",
        onSubmit: mockOnSubmit,
        t: mockT
      })
    );

    const button = screen.getByTestId('waitlist-submit');
    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent('successmsg');
  });
});
