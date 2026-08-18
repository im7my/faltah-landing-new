const { handleWaitlistSubmitLogic } = require("./waitlist");

describe("handleWaitlistSubmitLogic", () => {
  let e;
  let setSubmitStatus;
  let setWaitlistInput;
  let setShowModal;

  beforeEach(() => {
    e = { preventDefault: jest.fn() };
    setSubmitStatus = jest.fn();
    setWaitlistInput = jest.fn();
    setShowModal = jest.fn();
    global.fetch = jest.fn();
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  it("should return early if waitlistInput is empty", async () => {
    await handleWaitlistSubmitLogic(
      e,
      "   ",
      setSubmitStatus,
      setWaitlistInput,
      setShowModal,
    );
    expect(e.preventDefault).toHaveBeenCalled();
    expect(setSubmitStatus).not.toHaveBeenCalled();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("should handle successful waitlist submission", async () => {
    global.fetch.mockResolvedValueOnce({ ok: true });

    const waitlistInput = "test@example.com";
    const promise = handleWaitlistSubmitLogic(
      e,
      waitlistInput,
      setSubmitStatus,
      setWaitlistInput,
      setShowModal,
    );

    expect(e.preventDefault).toHaveBeenCalled();
    expect(setSubmitStatus).toHaveBeenCalledWith("loading");

    await promise;

    expect(global.fetch).toHaveBeenCalledWith(
      "https://script.google.com/macros/s/AKfycb.../exec",
      expect.objectContaining({
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: waitlistInput }),
      }),
    );

    expect(setSubmitStatus).toHaveBeenCalledWith("success");
    expect(setWaitlistInput).toHaveBeenCalledWith("");

    jest.runAllTimers();
    expect(setSubmitStatus).toHaveBeenCalledWith("idle");
    expect(setShowModal).toHaveBeenCalledWith(false);
  });

  it("should handle error when fetch rejects", async () => {
    const error = new Error("Network error");
    global.fetch.mockRejectedValueOnce(error);

    const waitlistInput = "test@example.com";
    await handleWaitlistSubmitLogic(
      e,
      waitlistInput,
      setSubmitStatus,
      setWaitlistInput,
      setShowModal,
    );

    expect(e.preventDefault).toHaveBeenCalled();
    expect(setSubmitStatus).toHaveBeenCalledWith("loading");
    expect(global.fetch).toHaveBeenCalled();

    expect(console.error).toHaveBeenCalledWith("Error:", error);
    expect(setSubmitStatus).toHaveBeenCalledWith("idle");
    expect(setWaitlistInput).not.toHaveBeenCalled();
    expect(setShowModal).not.toHaveBeenCalled();
  });
});
