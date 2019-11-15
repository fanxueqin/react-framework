const path = require('path');
const { override, fixBabelImports, addLessLoader, addWebpackAlias, babelInclude ,useBabelRc  } = require('customize-cra');
const TerserPlugin = require('terser-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
let addCustom = () => config => {
  let optimization = {
      minimizer: [
        new TerserPlugin({
          sourceMap: false
        })
      ]
  }
  config.optimization.minimizer = optimization.minimizer;
  return config;
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
 addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
        // '@primary-color': '#1DA57A' ,
        // '@link-color': '#1DA57A',
    },
 }),
 addWebpackAlias({
    '@': resolve('src'),
    'components':path.resolve(__dirname,'src/components'),
    'views': path.resolve(__dirname,'src/views'),
    'layout': path.resolve(__dirname,'src/layout'),
    'router': path.resolve(__dirname,'src/router'),
    'api':path.resolve(__dirname,'src/api'),
    'store': path.resolve(__dirname,'src/store'),
    'assets': path.resolve(__dirname,'src/assets,'),
    'mock': path.resolve(__dirname,'src/mock'),
    'utils': path.resolve(__dirname,'src/utils')
 }),
 babelInclude([
  path.resolve("src"), 
 ]),
 useBabelRc(),
 addCustom()
);