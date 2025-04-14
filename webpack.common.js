const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'personal-page/dist'),
    clean: true,
    filename: './js/app.js',
  },
};
