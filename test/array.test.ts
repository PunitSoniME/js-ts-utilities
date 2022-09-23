import { push, filter, update, remove } from '../src/array';

describe('array', () => {
    it('push', () => {
        expect(push([10, 20, 30, 40], 50)).toEqual([10, 20, 30, 40, 50]);
    });

    it('filter', () => {
        expect(filter([10, 20, 30, 40], (d: number) => d < 40)).toEqual([10, 20, 30]);
    });

    it('update', () => {
        expect(update([10, 20, 40], 2, 30)).toEqual([10, 20, 30]);
    });

    it('remove', () => {
        expect(remove([10, 20, 30], 2)).toEqual([10, 20]);
    });
});
