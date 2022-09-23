# js-ts-utilities

[![npm version](https://badge.fury.io/js/js-ts-utilities.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/js-ts-utilities.svg)][npm_url]
[![license](https://img.shields.io/npm/l/js-ts-utilities.svg)][npm_url]

<!-- ![Dependency Count](https://badgen.net/bundlephobia/dependency-count/js-ts-utilities) -->
![Types Included](https://badgen.net/npm/types/js-ts-utilities)
[![gzip size](https://img.badgesize.io/https:/unpkg.com/js-ts-utilities/dist/js-ts-utilities.cjs.production.min.js?label=gzip&compression=gzip)](https:/unpkg.com/js-ts-utilities/dist/js-ts-utilities.cjs.production.min.js)

[npm_url]: https://www.npmjs.org/package/js-ts-utilities

----------------------------------------

## Installation

With Yarn:

```bash
yarn add js-ts-utilities
```

With npm:

```bash
npm install --save js-ts-utilities
```

----------------------------------------
<br />

## <b>URL Utilities<b>

```js
import { getBaseURL, isAbsoluteURL, getURLParameters } from 'js-ts-utilities';
```

| Method | Parameters | Example | Output |
| ----- | ----- | ----- | ----- |
| ```getBaseURL``` | ```(url: string)``` | ```getBaseURL('https://url.com/page?name=Punit&surname=Soni');``` | ```https://url.com/page``` |
| ```isAbsoluteURL``` | ```(url: string)``` | ```isAbsoluteURL('https://google.com');``` | ```true``` |
| ```getURLParameters``` | ```(url: string)``` | ```getURLParameters('https://url.com/page?name=Punit&surname=Soni');``` | ```{ name: 'Punit', surname: 'Soni' }``` |

----------------------------------------

<br />

## <b>HTML Utilities</b>

```js
import { containsElement, getAncestors, smoothScroll, onClickOutside, getSelectedText } from 'js-ts-utilities';
```

| Method | Parameters | Example | Output |
| ----- | ----- | ----- | ----- |
| ```containsElement``` | ```(element1: HTMLElement, element2: HTMLElement)``` | ```containsElement(document.querySelector('head'), document.querySelector('title'));``` | ```true``` |
| ```getAncestors``` | ```(element: HTMLElement)``` | ```getAncestors(document.querySelector('body'));``` | ```[document, html, body]``` |
| ```smoothScroll``` | ```(elementIdOrClass: string)``` | ```smoothScroll('#fooBar');``` | ```scrolls smoothly to the element with the id fooBar``` |
| ```onClickOutside``` | ```(elementIdOrClass: string, method: Function)``` | ```onClickOutside('#my-element', () => console.log('Hello'));``` | ```Will log 'Hello' whenever the user clicks outside of #my-element``` |
| ```getSelectedText``` | ```-``` | ```getSelectedText()``` | ```'Lorem ipsum'``` |
| ```fullscreen``` | ```(isFullScreen?: boolean)``` | ```fullscreen()```<br />```fullscreen(false)``` | ```> fullscreen() - Opens `body` in fullscreen mode```<br />```> fullscreen(false) - Exit from fullscreen mode``` |


<br />

## <b>Common Utilities</b>

```js
import { generateUUID } from 'js-ts-utilities';
```

| Method | Parameters | Example | Output |
| ----- | ----- | ----- | ----- |
| ```generateUUID``` | ```-``` | ```generateUUID();``` | ```7982fcfe-5721-4632-bede-6000885be57d``` |


<br />

## <b>Date Utilities</b>

```js
import { isDateValid, getTimestamp } from 'js-ts-utilities';
```

| Method | Parameters | Example | Output |
| ----- | ----- | ----- | ----- |
| ```isDateValid``` | ```(date: string)``` | ```isDateValid('December 17, 1995 03:24:00');``` | ```true``` |
| ```getTimestamp``` | ```-``` | ```getTimestamp();``` | ```1602162242``` |

<br />

## <b>Array Utilities</b>

```js
import { push, filter, update, remove } from 'js-ts-utilities';
```

| Method | Parameters | Example | Output |
| ----- | ----- | ----- | ----- |
| ```push``` | ```(array: any[], elementToAdd: any)``` | ```push([10, 20, 30, 40], 50)``` | ```[10, 20, 30, 40, 50]``` |
| ```filter``` | ```(array: any[], callback: Function)``` | ```filter([10, 20, 30, 40], (d: number) => d < 40)``` | ```[10, 20, 30]``` |
| ```update``` | ```(array: any[], indexToUpdate: number, newElement: any)``` | ```update([10, 20, 40], 2, 30)``` | ```[10, 20, 30]``` |
| ```remove``` | ```(array: any[], indexToRemove: number)``` | ```remove([10, 20, 30], 2)``` | ```[10, 20]``` |






