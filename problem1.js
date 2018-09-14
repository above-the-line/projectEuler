/**
 *   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 *   The sum of these multiples is 23.
 *   Find the sum of all the multiples of 3 or 5 below 1000. 
 */

'use strict'

function multipleChecker(){
    let sum = 0;        
    let x = 0;
    while (x<1000){
        if (x%3==0 || x%5==0){
            sum+=x;
        }
        x++;
    };
    console.log("The sum of all multiples of 3 and 5 below 1000 is " + sum + ".");
    return sum;    
};


multipleChecker();