// working on recursive function that calls through money until no more change is due
// i think i should be passing each value ex. ["NICKEL", 5], so passing the 5 as num


function checkCashRegister(price, cash, cid) {
  const moneyInTheRegister = parseFloat(cid.reduce((total, current) => total + current[1], 0).toFixed(2))
  let remainder = parseFloat((cash - price).toFixed(2))
  let bigRemainder = remainder * 100

    
    let changeValues = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, 
                        "ONE HUNDRED": 100 }
    let changeValuesArr = Object.entries(changeValues)
    let countInRegister = Object.entries(changeValues).map(([den, val], idx) => [den, parseFloat((cid[idx][1] / val).toFixed(2))])
    console.log(countInRegister)
    
   if (moneyInTheRegister === remainder) {
    return {status: "CLOSED", change: cid}
  }

  function findChangeForValue(total, value) {
    if (total === 0) {
      return [0]
    } else {
      let drawer = findChangeForValue(total - value, value)
      drawer.push(drawer[drawer.length - 1] + value)
      return drawer
    }
  }



  return {status: "INSUFFICIENT_FUNDS", change: []}
}

describe('checkCashRegister()', () => {
  it('example test', () => {
  // arrange
    const p = 19.5
    const cash = 20
    const chg = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
  
    // act
    const result = checkCashRegister(p, cash, chg);
  
    // assert
    expect(result).toEqual({status: "OPEN", change: [["QUARTER", 0.5]]})
  })

  fit('example test 2', () => {
    // arrange
      const p = 3.26
      const cash = 100
      const chg = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
    
      // act
      const result = checkCashRegister(p, cash, chg);
    
      // assert
      expect(result).toEqual({status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]})
    })
})
// function findChangeForValue(total, num) {
//   if (total === 0) {
//     return [0]
//   } else {
//     let drawer = findChangeForValue(total - num, num)
//     drawer.push(drawer[drawer.length - 1] + num)
//     return drawer
//   }
// }

// describe('findChangeForValue()', () => {
//   it('test case', () => {
//   // arrange
//     const t = 100
//     const n = 20
  
//     // act
//     const result = findChangeForValue(t, n);
  
//     // assert
//     expect(result).toEqual([0, 20, 40, 60, 80, 100])
//   })
// })