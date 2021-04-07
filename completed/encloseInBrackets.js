function encloseInBrackets(str) {
  return `(${str})`
}

describe('encloseInBrackets()', () => {
  it('example test', () => {
  // arrange
    const s = "derp"
  
    // act
    const result = encloseInBrackets(s);
  
    // assert
    expect(result).toBe("(derp)")
  })
})