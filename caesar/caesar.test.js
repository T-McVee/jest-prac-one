const caesar = require('./caesar');

it('caesar is defined', () =>
  expect(caesar).toBeDefined()
)

it('Returns a string', () =>
  expect(caesar('I like dogs')).toMatch(/[\w\W]/gi)
)

it('Move letters by key', () =>
  expect(caesar('I like dogs', 1)).toMatch(/J mjlf epht/ig)
)

it('Handle wrapping', () =>
  expect(caesar('XyZ', 3)).toMatch(/abc/ig)
)

it('Retains case', () =>
  expect(caesar('IaM hErE tO pArTy', 3)).toMatch("LdP kHuH wR sDuWb")
)

it('Retains punctuation', () =>
  expect(caesar('@Dave, I\'m here!', 3)).toMatch("@Gdyh, L'p khuh!")
)