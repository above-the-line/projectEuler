/**
 *  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *  
 *  This solution was inspired by Bjarki Ágúst Guðmundsson's response to Kristian Edlund solution on Mathblog.dk
 *  Stephan Brumme helped me understand it. 
 *  (https://algo.is/solved-problems/)
 *  (https://www.mathblog.dk/project-euler-problem-5/)
 *  (https://euler.stephan-brumme.com/5/) 
 */
	
'use strict'


function EuclideanAlgorithmGCD(largerNumber,smallerNumber){
	let divisor = largerNumber;
	let previousRemainder = smallerNumber;
	let currentRemainder = 1;
	var currentGCD = 0;
	while (currentRemainder != 0){
		currentGCD=previousRemainder;
		currentRemainder=divisor%previousRemainder;		
		divisor=previousRemainder;
		previousRemainder=currentRemainder;
	}
	return currentGCD;
}	
	
function leastCommonMultipleReduceByGCD (numberOne,numberTwo){
	let largerNumber = numberOne;
	let smallerNumber = numberTwo;
	if (largerNumber < smallerNumber){
		let swap = largerNumber;
		largerNumber = smallerNumber;
		smallerNumber = swap;
	}
	return ((largerNumber/EuclideanAlgorithmGCD(largerNumber, smallerNumber))*smallerNumber);
}


function leastCommonMultipleOfSeries(limit){
	let result = 1
	for (let currentNumber=2; currentNumber <= limit; currentNumber++){
		result = leastCommonMultipleReduceByGCD(result, currentNumber)
	}
	return result;
}

let limit = 20;
console.log("The least common multiple of series up to "+limit+ " is "+leastCommonMultipleOfSeries(limit));
