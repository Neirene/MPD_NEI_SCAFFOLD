# Nei's initial projects scaffolding

This is a sample project which is just a simple scaffolding that can be used for bigger projects, it includes all the development scripts needed to setup your environment such as ES6 code transpiler Babel, Webpack to compile all your project assets, Mocha to run Unit Testing and other features.

Please refer to the package.json "scripts" area to know all the possible scripts you can run over here.

# Available Commands コマンド
```
  "scripts": {
    "init": "mkdir dist",
    "clean": "rmdir /Q /S dist",
    "prebuild": "npm run clean && npm run init",
    "build": "webpack --config webpack.config.js",
    "dev": "webpack-dev-server --inline --hot",
    "test": "mocha --compilers js:babel-core/register ./src/**/*.test.js",
    "start": "npm run dev"
  },
```
# Initial Setup

You will need Node.js to run this thing

Make sure to do `npm install` to install all the required repositories for this project else everything will break including your soul. 


PD: I forgot the **Markdown** syntax to make this file prettier (/ω＼)