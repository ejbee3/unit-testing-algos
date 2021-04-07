function commonCharCount(str1, str2) {
  let countObj = {}
  
  const referenceStr = str1.length <= str2.length ? str1 : str2
  const compareStr = referenceStr.length === str1.length ? str2 : str1 

  let refCount = letterCount(referenceStr)

  for (let i = 0; i < referenceStr.length; i++) {
    for (let j = 0; j < compareStr.length; j++) {
      if (referenceStr[i] === compareStr[j] && referenceStr[i] !== ' ') {
        const ref = referenceStr[i]
        if (ref in countObj && countObj[ref] !== 
          refCount[ref]) {
          countObj[ref]++
        } else {
          countObj[ref] = 1
        }
      }
    }
  }

  return Object.values(countObj).reduce((a, c) => a + c)
}

function letterCount(str) {
  return [...str].reduce((allChars, c) => {
    if (c in allChars) {
      allChars[c]++
    } else {
      allChars[c] = 1
    }
    return allChars
  }, {})
}


  describe('commonCharCount()', () => {
    it('example test', () => {
    // arrange
      const s1 = "derp"
      const s2 = "purp"

    
      // act
      const result = commonCharCount(s1,s2);
    
      // assert
      expect(result).toBe(2)
    })

    it('another test', () => {
    // arrange
      const s1 = "woofer"
      const s2 = "doggo wow"

    
      // act
      const result = commonCharCount(s1,s2);
    
      // assert
      expect(result).toBe(3)
    })

    it('third test', () => {
      // arrange
        const s1 = "mishka pusskins"
        const s2 = "fussy kitty"
  
      
        // act
        const result = commonCharCount(s1,s2);
      
        // assert
        expect(result).toBe(5)
    })
  })