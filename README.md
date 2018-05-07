# @pickra/css-components

> A CSS library and styleguide using SASS, BEM AND Flexbox

Preview the [styleguide](https://pickra.github.io/cssComponentsAndStyleguide/index.html)

## Install

```console
npm install @pickra/css-components --save-dev
```

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

## Credit
- svg icons from [evil icons](http://evil-icons.io/)
- The styleguide is built with [kss-node](https://github.com/kss-node/kss-node)
- [nightwatch](https://github.com/nightwatchjs/nightwatch) is the testing framework
- Accessibility testing via [axe-core](https://github.com/dequelabs/axe-core)

## Development
**Requirements:** `node` 6.0.0 or higher, `npm` 3.8.6 or higher

- `npm run styleguide`: Prod build and open the styleguide in the browser
- `npm run build`: Prod build
- `npm run dev`: Development mode, watch/rebuild on save

### To run the tests
- `npm start`, starts the test server
- in a different terminal, `npm test`

### To run 1 test file, prepend `-- -t tests/theTestFileName.js`
```
npm test -- -t tests/index.js
```

### To run 1 testcase, prepend `--tescase "name of testcase"`
```
npm test -- -t tests/index.js "Index sidebar hovered link color-contrast"
```