const React = typeof require !== 'undefined' ? require('react') : window.React;

const AppMockupSender = ({ lang, t }) => (
  <div className="iphone-frame transform rotate-3 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]" dir={lang === 'ar' ? 'rtl' : 'ltr'} data-testid="app-mockup-sender">
    <div className="dynamic-island"></div>
    <div className="app-screen pt-14 px-5 pb-6 relative bg-[#F8FAFC]">
      <div className="flex items-center justify-between mb-6 z-10 relative">
        <h3 className="font-black text-2xl text-slate-900 tracking-tight">{t('mockupsendertitle')}</h3>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="bg-white p-5 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 mb-5 relative overflow-hidden">
          <div className={`absolute top-0 w-24 h-24 bg-blue-50 pointer-events-none opacity-50 ${lang === 'ar' ? 'right-0 rounded-bl-[100px]' : 'left-0 rounded-br-[100px]'}`}></div>

          <p className={`text-[12px] text-slate-400 mb-3 font-bold tracking-wider ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t('mockupsenderdriver')}</p>

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-tr from-blue-100 to-white rounded-full flex items-center justify-center border-2 border-blue-100 overflow-hidden p-0.5">
                  <img src="https://i.pravatar.cc/100?img=11" alt="driver" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className={`absolute bottom-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
              </div>

              <div className={`${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <p className={`font-black text-base text-slate-900 flex items-center gap-1.5 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                  {lang === 'ar' ? (
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor" data-testid="verified-icon-ar"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"></path></svg>
                  ) : null}
                  {t('mockupsendername')}
                  {lang === 'en' ? (
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor" data-testid="verified-icon-en"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"></path></svg>
                  ) : null}
                </p>

                <div className={`flex items-center gap-1.5 mt-1 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-[12px] font-bold text-slate-800">4.9</span>
                  <span className="text-amber-400 text-sm">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 rounded-[32px] shadow-[0_20px_40px_rgba(10,132,255,0.3)] mb-auto relative overflow-hidden">
          <p className="text-white/80 text-[12px] font-bold tracking-widest text-center mb-5 relative z-10">{t('mockupsenderotp')}</p>

          <div className="flex justify-center gap-3.5 mb-6 relative z-10" dir="ltr">
            {[8, 4, 9, 2].map((num, idx) => (
              <div key={idx} className="w-14 h-16 bg-white/10 backdrop-blur-xl border border-white/30 rounded-[18px] flex items-center justify-center text-4xl font-black text-white shadow-inner">
                {num}
              </div>
            ))}
          </div>

          <div className="bg-black/20 backdrop-blur-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-white/10 w-fit mx-auto relative z-10">
            <span className="text-[11px] font-bold text-white/90">{t('mockupsenderotpwarn')}</span>
          </div>

          <button className="w-full bg-slate-900 text-white py-4 rounded-[20px] font-black mt-5 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:bg-black transition-all hover:-translate-y-1">
            {t('mockupsenderbtn')}
          </button>
        </div>
      </div>

      <div className="home-indicator bg-black"></div>
    </div>
  </div>
);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppMockupSender;
} else {
  window.AppMockupSender = AppMockupSender;
}
