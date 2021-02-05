// adds top and bottom border of asterisks, then adds vertical border in between

function addBorder(p) {
  const hBorder = '*'.repeat(p[0].length + 2)
  let vBorder = p.map(str => `*${str}*`)
  vBorder.unshift(hBorder)
  vBorder.push(hBorder)
  return vBorder

}


// TESTS

describe('addBorder()', () => {
  it('adds border to an array with two strings', () => {
    // arrange
  const picture = ["abc", "ded"]

  // act
  const result = addBorder(picture)

  // assert
  expect(result).toEqual(["*****", "*abc*", "*ded*", "*****"])
  })

  it('adds border to an array with 4 strings', () => {
    // arrange
  const picture = ["qerqwer", "asfdsdf", "zxcvbzc", "ghjkhlg"]

  // act
  const result = addBorder(picture)

  // assert
  expect(result).toEqual(["*********", "*qerqwer*", "*asfdsdf*", "*zxcvbzc*", "*ghjkhlg*",  "*********"])
  })
})