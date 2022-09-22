//  @ts-ignore
export const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

export const getUnixTimestamp = (date = new Date()) => Math.floor(date.getTime() / 1000);

