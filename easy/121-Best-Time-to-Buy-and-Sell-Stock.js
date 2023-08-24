// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//
//     You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//
//     Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//
//
//
// Example 1:
//
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
//     Example 2:
//
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
//
//
// Constraints:
//
//     1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// solution1: brute force
// time complexity: O(n^2)
// space complexity: O(1)

const maxProfit = (prices) => {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const buyPrice = prices[i];

        for (let j = i + 1; j < prices.length; j++) {
            const sellPrice = prices[j];

            const profit = sellPrice - buyPrice;

            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))


// solution2: one pass
// time complexity: O(n)
// space complexity: O(1)

const maxProfit2 = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(const price of prices) {
        minPrice = Math.min(minPrice, price)

        maxProfit = Math.max(maxProfit, price - minPrice)
    }

    return maxProfit;
}

console.log(maxProfit2([7,1,5,3,6,4]))
console.log(maxProfit2([7,6,4,3,1]))

