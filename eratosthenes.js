/**
 * 
 */
/**
 *   A poor impelmentation of the Sieve of Eratesthenes, which doesn't work at scale because of array length limits.
 *   This implementation slowly finds all the primes within a limited array by using the array index to report primality.
 *   The nested for-loop, which switches composite array elements to false, increments n by i to remove all proceeding multiples of n.
 */

'use strict'


function primeFinder(number){
	var primeStore = new Array(number+1);
	primeStore.fill(true);
	for (var i=2; i<=number; i++){     //use var instead of let because block scope persistence required
		if (primeStore[i]==true){
			for (let n = i * 2; n <= number; n = n+i){   
				primeStore[n]=false;
			}
		} 
	}
	for (let p=1; p <= number; p++){
		if (primeStore[p]==true){
			console.log(p)
		}
	}
}

primeFinder(60);