var u = require('../')
var a = require('assertions')

  function assertBetween (lo, hi, depth, between) {
    between = between || u.between
    var b = between(lo, hi)

/*
    console.log(depth)
    console.log('<<<<', lo)
    console.log('====', b)
    console.log('>>>>', hi)
/**/

    a.greaterThan(b , lo)
    a.lessThan(b , hi)

    if(!depth) return
    if(~~(Math.random()*2)) 
      assertBetween(lo, b, depth - 1, between)
    else
      assertBetween(b, hi, depth - 1, between)
    
  }


exports.between = function (t) {

  assertBetween('!', '~', 200)

  t.end()
}
/*
  same as above but this time, append a random string to each.
  (I'm gonna use this to generate concurrently ordered strings
  that are unlikely to collide)
*/
exports.between2 = function (t) {

  assertBetween('!', '~', 200, function (a, b) {
    return u.between (a, b) + u.randstr(5)
  })

  t.end()
}

exports.between3 = function (t) {

  assertBetween(u.lo, u.hi, 200, u('$&[{}(=*)+]!#~`').between)

  t.end()
}

