const { toggleLangLogic } = require('../js/lang-utils');

describe('toggleLangLogic', () => {
  let mockSetLang;
  let mockSetIsMenuOpen;
  let mockEvent;

  beforeEach(() => {
    mockSetLang = jest.fn();
    mockSetIsMenuOpen = jest.fn();
    mockEvent = {
      preventDefault: jest.fn(),
    };
  });

  it('should call e.preventDefault() if event is provided', () => {
    toggleLangLogic(mockEvent, mockSetLang, mockSetIsMenuOpen);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it('should not throw if event is null', () => {
    expect(() => {
      toggleLangLogic(null, mockSetLang, mockSetIsMenuOpen);
    }).not.toThrow();
  });

  it('should toggle language from ar to en', () => {
    toggleLangLogic(mockEvent, mockSetLang, mockSetIsMenuOpen);
    expect(mockSetLang).toHaveBeenCalled();
    const updateFn = mockSetLang.mock.calls[0][0];
    expect(updateFn('ar')).toBe('en');
  });

  it('should toggle language from en to ar', () => {
    toggleLangLogic(mockEvent, mockSetLang, mockSetIsMenuOpen);
    expect(mockSetLang).toHaveBeenCalled();
    const updateFn = mockSetLang.mock.calls[0][0];
    expect(updateFn('en')).toBe('ar');
  });

  it('should close the menu', () => {
    toggleLangLogic(mockEvent, mockSetLang, mockSetIsMenuOpen);
    expect(mockSetIsMenuOpen).toHaveBeenCalledWith(false);
  });
});
