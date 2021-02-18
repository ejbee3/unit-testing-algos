function fancyRide(l, fares) {
  const faresMap = fares.map(fare => fare * l)
  const rideOptions = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]
  let rideObj = {}
  for (let i = 0; i < rideOptions.length; i++) {
    rideObj[rideOptions[i]] = faresMap[i]
  }
  const bestRide = faresMap.filter(cost => cost <= 20).slice(-1)[0]
  const uberName = Object.keys(rideObj).filter(key => rideObj[key] === bestRide)[0]
  return uberName
}

describe('fancyRide()', () => {
  it('example test', () => {
  // arrange
    const arr = [0.3, 0.5, 0.7, 1, 1.3]
    const length = 30

    // act
    const result = fancyRide(length, arr)

    // assert
    expect(result).toBe("UberXL")
  })
  // })

  it('my test', () => {
    // arrange
      const arr = [0.3, 0.4, 2.1, 3.3, 3.9]
      const length = 4
  
      // act
      const result = fancyRide(length, arr)
  
      // assert
      expect(result).toBe("UberSUV")
    })
})