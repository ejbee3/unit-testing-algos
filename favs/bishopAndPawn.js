// can the bishop capture the pawn?

function bishopAndPawn(bishop, pawn) {
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const bCol = bishop[0]
  const bRow = parseInt(bishop[1])
  let validMoves = []
  
  const rightSlice = columns.slice(columns.indexOf(bCol))
  if (rightSlice.length > 1) {
    //upperRight
    if (bRow !== 8) {
      for (let i = 1; i < rightSlice.length; i++) {
        validMoves.push(`${rightSlice[i]}${i + 1}`)
      }
    }
    // lowerRight
    if (bRow !== 1) {
      for (let i = 1, j = bRow - 1; i < rightSlice.length; i++, j--) {
        validMoves.push(`${rightSlice[i]}${j}`)
      }
    }
    
  }
  
  const leftSlice = columns.reverse().slice(columns.indexOf(bCol))
  if (leftSlice.length > 1) {
    // lowerLeft
    if (bRow !== 1) {
      for (let i = 1, j = bRow - 1; i < leftSlice.length; i++, j--) {
        validMoves.push(`${leftSlice[i]}${j}`)
      }
    }
    // upperLeft
    if (bRow !== 8) {
      for (let i = 1, j = bRow + 1; i < leftSlice.length; i++, j++) {
        validMoves.push(`${leftSlice[i]}${j}`)
      }
    }
  }
  return validMoves.includes(pawn)
}


describe('bishopAndPawn()', () => {
  it('example test', () => {
  // arrange
    const b = "a1"
    const p = "c3"

    // act
    const result = bishopAndPawn(b, p)

    // assert
    expect(result).toBe(true)
  })

  it('lower left test', () => {
    // arrange
      const b = "h8"
      const p = "c3"
  
      // act
      const result = bishopAndPawn(b, p)
  
      // assert
      expect(result).toBe(true)
    })

  it('upper left test', () => {
      // arrange
      const b = "h1"
      const p = "c4"
    
      // act
      const result = bishopAndPawn(b, p)
    
      // assert
      expect(result).toBe(false)
  })

  it('lower right test', () => {
    // arrange
    const b = "a8"
    const p = "d2"
  
    // act
    const result = bishopAndPawn(b, p)
  
    // assert
    expect(result).toBe(false)
  })
})