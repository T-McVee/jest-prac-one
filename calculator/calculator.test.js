const calculator = require('./calculator');

it('Calculator is defined', () => 
  expect(calculator).toBeDefined()
)

it('Has add operation', () =>
  expect(calculator.add()).toBeDefined()
)

it('add() returns the sum of two ints', () =>
  expect(calculator.add(1,2)).toBe(3)
)

it('add() returns the sum of two floats', () =>
  expect(calculator.add(0.3, 0.2)).toBe(0.5)
)

it('Has subtract() operation', () =>
  expect(calculator.subtract()).toBeDefined()
)

it('subract() returns the difference between two ints', () =>
  expect(calculator.subtract(3,2)).toBe(1)
)

it('subract() returns the difference between two floats', () =>
  expect(calculator.subtract(3.2,2.7)).toBe(0.5)
)

it('Has divide() operation', () =>
  expect(calculator.divide()).toBeDefined()
)

it('divide() returns the quotient of two ints', () =>
  expect(calculator.divide(4,2)).toBe(2)
)

const resultA = 5/3;
it('divide() returns the quotient of two ints (prime)', () =>
  expect(calculator.divide(5,3)).toBe(resultA)
)

const resultB = 5.3 / 7;
it('divide() returns the quotient of two floats', () =>
  expect(calculator.divide(5.3, 7)).toBe(resultB)
)

it('Has multiply() operation', () =>
  expect(calculator.multiply()).toBeDefined()
)

it('multiply() returns the multiple of two ints', () =>
  expect(calculator.multiply(2,3)).toBe(6)
)

const resultC = 6.21 * 0.8819;
it('multiply() returns the multiple of two floats', () =>
  expect(calculator.multiply(6.21, 0.8819)).toBe(resultC)
)
