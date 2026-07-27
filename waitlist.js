const submitWaitlist = async (
  e,
  waitlistInput,
  setSubmitStatus,
  setWaitlistInput,
  setShowModal
) => {
  if (e) e.preventDefault();
  if (!waitlistInput.trim()) return;

  setSubmitStatus('loading');
  const SCRIPTURL = 'https://script.google.com/macros/s/AKfycb.../exec';

  try {
    await fetch(SCRIPTURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contact: waitlistInput })
    });

    setSubmitStatus('success');
    setWaitlistInput('');
    setTimeout(() => {
      setSubmitStatus('idle');
      if (setShowModal) setShowModal(false);
    }, 3000);
  } catch (error) {
    console.error('Error:', error);
    setSubmitStatus('idle');
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { submitWaitlist };
}
if (typeof window !== 'undefined') {
  window.submitWaitlist = submitWaitlist;
}
