const analyze = require('./analyze');

const inputArrayOne = [1, 2, 3, 4, 5];
const inputArrayTwo = [10, 3, 3, 100, 52, 17, 6];


it ('Returns object', () => 
  expect(analyze(inputArrayOne)).toEqual(expect.any(Object))
)

/* min property  tests */
it ('Result conatins a min property', () =>
  expect(analyze(inputArrayOne).min).toBeDefined()
)

it ('Min property returns the lowest number from the input array', () =>
  expect(analyze(inputArrayOne).min).toBe(1)
)

it ('Min property returns the lowest number from the input array', () =>
  expect(analyze(inputArrayTwo).min).toBe(3)
)


/* max property tests */
it ('Result conatins a max property', () =>
  expect(analyze(inputArrayOne).max).toBeDefined()
)

it ('max property returns the highest number from the input array', () =>
  expect(analyze(inputArrayOne).max).toBe(5)
)

it ('max property returns the highest number from the input array', () =>
  expect(analyze(inputArrayTwo).max).toBe(100)
)

/* avg property tests */
it ('Result conatins an avg property', () =>
  expect(analyze(inputArrayOne).avg).toBeDefined()
)

it ('avg property returns the average of all numbers in the input array', () =>
  expect(analyze(inputArrayOne).avg).toBe(3)
)

it ('avg property returns the average of all numbers in the input array', () =>
  expect(analyze(inputArrayTwo).avg).toBe(27.29)
)

/* len property tests */
it ('Result conatins a length property', () =>
  expect(analyze(inputArrayOne).len).toBeDefined()
)

it ('Length propery returns the number of items in input array', () =>
  expect(analyze(inputArrayOne).len).toBe(5)
)

it ('Length propery returns the number of items in input array', () =>
  expect(analyze(inputArrayTwo).len).toBe(7)
)