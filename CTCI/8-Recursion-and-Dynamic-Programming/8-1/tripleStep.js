/*

A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs.


Hints: 

#152, Approach this from the top down. What is the very last hop the child made?

#178, If we knew the number of paths to each of the steps before step 100, could we compute
the number of steps to 100?

#217, We can compute the number of steps to 100 by the number of steps to 99, 98, and 97.
This corresponds to the child hopping 1, 2, or 3 steps at the end. Do we add those or
multiply them?That is: Is it f(100) = f(99) + f(98) + f(97) or f(100) =
f(99) * f(98) * f(97)?

#237, We multiply the values when it's "we do this then this:' We add them when it's "we do
this or this:'

#262, What is the runtime of this method? Think carefully. Can you optimize it?

#359 Try memoization as a way to optimize an inefficient recursive program.

*/

function main(n) {
    let memo = [];
    memo.fill(-1);
    return tripleStep(n, memo); 
}

function tripleStep(n, memo) {
    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else if (memo[n] > -1) {
        return memo[n];
    } else {
        memo[n] = tripleStep(n - 1, memo) + tripleStep(n - 2, memo) + tripleStep(n - 3, memo);
        return memo[n]; 
    }
}

/*function tripleStep(n) {
	if (n < 0) {
		return 0;
	} else if (n === 0) {
		return 1;
	} else {
		return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
    }
}*/

module.exports = main;