function confirmEnding(word, ending) {
  let re = new RegExp(ending)
  const searchWord = word.search(re)
  return word.length - searchWord === ending.length
}

describe('confirmEnding()', () => {
  it('example test', () => {
  // arrange
    const w = "Abstraction"
    const e = "action"

    // act
    const result = confirmEnding(w, e)

    // assert
    expect(result).toBe(true)
  })

  it('example test', () => {
    // arrange
      const w = "Open Sesame"
      const e = "pen"
  
      // act
      const result = confirmEnding(w, e)
  
      // assert
      expect(result).toBe(false)
    })

    it('my test', () => {
      // arrange
        const w = "Porcupine"
        const e = "pine"
    
        // act
        const result = confirmEnding(w, e)
    
        // assert
        expect(result).toBe(true)
      })
})