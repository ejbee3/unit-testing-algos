//penguin race
function calculateWinners(snapshot, penguins) {
  let winners = []
  const snapshotArr = snapshot.split("\n").map(s => s.trimStart())
  let placedPenguins = snapshotArr.map((s, idx) => {
    const race = s.slice((s.indexOf("p") != -1 ? s.indexOf("p") : s.indexOf("P")) + 1, s.length - 1)
    const places = [...race].reduce((count, current) => 
      current === "-" ? count += 1 : count += 2, 0)
    return { [penguins[idx]] : places }
  })
  placedPenguins.sort((a, b) => {
    const timeA = Object.values(a)[0]
    const timeB = Object.values(b)[0]
    return timeA - timeB
  })
  for (let i = 0; i < 3; i++) {
    const penguin = Object.keys(placedPenguins[i])[0]
    winners.push(penguin)
  }
  return `GOLD: ${winners[0]}, SILVER: ${winners[1]}, BRONZE: ${winners[2]}`
};

describe('calculateWinners()', () => {
  it('example test', () => {
  // arrange
    const p = ["Jolene", "Abigail", "Jane", "Gerry"]
    const s = `|-~~------------~--p-------|
    |~~--~p------------~-------|
    |--------~-p---------------|
    |--------~-p----~~~--------|`

    // act
    const result = calculateWinners(s, p)

    // assert
    expect(result).toBe("GOLD: Jolene, SILVER: Jane, BRONZE: Gerry")
  })
})