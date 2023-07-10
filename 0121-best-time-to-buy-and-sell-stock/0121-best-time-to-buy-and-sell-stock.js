/**
 * @param {number[]} prices
 * @return {number}
 */
//  prices=[7,1,5,3,6,4]
var maxProfit = function(prices) {
    let left = 0
    let right = 1
    let maxProfit = 0

    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]
            if(profit > maxProfit) maxProfit = profit
        } else {
            left = right
        }
        right++
    }
    return maxProfit
};