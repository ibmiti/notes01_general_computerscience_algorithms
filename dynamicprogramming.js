// DYNAMIC PROGRAMMING 
// ABSTRACT : it is an optimization technique, using cache in conjuction with loops, and re-accessing the cache on successive loops 

// 1. solving problems by breaking them down into sub problems, storing the solution to the subproblem just incase the solution is needed at a later step. ( usually within a loop )
// 2. so dynamic programming allows us to save memory when building algorithms
// 3. Memoization == Caching
// 4. We use Caching/memoization in algorithms ( Dynamic programming )


// EXAMPLES OF DYNAMIC PROGRAMMING ( DP ) BELOW : 

// MEMOIZATION 
// abstract : memoization is used within dynamic programming, it is a specific type of caching. the examples are below. caching/memoization speeds up programs due to the reduction of actions taken ( resources used ( memory )) due to reusing of previously computer values 



// examples : 
// a : non-cache/memoized version : 
function addTo80(n){
    console.log('long time'); 
    return n + 80;
}

// b : memoized version 
let cache = {}
function memoizedAddTo80(n){
    if (n in cache) { 
        return cache[n]; 
    } else {
        console.log('long time');
        cache[n] = n + 80;
        return cache[n];
    }
}

// c : memoized version ( using closure ) this is best practice
// 1. removing cache from global scope
function memoizedAddTo80(){ // becomes new highest scope for cache
    // ...effectively removing cache from global scope
    let cache = {}
    return function(n) {
        if (n in cache) { 
            return cache[n]; 
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
const memoized = memoizedAddTo80();

console.log('1', memoized(5));
console.log('2', memoized(6));

// FIBONACCI AND DYNAMIC PROGRAMMING : 

// 1. rememeber when you think of dynamic programming, think of caching

let calculations = 0;
function fibonnaci_r(n){
    calculations++;
    if (n < 2){
        return n
    }
    return fibonaci_r(n-1) + fibonaci_r(n-2);
}


fibonacci(7);
fibonaci_r(23); // O(2n)



