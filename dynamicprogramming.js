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
function memoizaedAddTo80(n){
    if (n in cache) { 
        return cache[n]
    }
}


// FIBONACCI AND DYNAMIC PROGRAMMING : 

