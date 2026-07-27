const { submitWaitlist } = require('./waitlist.js');

describe('submitWaitlist', () => {
  let mockEvent;
  let setSubmitStatus;
  let setWaitlistInput;
  let setShowModal;

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() };
    setSubmitStatus = jest.fn();
    setWaitlistInput = jest.fn();
    setShowModal = jest.fn();

    global.fetch = jest.fn();

    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test('does nothing if waitlistInput is empty', async () => {
    await submitWaitlist(mockEvent, '   ', setSubmitStatus, setWaitlistInput, setShowModal);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(setSubmitStatus).not.toHaveBeenCalled();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test('updates state and calls fetch on valid input', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true });

    const email = 'test@example.com';
    const fetchPromise = submitWaitlist(mockEvent, email, setSubmitStatus, setWaitlistInput, setShowModal);

    // Test loading state
    expect(setSubmitStatus).toHaveBeenCalledWith('loading');

    await fetchPromise;

    // Test fetch call
    expect(global.fetch).toHaveBeenCalledWith('https://script.google.com/macros/s/AKfycb.../exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contact: email })
    });

    // Test success state
    expect(setSubmitStatus).toHaveBeenCalledWith('success');
    expect(setWaitlistInput).toHaveBeenCalledWith('');

    // Fast-forward timeout
    jest.runAllTimers();

    // Test after timeout state
    expect(setSubmitStatus).toHaveBeenCalledWith('idle');
    expect(setShowModal).toHaveBeenCalledWith(false);
  });

  test('handles fetch failure correctly', async () => {
    const error = new Error('Network error');
    global.fetch.mockRejectedValueOnce(error);

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const email = 'test@example.com';
    await submitWaitlist(mockEvent, email, setSubmitStatus, setWaitlistInput, setShowModal);

    expect(setSubmitStatus).toHaveBeenCalledWith('loading');
    expect(consoleSpy).toHaveBeenCalledWith('Error:', error);
    expect(setSubmitStatus).toHaveBeenCalledWith('idle');

    consoleSpy.mockRestore();
  });
});
