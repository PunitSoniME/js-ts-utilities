export const containsElement = (parent: any, child: any) =>
    parent !== child && parent.contains(child);

export const getAncestors = (el: HTMLElement | any) => {
    let ancestors = [];
    while (el) {
        ancestors.unshift(el);
        el = el.parentNode;
    }
    return ancestors;
};

export const smoothScroll = (element: string) =>
    document.querySelector(element)?.scrollIntoView({
        behavior: 'smooth'
    });

export const onClickOutside = (element: HTMLElement | any, callback: Function) => {
    document.addEventListener('click', e => {
        if (!element.contains(e.target)) callback();
    });
};

export const getSelectedText = () => window.getSelection()?.toString();

export const fullscreen = (mode = true, el = 'body') =>
    mode
        ? document.querySelector(el)?.requestFullscreen()
        : document.exitFullscreen();