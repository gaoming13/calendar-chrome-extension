// 本地开发模式，es6转码为es5
require('@babel/register');
module.exports = require('./build.es6');
