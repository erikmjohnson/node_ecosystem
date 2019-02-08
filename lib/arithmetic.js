'use strict';

let arithmetic = module.exports = {};

arithmetic.add = (a,b) => {
  if (typeof a === 'number' && typeof b === 'number') {return a+b;}
  else {return null;}
};

arithmetic.sub = (a,b) => {
  if(typeof a === 'number' && typeof b === 'number'){return a-b;}
  else {return null;}
};

arithmetic.mult = (a,b) => {
  if(typeof a === 'number' && typeof b === 'number'){return a*b;}
  else {return null;}
};

arithmetic.div = (a,b) => {
  if(typeof a === 'number' && typeof b === 'number'){return a/b;}
  else {return null;}
};