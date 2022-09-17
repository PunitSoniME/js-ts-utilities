import { getBaseURL, isAbsoluteURL, getURLParameters } from '../src/url';

describe('url', () => {
    it('getBaseURL', () => {
        expect(getBaseURL('https://url.com/page?name=Adam&surname=Smith')).toEqual("https://url.com/page");
    });

    it('isAbsoluteURL', () => {
        expect(isAbsoluteURL('https://google.com')).toEqual(Boolean("true"));
    });

    it('getURLParameters', () => {
        expect(getURLParameters('http://url.com/page?name=Adam&surname=Smith')).toEqual({ name: 'Adam', surname: 'Smith' });
    });

});
