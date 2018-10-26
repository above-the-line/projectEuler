/**
 *   A palindromic number reads the same both ways. 
 *   The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *   Find the largest palindrome made from the product of two 3-digit numbers.
 *   
 *   Modeled on Kristian Edlund's solution in C#, this approach uses a generator to create palindromes.
 *   
 */


'use strict'

function stringReverser(str){
	var newString = "";
	for (let iterator = str.length-1; iterator >= 0; iterator--){
		newString += str[iterator];
	}
	return newString;
}

function* palendromeCreator(limit){
	for (let iterator = 991; iterator >= limit; iterator--){
		let palendrome = stringReverser(iterator.toString());
		yield iterator+palendrome;
	}
}
 

function factorFinder(){
	var found = false;
	var palendromeLoop = palendromeCreator(100);
	var palendromeObject = 0;
	var dividend = 0;
	while (!found){ 
		palendromeObject = palendromeLoop.next();
		dividend = Number(palendromeObject['value']);
		for (var divisor = 995; divisor > 99; divisor --){
			var quotient = dividend / divisor;
			if (dividend % divisor == 0 && quotient < 1000){
				console.log("Palindrome "+dividend + " has factors " + quotient +" and " + divisor+".");
				found = true;
				break;
			}
		}
	}
}

factorFinder();

