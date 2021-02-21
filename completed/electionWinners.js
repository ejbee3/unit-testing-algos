// how many candidates are still in the race? 

function electionWinners(votes, votesLeft) {
  const firstPlace = Math.max(...votes)
  const countReducer = votes.reduce((totalCandidates, current) => {
    const diff = firstPlace - current
    if (votesLeft > diff) {
      totalCandidates += 1
    }
    return totalCandidates
  }, 0)
  return countReducer
}

describe('electionWinners()', () => {
  it('example test', () => {
  // arrange
    const k = 3
    const v = [2, 3, 5, 2]

    // act
    const result = electionWinners(v, k)

    // assert
    expect(result).toBe(2)
  })

  fit('my test', () => {
    // arrange
      const k = 7
      const v = [3, 6, 10, 12, 15]
  
      // act
      const result = electionWinners(v, k)
  
      // assert
      expect(result).toBe(3)
    })

    // NEED MORE TESTS!
})