export const push = (array: any, element: any) => {
    return [...array, element];
}

export const filter = (array: any, callback: Function) => {
    return array.filter(callback);
}

export const update = (array: any, index: number, newElement: any) => {
    return array.splice(index, 1, newElement) && [...array];
}

export const remove = (array: any, index: number) => {
    return array.filter((_: any, i: number) => index !== i);
}

// export const clear = (array: any) => {
//     return [];
// }

