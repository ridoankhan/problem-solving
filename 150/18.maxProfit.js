// problem no: 121

var maxProfit = function (prices) {
  let left = 0
  let right = 1
  let maxProfit = 0

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]
      if (profit > maxProfit) maxProfit = profit
    } else {
      left = right
    }
    right++
  }
  return maxProfit
}

// let prices = [7, 1, 5, 3, 6, 4] // Output: 5

let prices = [7, 6, 4, 3, 1] // Output: 0

console.log(maxProfit(prices))
