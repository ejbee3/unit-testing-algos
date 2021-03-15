function checkCashRegister(price, cash, cid) {
  const moneyInTheRegister = parseFloat(cid.reduce((total, current) => total + current[1], 0).toFixed(2))
  let remainder = parseFloat((cash - price).toFixed(2))
  let bigRemainder = remainder * 100
  let change = []

  if (moneyInTheRegister > remainder) {
    
    let changeValues = {"PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, 
                        "ONE HUNDRED": 10000 }
    let changeValuesArr = Object.entries(changeValues)
    while (bigRemainder !== 0) {
      for (let i = 0; i < changeValuesArr.length; i++) {
        if (bigRemainder < changeValuesArr[i][1]) {
          const amountInDrawer = cid[i - 1][1] * 100
          console.log(amountInDrawer)
          const leftover = amountInDrawer - bigRemainder
          if (leftover > 0) {
            change.push([changeValuesArr[i - 1][0], bigRemainder])
            return {status: 'OPEN', change}
          } else {
            bigRemainder -= amountInDrawer
            
            change.push([changeValuesArr[i - 1][0], parseFloat(Math.ceil(amountInDrawer / 100))])
            
          }
        }
      }
    }
    
    

  } else if (moneyInTheRegister === remainder) {
    return {status: "CLOSED", change: cid}
  }

  function findChangeForValue(total, valueInDrawer) {
    if (total === 0) {
      return [0]
    } else {
      let drawer = findChangeForValue(total - valueInDrawer, valueInDrawer)
      drawer.push(drawer[drawer.length - 1] + valueInDrawer)
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


// working on recursive function that calls through money until no more change is due
// i think i should be passing each value ex. ["NICKEL", 5], so passing the 5 as num

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