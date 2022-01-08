// HASH TABLES 
// ( exhaustive description of HASH tables )
// 1. objects and hashtables are the same
// 2. every langiuage has a builtin hashtable datastructure 
// 3. database and caches use/implement hash tables 
// 4. hash tables are a datastructure in which creates a list of paired values 
        // a : hash_table = { key : value }
        // b : a => javascript object
// 5. hash table transforms a key into an integer index using hash function
// 6. keys = { john_smith, list_smith, sandra_dee } => hashfunction(a,b,c):returns => all keys to => hash_function_transformedKeys = { 01, 02, 03 } 
// 7. hash function has fast [ search, insertion, delete ] operations 


// RUN TIMESE OF DIFF HASH FUNCS
// 1. hashtable.search() has runtime : O(1) : worse case O(n)
// 2. hashtable.insert() has runtime : O(1) : worse case O(n)
// 3. hashtable.delete() has runtime : O(1) : worse case O(n)

// TYPES OF HASH TABLES 
1. Object{} // allows overwriting of native properties 
2. Map{} // disallows overwriting of native properties to the hash table
    // a: to push items to MAP, we must use set() method 
    // b : e.g ( 
    //     const mymap = new Map()
    //     mymap.set("jack",'data-entry')
    //     mymap.set('cincy', 'manager')
    // )


    // IMPLEMENTING HASH IN JAVASCRIPT 

    class Hashtable {
        constructor() {
            this.table = new Array(127)
            this.size = 0;
        }
    }


