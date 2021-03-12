function phoneValidator(str) {
  // Set up your Booleans here
let hasTenDigits = false;
let hasElevenDigits = false;
let startsWithOne = false;
let hasPermittedCharsOnly = false;
let hasCorrectParentheses = false;

// Write regular expressions here so that the Booleans contain the correct values
// INSERT CODE WITH REGEX HERE
const digitLengthMatch = str.match(/[0-9]/g)
if (digitLengthMatch.length === 10) {
  hasTenDigits = true
} else if (digitLengthMatch.length === 11) {
  hasElevenDigits = true
}

const countryCodeSearch = str.search(/1/)
if (countryCodeSearch === 0) {
  startsWithOne = true
}

const illegalCharsMatch = str.match(/[^0-9-()\s]/g)
if (illegalCharsMatch === null) {
  hasPermittedCharsOnly = true
}

const parensMatch = str.match(/[()]/g)
const leftParensSearch = str.search(/[(]/)
const rightParensSearch = str.search(/[)]/)
if (parensMatch === null || parensMatch.length === 2 && (leftParensSearch === 0 || leftParensSearch === 1 || leftParensSearch === 2) 
  && (rightParensSearch === leftParensSearch + 4)) {
  hasCorrectParentheses = true
}

// Use the Booleans to return true or false, without needing to string together one complex regular expression
if (!hasTenDigits && !hasElevenDigits) {
  return false;
} else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
  return false;
} else if (hasElevenDigits && !startsWithOne) {
  return false;
} else {
  return true;
}
}

describe('phoneValidator()', () => {
it('example test', () => {
// arrange
  const s = "1 500 456 9685"

  // act
  const result = phoneValidator(s)

  // assert
  expect(result).toBe(true)
})
})