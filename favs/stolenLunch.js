function stolenLunch(note) {
  let dict = {'a': '0', 'b': '1', 'c': '2', 'd': '3', 'e': '4', 'f': '5', 'g': '6',
              'h': '7', 'i': '8', 'j': '9'}
              
  const words = note.split(' ')

  const decodeNums = words.slice(0, -1).map(word => {
    if (word.match(/[0-9]/)) {
      let wordBuilder = ''
      for (let i = 0; i < word.length; i++) {
          for (const [letter, num] of Object.entries(dict)) {
            if (word[i] === num) {
              wordBuilder += letter
            }
          }
          if (wordBuilder.length !== word.slice(0, i + 1).length) {
            wordBuilder += word[i]
          }
      }
      return wordBuilder
    }
    return word
  })
  
  const decodeLetters = words[words.length - 1]
  let numCode = ''
  for (let i = 0; i < decodeLetters.length; i++) {
    for (const [letter, num] of Object.entries(dict)) {
      if (decodeLetters[i] === letter) {
        numCode += num
      }
    } 
    if (numCode.length !== decodeLetters.slice(0, i + 1).length) {
      numCode += decodeLetters[i]
    }
  }
  return `${decodeNums.join(' ')} ${numCode}`
}

describe('stolenLunch()', () => {
  it('example test', () => {
  // arrange
    const note = "you'll n4v4r 6u4ss 8t: cdja"
  
    // act
    const result = stolenLunch(note);
  
    // assert
    expect(result).toBe("you'll never guess it: 2390")
  })

  it('another test', () => {
    // arrange
      const note = "you m867t 58n3 8t: beifr"
    
      // act
      const result = stolenLunch(note);
    
      // assert
      expect(result).toBe("you might find it: 1485r")
    })
})