// given the number of children and total candy, calculate the max number of candy that eat child
// can get if they all get the same number of pieces and they cannot split pieces

function candies(children, totalCandy) {
  return Math.floor(totalCandy / children) * children
}

describe('candies()', () => {
  it('example test', () => {
  // arrange
    const n = 3
    const m = 10

    // act
    const result = candies(n, m)

    // assert
    expect(result).toBe(9)
  })

  it('more children, less candy per child', () => {
    // arrange
      const n = 5
      const m = 24
  
      // act
      const result = candies(n, m)
  
      // assert
      expect(result).toBe(20)
    })

  it('upper constraint for children', () => {
      // arrange
      const n = 10
      const m = 2
    
      // act
      const result = candies(n, m)
    
      // assert
      expect(result).toBe(0)
  })

  it('lower constraint for children', () => {
    // arrange
    const n = 1
    const m = 100
  
    // act
    const result = candies(n, m)
  
    // assert
    expect(result).toBe(100)
  })
})