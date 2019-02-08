'use strict';

//Export
let arithmetic = module.exports = {};

//Functions
arithmetic.add = (array) => {
  if (!array.some(isNaN) === true) {return array.reduce((acc, curr) => acc + curr);}
  else {return null;}
};

arithmetic.sub = (array) => {
  if (!array.some(isNaN) === true) {return array.reduce((acc, curr) => acc - curr);}
  else {return null;}
};

arithmetic.mult = (array) => {
  if (!array.some(isNaN) === true) {return array.reduce((acc, curr) => acc * curr);}
  else {return null;}
};

arithmetic.div = (a,b) => {
  if(typeof a === 'number' && typeof b === 'number'){return a/b;}
  else {return null;}
};