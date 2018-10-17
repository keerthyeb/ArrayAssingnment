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

const countNumbersAbove = function(numbers,threshold){
  let numberCountAboveThreshold = 0;
  for(let number of numbers){
    if(number > threshold){
      numberCountAboveThreshold++;
    }
  }
  return numberCountAboveThreshold;
}

const countNumbersBelow = function(numbers,threshold){
  let numberCountBelowThreshold = 0;
  for(let number of numbers){
    if(number < threshold){
      numberCountBelowThreshold++;
    }
  }
  return numberCountBelowThreshold;
}

const reverseArray = function(numbers){
  let arrayLength = numbers.length;
  let reverseArray = [];
  for(let index = arrayLength-1;index >= 0 ; index--){
    reverseArray.push(numbers[index]);

  }
  return reverseArray;
}

const indexOfNumber = function(numbers,number){
  let index = -1;
  for(let num of numbers){
    if(number == num ){
      index = numbers.indexOf(number);
    }
  }
  return index;
}

const extractDigit = function(number){
  let extractedArray = [];
  let index =number
  while(index>0){
    extractedArray.unshift(index%10);
    index = Math.floor(index / 10);
  }
  return extractedArray;
}

const isSorted = function(numbers){
  let isSorted = true;
  for(let index = 0; index < numbers.length-1 ; index++){
    if(numbers[index] > numbers[index+1]){
      return false;
    }
  }
  return true;
}

const isInDecendingOrder = function(numbers){
  let isInDecendingOrder = true;
  for(let index = 0; index < numbers.length-1 ; index++){
    if(numbers[index] < numbers[index+1]){
      return false;
    }
  }
  return true;
}

const intersectionOf2Arrays =function(set1,set2){
  let intersectedArray = [];
  let referenceArray = [];
  for(let element of set1){
    referenceArray[element] = element;
  }
  for(let element of set2){
    if(referenceArray[element] == element){
      intersectedArray.push(element);
    }
  }
  return intersectedArray;
}

const uniqueElements = function(elements){
  let uniqueElements = [];
  for(let item of elements){
    const shouldAdd =! uniqueElements.includes(item);
    if(shouldAdd){
      uniqueElements.push(item);
    }
  }
  return uniqueElements;
}

const unionOf2Array = function(set1,set2){
  let union = set1
  for(let item of set2){
    const shouldAdd =! union.includes(item);
    if(shouldAdd){
      union.push(item);
    }
  }
  union = uniqueElements(union);
  return union;
}

const differenceOf2Array = function(set1,set2){
  let differenceArray = [];
  for(let item of set1){
    if(!set2.includes(item)){
      differenceArray.push(item);
    }
  }
  return differenceArray;
}

const isSubset = function(set1,set2){
  let isSubset = true;
  for(let item of set2){
    if(!set1.includes(item)){
      return false;
    }
  }
  return true;
}

const zip = function(set1,set2){
  let zip = [];
  let setLength = set1.length;
  if(setLength > set2.length){
    setLength = set2.length;
  }
  for(let index = 0;index<setLength;index++){
    zip.push([set1[index],set2[index]]);
  }
  return zip;
}

const rotate = function(numbers,times){
  let rotate = numbers;
  for(let index = 0 ;index < times; index++){
    rotate.push(rotate.shift());
  }
  return rotate;
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
exports.countNumbersAbove = countNumbersAbove;
exports.countNumbersBelow = countNumbersBelow;
exports.reverseArray = reverseArray;
exports.indexOfNumber = indexOfNumber;
exports.extractDigit = extractDigit;
exports.isSorted = isSorted;
exports.isInDecendingOrder = isInDecendingOrder;
exports.intersectionOf2Arrays = intersectionOf2Arrays;
exports.uniqueElements= uniqueElements;
exports.unionOf2Array = unionOf2Array;
exports.differenceOf2Array = differenceOf2Array;
exports.isSubset = isSubset;
exports.zip = zip;
exports.rotate = rotate;
