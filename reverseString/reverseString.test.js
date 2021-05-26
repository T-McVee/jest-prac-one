const reverseString = require('./reverseString');

it('returns string', () => 
  expect(reverseString('I am the couch')).toMatch(/[I am the couch]/)
)

it('returns string in reverse', () =>
  expect(reverseString('I am the couch')).toEqual("hcuoc eht ma I")
)