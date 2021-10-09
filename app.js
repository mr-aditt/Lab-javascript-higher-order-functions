const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

// Task 1: Array Slice
function slice(items, start, end){
    var sliced=[]
    for(var index=start; index<items.length; index++){
        if(index<end){sliced.push(items[index])}
    }
    return sliced
}

// var modifiedFood = slice(foods, 2, 5)
// console.log(modifiedFood)

// Task 2: Array Splice
function splice(items, extra, start){
    var spliced=[]
    for(var index=0; index<items.length; index++){
        if(index==start){
            for(var loc=0; loc<extra.length; loc++){
                spliced.push(extra[loc])
            }
        }
        else{spliced.push(items[index])}
    }
    return spliced
}
// var modifiedFood = splice(foods, ['noodles', 'icecream'], 1)
// console.log(modifiedFood)

const numberArray = [12,324,213,4,2,3,45,4234];
// Task 3: Filter
function isEven(number){
    if(number%2 == 0){return true}
    return false
}


function isPrime(number){
    for(var divisor=2; divisor<=Math.sqrt(number); divisor++){
        if(number%divisor == 0){return false}
    }
    return true
}

function myfilter(numberArray, fn){
    var filtered = []
    for(var index=0; index<numberArray.length; index++){
        if(fn(numberArray[index])==true){filtered.push(numberArray[index])}
    }
    return filtered
}

// console.log(myfilter(numberArray, isEven))
// console.log(myfilter(numberArray, isPrime))

// Task 4: Reject
function nonPrime(number, fn){
    var non_primes = []
    for(var index=0; index<numberArray.length; index++){
        if(fn(numberArray[index])==false){non_primes.push(numberArray[index])}
    }
    return non_primes
}
// console.log(nonPrime(numberArray, isPrime))

//Task 5: Lambda
// console.log(numberArray.filter((ele)=> ele%2==0))

//Task 6: Map
// const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray){
    var squared = []
    for(var index=0; index<myArray.length; index++){
        squared.push(myArray[index]**2)
    }
    return squared
}
// console.log('Squared of numbers:\n', findSquareOfNumbers(myArray))

//Task 7: Reduce
myArray = [2, 3, 5, 10]
function multiply(myArray){
    var product=0
    for(var index=0; index<myArray.length; index++){
        product*=myArray[index]
    }
    return product
}
console.log(myArray.reduce(function(a,b){return a*b}))