// loops through an array of ints and finds the adjacent ints with the largest (postive) product

function adjacentElementsProduct(array) {
  let productsArr = []
  for (let i = 0; i < array.length; i++) {
      if (i === array.length - 1) {
        const product = array[i] * array[i - 1]
        productsArr.push(product)
      } else {
        const product = array[i] * array[i + 1]
        productsArr.push(product)
      }
  }
  return Math.max(...productsArr)
}

describe('adjacentElementsProduct()', () => {
  it('sample test of given array', () => {
  // arrange
  const arr = [3, 6, -2, -5, 7, 3]

  // act
  const result = adjacentElementsProduct(arr)

  // assert
  expect(result).toBe(21)
  })

  it('my own array test, longer length', () => {
  // arrange
  const arr = [4, 5, 2, -8, 7, 5, 6, -8, 7, -1]

  // act
  const result = adjacentElementsProduct(arr)

  // assert
  expect(result).toBe(35)
  })
})