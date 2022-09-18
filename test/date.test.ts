import { isDateValid } from '../src/date';

describe('date', () => {
    it('isDateValid', () => {
        expect(isDateValid('December 17, 1995 03:24:00')).toEqual(Boolean(true));
        expect(isDateValid('1995-12-17T03:24:00')).toEqual(Boolean(true));
        expect(isDateValid('1995-12-17 T03:24:00')).toEqual(Boolean(false));
        expect(isDateValid('Duck')).toEqual(Boolean(false));
        expect(isDateValid(1995, 11, 17)).toEqual(Boolean(true));
        expect(isDateValid(1995, 11, 17, 'Duck')).toEqual(Boolean(false));
        expect(isDateValid({})).toEqual(Boolean(false));
    });
});
