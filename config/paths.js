const path = require('path');

const BASE_DIR = path.resolve(__dirname, '..');
const createPath = (targetPath) => path.resolve(BASE_DIR, targetPath);

module.exports = {
  entry: createPath('src/app/main.tsx'),
  src: createPath('src'),
  build: createPath('build'),
  public: createPath('public'),
  env: createPath('.env')
};
