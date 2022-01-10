// diff between : let, var :
// 1. let has block scope 
//     a : garbage collection
// 2. var has function scope 
//     a : die at the end of function it is defined within versus the block 

// 3. let : no hoisting
//     a : what is hoisting? : 
//         1. hoisting is where the definition of an item is known before the code is executed or the function is ran.

//         2. e.g : 
//             let x = function(){
//                 if (true) {

//                     console.log(v)
//                     console.log(l)
//                     var v = 2
//                     let l = 1;
//                 }
//             }
//             x(); // l returns error : not defined

// 4. var : is hoisted 
//     a : therefore var is more robust.
//     b : var is accepted as proper syntax within older browsers ( pre-es6 )


// 5. diff between : = AND == AND === 
//     a: = is to set an value to a key or var/let 
//     b: == is to perform an cursory comparison between values '1' == 1 => true
//     c: === is a strict compare, e.g : 
//             1 === 1 => true, 1 === '1' => false


// 6. const : 
//     a : disallows reassignment of value from variable name. e.g: 

//             const foo = 'bar';
//             foo = 'jaz' => false 
//             ...
//             const foo = [1,2,3]
//             foo.push(4) => true => foo[1,2,3,4]
        
