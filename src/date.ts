//  @ts-ignore
export const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());