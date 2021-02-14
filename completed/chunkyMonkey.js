// break an array into a two dimensional array with length n between the two sub arrays

function chunkyMonkey(array, length) {
  return [array.slice(0, length), array.slice(length)]
}

describe('chunkyMonkey()', () => {
  it('example test', () => {
  // arrange
    const arr = ["a", "b", "c", "d"]
    const l = 2

    // act
    const result = chunkyMonkey(arr, l)

    // assert
    expect(result).toEqual([["a", "b"], ["c", "d"]])
  })

  it('another example test', () => {
    // arrange
      const arr = [0, 1, 2, 3, 4, 5]
      const l = 4
  
      // act
      const result = chunkyMonkey(arr, l)
  
      // assert
      expect(result).toEqual([[0, 1, 2, 3], [4, 5]])
    })
})