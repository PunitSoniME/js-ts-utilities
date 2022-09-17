import { getBaseURL, isAbsoluteURL, getURLParameters } from '../src/url';

describe('url', () => {
    it('getBaseURL', () => {
        expect(getBaseURL('https://url.com/page?name=Punit&surname=Soni')).toEqual("https://url.com/page");
    });

    it('isAbsoluteURL', () => {
        expect(isAbsoluteURL('https://google.com')).toEqual(Boolean("true"));
    });

    it('getURLParameters', () => {
        expect(getURLParameters('https://url.com/page?name=Punit&surname=Soni')).toEqual({ name: 'Punit', surname: 'Soni' });
    });

});
