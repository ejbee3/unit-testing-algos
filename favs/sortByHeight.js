function sortByHeight(arr) {
  const treeCount = arr.reduce((total, curr) => curr === -1 ? total +=1 : total, 0)
  if (treeCount === arr.length || arr.length === 0) {
    return arr
  }

  let heightMap = arr.map((h, idx) => {
    return {idx: idx, height : h}
  })

  let trees = []

  heightMap.sort((a, b) => {
    if (a.height < b.height) {
      return -1
    }
    if (a.height > b.height) {
      return 1
    }
  })

  for (let i = 0; i < heightMap.length; i++) {
    const curr = heightMap[i]
    if (curr.height === -1) {
      trees = heightMap.slice(i, i + treeCount)
      heightMap.splice(i, treeCount)
    }
  }

  if (trees.length > 0) {
    for (let i = 0; i < trees.length; i++) {
      heightMap.splice(trees[i].idx, 0, trees[i])
    }
  }
   
  return heightMap.map(obj => obj.height)
}

describe('sortByHeight()', () => {
  it('example test', () => {
  // arrange
    const a = [-1, 150, 190, 170, -1, -1, 160, 180]
  
    // act
    const result = sortByHeight(a);
  
    // assert
    expect(result).toEqual([-1, 150, 160, 170, -1, -1, 180, 190])
  })

  it('another test', () => {
    // arrange
      const a = [89, -1, 75, 170, 850, -1, 200, -1]
    
      // act
      const result = sortByHeight(a);
    
      // assert
      expect(result).toEqual([75, -1, 89, 170, 200, -1, 850, -1])
    })

    it('all trees', () => {
      // arrange
        const a = [-1, -1, -1, -1, -1]
      
        // act
        const result = sortByHeight(a);
      
        // assert
        expect(result).toEqual([-1, -1, -1, -1, -1])
      })
})