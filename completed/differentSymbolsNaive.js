function differentSymbolsNaive(str) {
  const strSet = new Set(str)
  return strSet.size
}



describe('differentSymbolsNaive()', () => {
  it('example test', () => {
  // arrange
    const s = "cabca"
  
    // act
    const result = differentSymbolsNaive(s);
  
    // assert
    expect(result).toBe(3)
  })
})