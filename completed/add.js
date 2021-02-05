// adds x parameters together

function add(...params) {
  return params.reduce((prev, current) => {
    return prev + current
  })
}

// TESTS

describe('add()', () => {
  it('adds two numbers together', () => {
    // arrange
  const num1 = 4
  const num2 = 8

  // act
  const result = add(num1, num2)

  // assert
  expect(result).toBe(12)
  })

  it('adds three numbers together', () => {
    // arrange
  const num1 = 1308
  const num2 = 548
  const num3 = 321

  // act
  const result = add(num1, num2, num3)

  // assert
  expect(result).toBe(2177)
  })

  it('adds two negative numbers together', () => {
    // arrange
  const num1 = -67
  const num2 = -75

  // act
  const result = add(num1, num2)

  // assert
  expect(result).toBe(-142)
  })
})