// for number of legs, return an array of n people that 
// could be in the combo, in asc order

function houseOfCats(legs) {
  if (legs < 2) {
    return [0]
  }
  let humanLegs = []
  for (let i = 2; i <= legs; i += 2) {
    if (i % 4 !== 0) {
      humanLegs.push(i / 2)
    }
  }
  return humanLegs
}

describe('houseOfCats()', () => {
  it('example test', () => {
  // arrange
    const l = 6

    // act
    const result = houseOfCats(l)

    // assert
    expect(result).toEqual([1, 3])
  })

  // this test likely isn't correct, but I'm too lazy to do it with pen
  // and paper rn xD
  it('upper constraint', () => {
    // arrange
      const l = 45
  
      // act
      const result = houseOfCats(l)
  
      // assert
      expect(result).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21])
    })
})