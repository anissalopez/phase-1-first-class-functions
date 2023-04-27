/* The `receivesAFunction` function should:

- take a _callback function_ as an argument
- call the callback function
- it doesn't matter what this function returns, so long as it calls the
  callback function

- The `returnsANamedFunction` function should:

- take no arguments
- return a _named function_

- The `returnsAnAnonymousFunction` function should:
- take no arguments
- return an _anonymous function_
*/

function receivesAFunction (callback){
    return callback()
}

function returnsANamedFunction(){
   function namedFunction () {
        return console.log('hello')
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log(`I am anonymous`)
    }
}