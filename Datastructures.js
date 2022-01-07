// DATASTRUCTURE OPERATIONS 
// 1. insertion 
// 2. traversal
// 3. searching
// 4. sorting 
// 5. deletion 
// 6. access 

// There are pros and cons of certain operations based on context

// arrays sequentially organizes items 
// 1. arrays have least amount of memory 
// 2. arrays are best choice for simple Storage
// 3. run times of operations : 
//     a : lookup => O(1) => constant runtime
//     b : push => constant runtime => O(1)
//     c : insert => O(n) => linear runtime
//     d : delete => O(n) => linear runtime

//examples of arrays and operations below : { 

    const strings = ['a','b','c','d']; 
    // uses 16 bytes of storage <=> 4-elements * 4-indices w/in arr.

    // access operation <=> O(constant) or O(1)
    strings[2]

    // push operation 
    strings.push('e'); // O(1) runtime 

    // pop operation ( remove last item from arr )
    strings.pop() // O(1) 
    // this is not O(N) ( delete(x) ) : because pop() always removes the last element from any given array 

    // unshift operation
        // 1. adds given el to beginning of arr 
        // 2. this oper. unshifts the entire array by 1, and adds the given element to the [0] position/address.
        //  a : this is a loop so it is O(N) ( linear ) 
    strings.unshift('x') // : O(N) runtime 
    



// } end of operation example 