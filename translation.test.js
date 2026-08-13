const { translations, createTranslator } = require('./translation');

describe('Translator function', () => {
  it('should translate correctly for Arabic', () => {
    const t = createTranslator('ar');
    expect(t('navfeatures')).toBe('المميزات');
  });

  it('should translate correctly for English', () => {
    const t = createTranslator('en');
    expect(t('navfeatures')).toBe('Features');
  });

  it('should fallback to key if translation is missing for existing language', () => {
    const t = createTranslator('ar');
    expect(t('nonexistentkey')).toBe('nonexistentkey');
  });

  it('should fallback to key if language does not exist', () => {
    const t = createTranslator('fr');
    expect(t('navfeatures')).toBe('navfeatures');
  });
});
