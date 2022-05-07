/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let curProfit = 0;
    let totalProfit = 0;
    let buyPrice = prices[0];
    
    
    for(let i = 1; i < prices.length; i++){
        if( (prices[i] - buyPrice) > curProfit){
           curProfit = prices[i] - buyPrice;
        }else{
            totalProfit += curProfit;
            buyPrice = prices[i];
            curProfit = 0;
        }

    }
    totalProfit += curProfit;
    return totalProfit;
    
};