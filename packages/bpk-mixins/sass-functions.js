const nodeSass = require('node-sass');

module.exports = {
  'encodebase64($string)': (str) => {
    const buffer = new Buffer(str.getValue());

    return nodeSass.types.String(buffer.toString('base64'));
  },
};
