export const getBaseURL = (url: string) => url.replace(/[?#].*$/, '');

export const isAbsoluteURL = (url: string) => /^[a-z][a-z0-9+.-]*:/.test(url);

export const getURLParameters = (url: string) =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a: any, v: any) => (
            (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
        ),
        {}
    );

