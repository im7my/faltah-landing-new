function toggleLangLogic(e, setLang, setIsMenuOpen) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  setIsMenuOpen(false);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { toggleLangLogic };
}
