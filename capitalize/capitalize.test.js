const capitalize = require('./capitalize');

it('returns string', () => 
  expect(capitalize('john')).toMatch(/john/i)
)

it ('First letter is capital', () =>
  expect(capitalize('john')).toEqual('John')
)