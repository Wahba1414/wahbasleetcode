/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
   for(let i = digits.length - 1; i >= 0; i--){
       if(digits[i] < 9){
           digits[i]++;
           return digits;
       }else{
           //Carry happens
           digits[i] = 0;
       }
   }
   
   //Carry continues 
   digits.unshift(1);
   return digits; 
};


// Not working - overflow happens
// var plusOne = function(digits) {
//     let numberStr = '';
    
//     for(let i = 0; i < digits.length ; i++){
//         numberStr += digits[i];        
//     }
        
//     console.log('numberStr: ', numberStr);
    
//     let plusOne = (+numberStr) + 1;
    
//     console.log('plusOne: ', plusOne);
    
    
//     plusOne = plusOne.toString().split('');
    
//     console.log('plusOne: ', plusOne);
    
        
//     return plusOne;
// };