'use strict';

const greet = require('./lib/greet');

const math = require('./lib/arithmetic');

console.log(greet.sayHi(123));
console.log(math.add(2,2));
console.log(math.sub(3,2));
console.log(math.mult(2,2));
console.log(math.div(4,2));
