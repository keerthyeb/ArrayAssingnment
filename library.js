const {partitionEvenOdd} = require("../arrayAssignment/listOfOddAndEvenNumbers.js");

const filterOddNumbers = function(numbers){
  let oddAndEvenNumbers = partitionEvenOdd(numbers);
  return oddAndEvenNumbers["oddNumbers"];
}

const filterEvenNumbers = function(numbers){
  let oddAndEvenNumbers = partitionEvenOdd(numbers);
  return oddAndEvenNumbers["evenNumbers"];
}

const sumOfNumbers = function(numbers){
  let numbersLength = numbers.length;
  let sum = 0;
  for(let number of numbers){
    sum += number;
  }
  return sum;
}

const reverseNumbers = function(numbers){
  let numbersLength = numbers.length;
  let reverseNumbers = [];
  for(let index = numbersLength-1;index >= 0 ; index--){
    reverseNumbers.push(numbers[index]);

  }
  return reverseNumbers;
}

const selectSecondNumbers = function(numbers){
  let secondNumbers = [];
  for(let index = 0; index < numbers.length ; index += 2 ){
    secondNumbers.push(numbers[index]);
  }
  return secondNumbers;
}

const reverseFibonacci = function(limit){
  let fibonacci = [];
  let nextTerm = 1;
  let currentTerm = 1;
  let previousTerm = 0;
  for(index = 0; index < limit ; index++){
    fibonacci.push(nextTerm); //fibonacci.unshift(nextTerm)
    nextTerm = currentTerm + previousTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
  }
  let reversedFibonacci = reverseNumbers(fibonacci);
  return reversedFibonacci;
}


const greatestNumber = function(numbers){
  let greatestNumber = 0;
  for(let number of numbers){
    if(greatestNumber < number){
      greatestNumber = number;
    }
  }
  return greatestNumber;
}

const lowestNumber = function(numbers){
  let lowestNumber = numbers[0];
  for(let number of numbers){
    if(lowestNumber > number){
      lowestNumber = number;
    }
  }
  return lowestNumber;
}

const averageOfNumbers = function(numbers){
  let sum = sumOfNumbers(numbers);
  let numbersLength = numbers.length;
  let averageOfNumbers = Math.round(sum/numbersLength);
  return averageOfNumbers;
}

const mapLengthOfNames = function(names){
  let lengthOfNAmes = []
  for(let name of names){
    lengthOfNAmes.push(name.length);
  }
  return lengthOfNAmes;
}

const countOddNumbers = function(numbers){
  let oddNumbers = filterOddNumbers(numbers);
  let oddNumberCount = oddNumbers.length;
  return oddNumberCount;
}

const countEvenNumbers = function(numbers){
  let evenNumbers = filterEvenNumbers(numbers);
  let evenNumberCount = evenNumbers.length;
  return evenNumberCount;
}

exports.filterOddNumbers = filterOddNumbers;
exports.filterEvenNumbers = filterEvenNumbers;
exports.sumOfNumbers = sumOfNumbers;
exports.reverseNumbers = reverseNumbers;
exports.greatestNumber = greatestNumber;
exports.lowestNumber = lowestNumber;
exports.selectSecondNumbers = selectSecondNumbers;
exports.averageOfNumbers = averageOfNumbers;
exports.mapLengthOfNames = mapLengthOfNames;;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.reverseFibonacci = reverseFibonacci;
