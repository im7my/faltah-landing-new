import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WaitlistForm from '../WaitlistForm';

describe('WaitlistForm Component', () => {
  const mockT = jest.fn((key) => key);
  const mockSetWaitlistInput = jest.fn();
  const mockOnSubmit = jest.fn((e) => e.preventDefault());

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders input and button correctly', () => {
    render(
      <WaitlistForm
        waitlistInput=""
        setWaitlistInput={mockSetWaitlistInput}
        submitStatus="idle"
        onSubmit={mockOnSubmit}
        t={mockT}
      />
    );

    const input = screen.getByPlaceholderText('heroplaceholder');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    const button = screen.getByRole('button', { name: 'herobtn' });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  test('calls setWaitlistInput on input change', () => {
    render(
      <WaitlistForm
        waitlistInput=""
        setWaitlistInput={mockSetWaitlistInput}
        submitStatus="idle"
        onSubmit={mockOnSubmit}
        t={mockT}
      />
    );

    const input = screen.getByPlaceholderText('heroplaceholder');
    fireEvent.change(input, { target: { value: 'test@example.com' } });

    expect(mockSetWaitlistInput).toHaveBeenCalledWith('test@example.com');
  });

  test('calls onSubmit when form is submitted', () => {
    render(
      <WaitlistForm
        waitlistInput="test@example.com"
        setWaitlistInput={mockSetWaitlistInput}
        submitStatus="idle"
        onSubmit={mockOnSubmit}
        t={mockT}
      />
    );

    const button = screen.getByRole('button', { name: 'herobtn' });
    fireEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  test('disables button and shows loader when submitStatus is loading', () => {
    const { container } = render(
      <WaitlistForm
        waitlistInput="test@example.com"
        setWaitlistInput={mockSetWaitlistInput}
        submitStatus="loading"
        onSubmit={mockOnSubmit}
        t={mockT}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    // Check if SVG is rendered (loader)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('shows success message when submitStatus is success', () => {
    render(
      <WaitlistForm
        waitlistInput="test@example.com"
        setWaitlistInput={mockSetWaitlistInput}
        submitStatus="success"
        onSubmit={mockOnSubmit}
        t={mockT}
      />
    );

    const button = screen.getByRole('button', { name: 'successmsg' });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled(); // Button doesn't explicitly disable on success in the current code
  });
});
