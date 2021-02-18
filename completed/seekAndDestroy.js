// find elements that are the same and filter them out!

function seekAndDestroy(array, elementsToBeDestroyed) {
  return array.filter(el => !elementsToBeDestroyed.includes(el))
}

describe('seekAndDestroy()', () => {
  it('example test', () => {
  // arrange
    const arr = [3, 5, 1, 2, 2]
    const arr2 = [2, 3, 5]

    // act
    const result = seekAndDestroy(arr, arr2)

    // assert
    expect(result).toEqual([1])
  })

  it('example test 2', () => {
    // arrange
      const arr = [1, 2, 3, 5, 1, 2, 3]
      const arr2 = [2, 3]
  
      // act
      const result = seekAndDestroy(arr, arr2)
  
      // assert
      expect(result).toEqual([1, 5, 1])
    })
})