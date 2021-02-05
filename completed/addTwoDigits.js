// adds the two digits of a two int number together

function addTwoDigits(n) {
  const numStr = n.toString()
  return parseInt(numStr[0]) + parseInt(numStr[1])
}

describe('addTwoDigits()', () => {
  it('sample test of n = 29', () => {
  // arrange
  const num = 29

  // act
  const result = addTwoDigits(num)

  // assert
  expect(result).toBe(11)
  })

  it('second test of n = 75', () => {
  // arrange
  const num = 75

  // act
  const result = addTwoDigits(num)

  // assert
  expect(result).toBe(12)
  })
})