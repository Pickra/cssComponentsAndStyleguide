# The Breakdown
- [src folder](#src)
- [styleguide folder](#styleguide)
- [styleguide-builder folder](#styleguide-builder)
- [nightwatch and friends](#nightwatch)
- [tests folder](#tests)

<a name="src"></a>
## All the styles are in the `src` folder.
Written in SCSS, pulled into webpack via `entry.js`, and compiled to CSS; the svgs too.
Here's the fun part, the SCSS files contain commented out markdown.

**BUT WHY?!!?!??!**

<a name="styleguide-builder"></a>
## The `styleguide-builder` folder is where [kss-node](https://github.com/kss-node/kss-node) does it's thing.
`builder.js` runs the commented out markdown through the `index.hbs`
template and spits out html. The comments are split into sections.
```css
// Title
//
// Markup
//
// Styleguide
```
`Title` is the section header; an h1 - h6.
<hr />

`Markup` is how `kss-node` builds the component example, and the rest of the HTML, based
on the styles. You can write HTML...
```css
Markup: <div class="style-name">YES! Finally! I can write HTML in markdown...in SCSS comments</div>
```
Or link to an HTML file...
```css
Markup: rainbow.html
```
<hr />

The section between `Title` and `Markup`, is where markdown is used to explain the styles...
```css
// Title
//
// A very **bold** explanation with [a link](https://to-a-cool-place.com).
//
// Markdown: <button>ima button</button>
```
...AND/OR tell `kss-node` to make multiple examples of the styles.
```css
// Title
//
// A very **bold** explanation with [a link](https://to-a-cool-place.com).
//
// .button--blue  - Explanation of blue button.
// .button--red   - Explanation of red button.
// .button--green - Explanation of green button.
//
// Markdown: <button {{ modifier_class }}>ima button</button>
```
The `{{ modifier_class }}` generates an example for a each class name.
<hr />

`Styleguide` tells `kss-node` where to put each page or page section, in relation to the other
 HTML, and creates a link in the sidebar. So you can have a page of cool stuff...
```css
// Styleguide CoolStuff
```
...or a page of cool stuff split into sections
```css
// Styleguide CoolStuff.unicorns
```
```css
// Styleguide CoolStuff.rocks
```
```css
// Styleguide CoolStuff.pixie-dust
```

That's alot to process. Maybe take a break or go have a smoke before reading further.

<a name="styleguide"></a>
## The `styleguide` folder...
...is where `kss-node` outputs the HTML files.

<a name="nightwatch"></a>
## Nightwatch and friends

[Nightwatch](https://github.com/nightwatchjs/nightwatch) is an automated testing framework that wraps 
[selenium](https://www.seleniumhq.org) in node. It uses [webdriver](https://www.w3.org/TR/webdriver/) for browser automation, I'm using chromedriver, to tell the browser to do stuff; like hover or move, etc...
It has an [API](http://nightwatchjs.org/api) for Mocha assertions and Chai expects. You can also use [Node assertions](https://nodejs.org/api/assert.html). It's wired up in the `nightwatch.conf.js`.

But I'm not using much of those assertions/expects. The tests are mostly coming from 
[axe-core](https://github.com/dequelabs/axe-core). The `nightwatch-helpers` folder
contains artisanally crafted Nightwatch methods/commands that run the axe
[rules/tests](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md) against the HTML.

The `server` folder serves the `dist` folder and the `kss-node` generated HTML. I probably should have used a webpack server, but I got lazy.

<a name="tests"></a>
## Tests folder...
Where the Nightwatch/axe-core tests live.