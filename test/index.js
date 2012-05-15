var u = require('../')
var a = require('assertions')

  function _(l, b, h) {
    a.equal(u.between(l, h), b)
  }

exports.between = function (t) {

  function assertBetween (lo, hi, depth) {
    var b = u.between(lo, hi)

/*
    console.log(depth)
    console.log('<<<<', lo)
    console.log('====', b)
    console.log('>>>>', hi)
/**/

    a.greaterThan(b , lo)
    a.lessThan(b , hi)

    if(!depth) return
    if(~~(Math.random()*2)) {
      assertBetween(lo, b, depth - 1)
      //assertBetween(b, hi, depth - 1)
    }else{
      assertBetween(b, hi, depth - 1)
      //assertBetween(lo, b, depth - 1)
    }
  }

  assertBetween('!', '~', 200)

  t.end()
}
/*
  same as above but this time, append a random string to each.
  (I'm gonna use this to generate concurrently ordered strings
  that are unlikely to collide)
*/
exports.between2 = function (t) {

  function assertBetween (lo, hi, depth) {
    var b = u.between(lo, hi) + u.randstr(5)

    a.greaterThan(b , lo)
    a.lessThan(b , hi)

    if(!depth) return
    if(~~(Math.random()*2)) {
      assertBetween(lo, b, depth - 1)
      //assertBetween(b, hi, depth - 1)
    }else{
      assertBetween(b, hi, depth - 1)
      //assertBetween(lo, b, depth - 1)
    }
  }

  assertBetween('!', '~', 200)

  t.end()
}

