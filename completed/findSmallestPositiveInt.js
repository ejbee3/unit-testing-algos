// find the smallest positive integer in an array of ints (+ or -)

function findSmallestPositiveInt(A) {
  const findOne = A.find(x => x === 1)
  if (findOne === undefined) {
    return 1
  } else {
    A.sort((a, b) => a - b)
    const sliceAtOne = A.slice(A.indexOf(1))
    const incrementByTwo = sliceAtOne.filter((x, idx) => sliceAtOne[idx + 1] ? sliceAtOne[idx + 1] - x > 1 : null)
    if (incrementByTwo.length === 0) {
      return Math.max(...sliceAtOne) + 1
    } else {
      return incrementByTwo[0] + 1
    }
  }
}

describe('findSmallestPositiveInt()', () => {
  it('array with positive ints', () => {
  // arrange
    const arr = [1, 2, 4, 6, 1, 3]

    // act
    const result = findSmallestPositiveInt(arr)

    // assert
    expect(result).toBe(5)
  })

  it('array with negative ints', () => {
  // arrange
    const arr = [-1, -3]

    // act
    const result = findSmallestPositiveInt(arr)

    // assert
    expect(result).toBe(1)
  })

  it('array with positive and negative ints', () => {
      // arrange
      const arr = [-1, -3, 1, 3, 4, 6, 5]
    
      // act
      const result = findSmallestPositiveInt(arr)
    
      // assert
      expect(result).toBe(2)
    })

  it('array with positive ints that increment by one', () => {
      // arrange
      const arr = [2, 1, 3, 4, 6, 5]
    
      // act
      const result = findSmallestPositiveInt(arr)
    
      // assert
      expect(result).toBe(7)
  })

  it('a single element array', () => {
    // arrange
    const arr = [5]
  
    // act
    const result = findSmallestPositiveInt(arr)
  
    // assert
    expect(result).toBe(1)
  })

  it('more than one int positive array', () => {
    // arrange
    const arr = [5, 4, 6, 2]
  
    // act
    const result = findSmallestPositiveInt(arr)
  
    // assert
    expect(result).toBe(1)
  })

  it(`incremental array that doesn't start at one`, () => {
    // arrange
    const arr = [90, 91, 92, 93]
  
    // act
    const result = findSmallestPositiveInt(arr)
  
    // assert
    expect(result).toBe(1)
  })
})