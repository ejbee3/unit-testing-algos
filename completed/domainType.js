function domainType(domains) {
  const domainMap = domains.map(domain => {
    const ending = domain.split('.').slice(-1)[0]
    switch (ending) {
      case "org":
        return "organization"
      case "com":
        return "commercial"
      case "net":
        return "network"
      case "info":
        return "information"
      default:
        return "unknown domain"
    }
  })
  return domainMap
}

describe('domainType()', () => {
  it('example test', () => {
  // arrange
    const arr = ["en.wiki.org", "codefights.com", "happy.net", "code.info"]

    // act
    const result = domainType(arr)

    // assert
    expect(result).toEqual(["organization", "commercial", "network", "information"])
  })

  it('default case', () => {
    // arrange
      const arr = ["en.wiki.org", "codefights.com", "happy.net", "code.info", "codejoecode.io"]
  
      // act
      const result = domainType(arr)
  
      // assert
      expect(result).toEqual(["organization", "commercial", "network", "information", "unknown domain"])
    })
})