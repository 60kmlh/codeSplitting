console.log('index');

var btn1 = document.getElementById('module1')
var btn2 = document.getElementById('module2')

btn1.addEventListener('click',function() {
  require.ensure([],function(require) {
    var fn = require('./module1.js')
    fn()
  },'module1')
})

btn2.addEventListener('click',function() {
  require.ensure([],function(require) {
    var fn = require('./module2.js')
    fn()
  },'module2')
})