module.exports = {
  "plugins": ["jest"],
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": "airbnb",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "rules": {
    "no-underscore-dangle": "off",
    "linebreak-style": 0
  }
};