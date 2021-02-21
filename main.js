// You can do anything you set your mind to, besides go to the moon of course.

function minesweeper(matrix) {
  return matrix.map((row, rIdx) => {
    return row.map((_, cIdx) => {
      let mines = 1
      if (matrix[rIdx][cIdx - 1] && matrix[rIdx + 1][cIdx]) {
        mines += 1
      }
      if (matrix[rIdx][cIdx + 1] && matrix[rIdx - 1][cIdx]) {
        mines += 1
      }
      return mines
    })
  })
}

describe('minesweeper()', () => {
  it('example test', () => {
  // arrange
    const m = [[true, false, false],
              [false, true, false],
              [false, false, false]]

    // act
    const result = minesweeper(m)

    // assert
    expect(result).toEqual([[1, 2, 1], [2, 1, 1], [1, 1, 1]])
  })

  it('upper constraint', () => {
    // arrange
      const m = [[true, false, false, true, false],
                [false, true, false, false, true],
                [true, false, false, true, false],
                [false, true, true, false, true],
                [true, false, false, true, false]]
  
      // act
      const result = minesweeper(m)
  
      // assert
      expect(result).toEqual([[1, 2, 1, 1, 1], [2, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]])
    })
})
