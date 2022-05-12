/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let firstPtr = s.length - 1; 
    let secondPtr = t.length - 1;
    let sBackSpaces = 0;
    let tBackSpaces = 0;
    
    while (firstPtr >= 0 || secondPtr >= 0){
        
      while(s[firstPtr] == '#' || sBackSpaces > 0) {
          
            if(s[firstPtr] == '#'){
                sBackSpaces++;
            }else{
                sBackSpaces--;
            }
          
            firstPtr--;
           
        }
        
        
      
        while(t[secondPtr] == '#' || tBackSpaces > 0) {
            
            if(t[secondPtr] == '#'){
                tBackSpaces++;
            }else{
                tBackSpaces--;
            }
           
            secondPtr--;
            
        }
       
        if(s[firstPtr] != t[secondPtr]) return false;   
        
        firstPtr--;
        secondPtr--;
    }
    
    return true;
    
};