const React = typeof require !== 'undefined' ? require('react') : window.React;

const LoaderIcon = () => (
  React.createElement("svg", { className: "animate-spin h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" },
    React.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
    React.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
  )
);

const WaitlistForm = ({ waitlistInput, setWaitlistInput, submitStatus, onSubmit, t }) => {
  return React.createElement("form", { onSubmit: onSubmit, className: "flex flex-col sm:flex-row gap-3 w-full" },
    React.createElement("input", {
      type: "text",
      required: true,
      value: waitlistInput,
      onChange: (e) => setWaitlistInput(e.target.value),
      placeholder: t('heroplaceholder'),
      className: "flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500 focus:outline-none focus:bg-white/10 transition-all min-w-0"
    }),
    React.createElement("button", {
      type: "submit",
      disabled: submitStatus === 'loading',
      className: "bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25 whitespace-nowrap disabled:opacity-70 flex justify-center items-center"
    }, submitStatus === 'loading' ? React.createElement(LoaderIcon, null) : submitStatus === 'success' ? t('successmsg') : t('herobtn'))
  );
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WaitlistForm;
} else if (typeof window !== 'undefined') {
  window.WaitlistForm = WaitlistForm;
}
