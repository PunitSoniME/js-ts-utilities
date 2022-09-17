# js-ts-utilities

[![npm version](https://badge.fury.io/js/js-ts-utilities.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/js-ts-utilities.svg)][npm_url]
[![license](https://img.shields.io/npm/l/js-ts-utilities.svg)][npm_url]

<!-- ![Dependency Count](https://badgen.net/bundlephobia/dependency-count/js-ts-utilities) -->
![Types Included](https://badgen.net/npm/types/js-ts-utilities)
[![gzip size](https://img.badgesize.io/https:/unpkg.com/js-ts-utilities/dist/js-ts-utilities.cjs.production.min.js?label=gzip&compression=gzip)](https:/unpkg.com/js-ts-utilities/dist/js-ts-utilities.cjs.production.min.js)

[npm_url]: https://www.npmjs.org/package/js-ts-utilities

## Installation

With Yarn:

```bash
yarn add js-ts-utilities
```

With npm:

```bash
npm install --save js-ts-utilities
```

## Usage


<details>
<summary style="font-size: 1.2rem; font-weight: bold">URL Utilities</summary>

```
import { getBaseURL, isAbsoluteURL, getURLParameters, containsElement } from 'js-ts-utilities';

const getBaseURLResult = getBaseURL('https://url.com/page?name=Punit&surname=Soni');
console.log("getBaseURL ", getBaseURLResult);   //  https://url.com/page


const isAbsoluteURLResult = isAbsoluteURL('https://google.com');
console.log("isAbsoluteURL ", isAbsoluteURLResult);   //  true


const getURLParametersResult = getURLParameters('https://url.com/page?name=Punit&surname=Soni');
console.log("getURLParameters ", getURLParametersResult);    //  { name: 'Punit', surname: 'Soni' }


const containsElementResult = containsElement(
    document.querySelector('head'),
    document.querySelector('title')
);
console.log("containsElement ", containsElementResult);    //  true

```
</details>




