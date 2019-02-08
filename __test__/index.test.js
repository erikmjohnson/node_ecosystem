const greet = require('../lib/greet');
const math = require('../lib/arithmetic');
const faker = require ('faker');

describe ('Testing greeting function.', () => {
  test('returns string.', () => {
    expect(greet.sayHi('world')).toEqual('Hello world.');
  });

  test('returns null.', () => {
    expect(greet.sayHi(123)).toBeNull();
  });
}); 

const firstArgument = faker.random.number();
const secondArgument = faker.random.number();

describe ('Testing add functions.', () => {
  test('returns total', () => {
    expect(math.add(firstArgument, secondArgument)).toEqual(firstArgument + secondArgument);
  });

  test('returns null', () => {
    expect(math.add(`${firstArgument}`, `${secondArgument}`)).toBeNull();
  });
});

describe ('Testing sub functions.', () => {
  test('returns total', () => {
    expect(math.sub(firstArgument, secondArgument)).toEqual(firstArgument - secondArgument);
  });
  test('returns null', () => {
    expect(math.add(`${firstArgument}`, `${secondArgument}`)).toBeNull();
  });
});

describe ('Testing mult functions.', () => {
  test('returns total', () => {
    expect(math.mult(firstArgument, secondArgument)).toEqual(firstArgument * secondArgument);
  });
  test('returns null', () => {
    expect(math.sub(`${firstArgument}`, `${secondArgument}`)).toBeNull();
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