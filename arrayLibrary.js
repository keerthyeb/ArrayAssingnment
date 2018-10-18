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
  let reversedNumbers = [];
  for(let index = numbersLength-1;index >= 0 ; index--){
    reversedNumbers.push(numbers[index]);

  }
  return reversedNumbers;
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


const findGreatestNumber = function(numbers){
  let greatestNumber = 0;
  for(let number of numbers){
    if(greatestNumber < number){
      greatestNumber = number;
    }
  }
  return greatestNumber;
}

const findLowestNumber = function(numbers){
  let findLowestNumber = numbers[0];
  for(let number of numbers){
    if(findLowestNumber > number){
      findLowestNumber = number;
    }
  }
  return findLowestNumber;
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

const countNumbersAboveThreshold = function(numbers,threshold){
  let numberCountAboveThreshold = 0;
  for(let number of numbers){
    if(number > threshold){
      numberCountAboveThreshold++;
    }
  }
  return numberCountAboveThreshold;
}

const countNumbersBelowThreshold = function(numbers,threshold){
  let numberCountBelowThreshold = 0;
  for(let number of numbers){
    if(number < threshold){
      numberCountBelowThreshold++;
    }
  }
  return numberCountBelowThreshold;
}

const indexOf = function(numbers,number){
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

const intersectionOf =function(set1,set2){
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

const uniqueOf = function(elements){
  let uniqueOf = [];
  for(let item of elements){
    const shouldAdd =! uniqueOf.includes(item);
    if(shouldAdd){
      uniqueOf.push(item);
    }
  }
  return uniqueOf;
}

const unionOf = function(set1,set2){
  let union = set1
  for(let item of set2){
    const shouldAdd =! union.includes(item);
    if(shouldAdd){
      union.push(item);
    }
  }
  union = uniqueOf(union);
  return union;
}

const differenceOf = function(set1,set2){
  let differenceOfArray = [];
  for(let item of set1){
    if(!set2.includes(item)){
      differenceOfArray.push(item);
    }
  }
  return differenceOfArray;
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

const partition = function(numbers,limit){
  let partitionedArray = [];
  partitionedArray.push([]);
  partitionedArray.push([]);
  for(number of numbers){
    let index = 0;
    if(number > limit){
      index = 1;
    }
    partitionedArray[index].push(number);
  }
  return partitionedArray;
}
    

exports.filterOddNumbers = filterOddNumbers;
exports.filterEvenNumbers = filterEvenNumbers;
exports.sumOfNumbers = sumOfNumbers;
exports.findGreatestNumber = findGreatestNumber;
exports.findLowestNumber = findLowestNumber;
exports.selectSecondNumbers = selectSecondNumbers;
exports.reverseNumbers = reverseNumbers;
exports.averageOfNumbers = averageOfNumbers;
exports.mapLengthOfNames = mapLengthOfNames;;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.reverseFibonacci = reverseFibonacci;
exports.countNumbersAboveThreshold = countNumbersAboveThreshold;
exports.countNumbersBelowThreshold = countNumbersBelowThreshold;
exports.indexOf = indexOf;
exports.extractDigit = extractDigit;
exports.isSorted = isSorted;
exports.isInDecendingOrder = isInDecendingOrder;
exports.intersectionOf = intersectionOf;
exports.uniqueOf= uniqueOf;
exports.unionOf = unionOf;
exports.differenceOf = differenceOf;
exports.isSubset = isSubset;
exports.zip = zip;
exports.rotate = rotate;
exports.partition = partition;
