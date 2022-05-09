/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = Math.pow(10, 1000);
    let maxProfit = 0;
    
    for(const price of prices){
        if (price < buyPrice){
           buyPrice = price; 
        }else{
            let newProfit = price - buyPrice;
            if(newProfit > maxProfit){
                maxProfit = newProfit
            }
        }
        
    }
    
    return maxProfit;
    
};