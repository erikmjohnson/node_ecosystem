//Paths
const greet = require('../lib/greet');
const math = require('../lib/arithmetic');
const faker = require ('faker');
//Global Variables
const array = [faker.random.number(), faker.random.number(), faker.random.number()];
let firstArgument = faker.random.number();
let secondArgument = faker.random.number();

//Tests
describe ('Testing greeting function.', () => {
  test('returns string.', () => {
    expect(greet.sayHi('world')).toEqual('Hello world.');
  });

  test('returns null.', () => {
    expect(greet.sayHi(123)).toBeNull();
  });
}); 

describe ('Testing add functions.', () => {
  test('returns total', () => {
    expect(math.add(array)).toEqual(array[0] + array[1] + array[2]);
  });

  test('returns null', () => {
    expect(math.add(['cat', '1'])).toBeNull();
  });
});

describe ('Testing sub functions.', () => {
  test('returns total', () => {
    expect(math.sub(array)).toEqual(array[0] - array[1] - array[2]);
  });
  test('returns null', () => {
    expect(math.sub(['cat', '1'])).toBeNull();
  });
});

describe ('Testing mult functions.', () => {
  test('returns total', () => {
    expect(math.mult(array)).toEqual(array[0] * array[1] * array[2]);
  });
  test('returns null', () => {
    expect(math.mult(['cat', '1'])).toBeNull();
  });
});

describe ('Testing div functions.', () => {
  test('returns total', () => {
    expect(math.div(firstArgument, secondArgument)).toEqual(firstArgument / secondArgument);
  });
  test('returns null', () => {
    expect(math.div(`${firstArgument}`, `${secondArgument}`)).toBeNull();
  });
});