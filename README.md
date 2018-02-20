# @pickra/css-components

> A CSS library and styleguide using SASS, BEM AND Flexbox

## Install

```console
npm install @pickra/css-components --save-dev
```

## Requirements

- node 6.0.0 or higher
- npm 3.8.6 or higher

## Usage

Import the css.
```sass
@import 'node_modules/@pickra/css-components/dist/css-components';
```

Import the color variables to use in your app.
```sass
@import 'node_modules/@pickra/css-components/src/colors/colors';
```

The icons are svgs in a javascript module.

Import the svgs.
```javascript
import 'node_modules/@pickra/css-components/dist/css-components.js';

<!-- OR -->

require('node_modules/@pickra/css-components/dist/css-components');
```

### View the Styleguide via Package

Navigate to the `index.html` in your node_modules...
```
node_modules/@pickra/css-components/styleguide/html/index.html
```
...and open it in the browser; no server needed.

## Features
- [WCAG 2.O](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) accessible colors
- Accessibility testing via [a11y](https://github.com/addyosmani/a11y)
- svg icons from [evil icons](http://evil-icons.io/)

## Development
- Prod build and open the styleguide in the browser: `npm run setup`
- Prod build: `npm run build`
- Development mode, watches `./src` changes on save: `npm run dev`
- Run a11y tests: `npm run test`
