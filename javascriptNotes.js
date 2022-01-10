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
        

// 7. how to loop through javascript object :

    // e.g : 

        var object_a = { "one": 1, "two": 2, "three": 3 };

        for (var key in object_a) { 
            if (object_a.hasOwnProperty(key)) {
                console.log(key + " -> " + object_a[key]);
            }
        }

    // e.g 2 : 

        for (var key of Object.keys(object_a)) {
            console.log(key + " -> " + object_a[key])
        }

        e.g 3 : ( not supported using internetexplorer ) : 

            for (let [key, value] of object.entries(object_a)){
                console.log(`${key}: ${value}`); // usage of template literal : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            }



// 8. javascript closures : 

// 1. a closure is the combination of : a functions scope + a reference to the functions outerscope ( the global lexical env )

            // a : lexical_env => the portion of the code in which has reference to the functions entire body; from the function name ( definition ), to its collection of variables_names/values.

