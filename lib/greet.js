'use strict';

//Modules 
const greet = module.exports = {};

//Functions
greet.sayHi = (name) => {
  if(typeof name === 'string') {
    return `Hello ${name}.`;
  } else {
    return null;
  }
};