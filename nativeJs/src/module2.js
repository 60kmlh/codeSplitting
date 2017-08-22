function fn2() {
  // require.ensure([],function(){
  //   var utils = require('./utils')
  //   utils(function(){console.log('module2')})
  // },'utils')
  
  import(/* webpackChunkName: "utils" */'./utils').then(module => {
    var utils = module //es6模块 module.default
    utils(function(){console.log('module2')})
  })
}

module.exports = fn2
