# KeepSystemJs Webpack Plugin

This Webpack plugin (tested with Webpack 2 beta) allows you to use system.import statements without having them subsituted for internal modules. Assuming you want to keep dynamic loading in your Webpack bundle, even to internal chunks.

## Installation

```
npm install https://github.com/wictorwilen.se/keepsystemjs.webpack.plugin
```

## Usage
Use as follows in your Webpack configuration file

```JavaScript
var KeepSystemJs = require('keepsystemjs.webpack.plugin')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'out.js'
  },
  plugins: [
    new KeepSystemJs({});
  ],
};
```