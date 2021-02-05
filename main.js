 function insertDashes(str) {
  const spaceIdx = str.search(/\s/)
  const dashMap = [...str].map((char, idx) => {
    if (idx === spaceIdx - 1 || idx === spaceIdx) {
      return char
    } else {
      return char + '-'
    }
  })
  return dashMap.join('').slice(0, -1)
}


describe('insertDashes()', () => {
  it('insert dashes in between chars', () => {
      // arrange
      const value = "aba caba";
      
      // act
      const result = insertDashes(value);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toBe("a-b-a c-a-b-a");
  });
});

