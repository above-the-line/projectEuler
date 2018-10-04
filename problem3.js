/**
 *     The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ? 
 *     
 *     This is a brute force solution modeled on Kristian Edlund's C# solution at https://www.mathblog.dk/project-euler-problem-3/
 *     Kristian has a much more elegant solution using the Fundamental Theorem of Arithmetic, which I hope to implement shortly.
 *     
 *     Improvements on Kristian's solution: 
 *     Kristian's primality checker didn't work properly if the quotient is pushed to the array before the divisor.
 *     Since we want factors that are less than the square root of the dividend (775,146) checking the divisor FIRST is not such a problem.
 *     Nonetheless, that bug is now fixed. 
 *           
 */

'use strict'

function bruteForcePrimeFinder(dividend){
	var factorArray = []
	var largestFactor = 0
	var divisorFactor = 0
	var quotientFactor = 0
	var mainCounter = 0
	console.log("The quotient, divisor pairs are:")
	for (var mainCounter = 2; mainCounter*mainCounter < dividend; mainCounter++){
		if (dividend%mainCounter==0){              // Finds factors
			divisorFactor = mainCounter
			quotientFactor = dividend/mainCounter
			factorArray.pop()
			factorArray.pop()
			factorArray.push(quotientFactor)
			factorArray.push(divisorFactor)
			console.log(factorArray)
			var isPrime = true						
		}
		for (var factorSelector= 0; factorSelector < 2; factorSelector++){
			for (var factorPrimeCheckerIterator = 2; factorPrimeCheckerIterator*factorPrimeCheckerIterator < factorArray[factorSelector]; factorPrimeCheckerIterator++){
				if (factorArray[factorSelector]%factorPrimeCheckerIterator==0){    // Checks if factors are prime, only works for factors above 16.
					isPrime = false
					break
				} else {
					isPrime = true        //  Returns prime state to true, if the first factor checked was not prime but the second is.
				}	
			}
			if (isPrime == true && factorArray[factorSelector] > largestFactor){
				largestFactor = factorArray[factorSelector]
				console.log("The largest prime factor is now " +largestFactor + ".")
				break
			}
		}
	}
	console.log("There were " + mainCounter + " iterations.")
	console.log("The largest prime factor of " + dividend + " is " + largestFactor + ".")
}

bruteForcePrimeFinder(600851475143)

