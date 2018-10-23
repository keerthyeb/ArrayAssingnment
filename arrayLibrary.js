const isEven = function(number){
  return number%2==0;
}

const complement = function(functionToBeComplemented){
  return function(arg1,arg2){
    return !functionToBeComplemented(arg1,arg2);
  }
}

const sum = function(a,b){
  return a+b;
}

const isGreater = function(a,b){
  return a>b;
}

const comparator = function(num1,num2,funcName) {
  if(funcName(num1,num2)){
    return num1;
  }
  return num2;
}

const maxOf = function(num1,num2){
  return   comparator(num1,num2,isGreater);
}

const minOf = function(num1,num2){
  return comparator(num1,num2,complement(isGreater));
}

const isOdd = complement(isEven);

const filterOddNumbers = function(numbers){
  return  numbers.filter(isOdd);
}

const filterEvenNumbers = function(numbers){
  return numbers.filter(isEven);
}

const sumOfNumbers = function(numbers){
  return numbers.reduce(sum,0);
}

const reverseNumbers = function(numbers){
  const insertAtBegin = function(storeArray,number){
    storeArray.unshift(number);
    return storeArray;
  }
  return numbers.reduce(insertAtBegin,[])
}

const selectSecondNumbers = function(numbers){
  const getAlternateNumbers = function(alternateNumbers,element){
    if(alternateNumbers.index%2 ==0){
      alternateNumbers.numbers.push(element);
    }
    alternateNumbers.index++;
    return alternateNumbers;
  }
  return  numbers.reduce(getAlternateNumbers,{index:0,numbers:[]}).numbers;
}

const reverseFibonacci = function(limit){
  let reversedFibonacci = [];
  let nextTerm = 1;
  let currentTerm = 1;
  let previousTerm = 0;
  for(index = 0; index < limit ; index++){
    reversedFibonacci.unshift(nextTerm)
    nextTerm = currentTerm + previousTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
  }
  return reversedFibonacci;
}


const findGreatestNumber = function(numbers){
  return numbers.reduce(maxOf,0);
}

const findLowestNumber = function(numbers){
  return numbers.reduce(minOf);
}

const averageOfNumbers = function(numbers){
  return Math.round(numbers.reduce(sum,0)/numbers.length);
}

const getLength = function(element){
  return element.length;
}

const findLengthOfNames = function(names){
  return names.map(getLength);
}

const countOddNumbers = function(numbers){
  return numbers.filter(isOdd).length;
}

const countEvenNumbers = function(numbers){
  return numbers.filter(isEven).length;
}

const countNumbersAboveThreshold = function(numbers,threshold){
  return numbers.filter(function(number){
    return number>threshold;
  }).length;
}

const countNumbersBelowThreshold = function(numbers,threshold){
  return numbers.filter(function(number){
    return number < threshold;
  }).length;
}

const indexOf = function(numbers, value) {
  return numbers.indexOf(value);
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
  let isElementExist = function(array,number){
    if(set2.includes(number))
      return array.concat(number);
    return array;
  }
  return set1.reduce(isElementExist,[]);
}


const uniqueOf = function(elements){
  let isElementExist = function(array,number){
    if(array.includes(number))
      return array;
    return array.concat(number);
  }
  return  elements.reduce(isElementExist,[]);
}


const unionOf = function(set1,set2){
  let union = uniqueOf(set1.concat(set2));
  return union;
}

const differenceOf = function(set1,set2){
  let isElementExist = function(array,number){
    if(set2.includes(number))
      return array;
    return array.concat(number);
  }
  return set1.reduce(isElementExist,[]);
}

const isSubset = function(set1,set2){
  return set2.every(function(element){
    return set1.includes(element);
  });
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


const rotate = function(numbers,stringIndex){
  let rotatedNumbers = numbers;
  for(index = 0 ; index < stringIndex ; index++){
    rotatedNumbers.push(rotatedNumbers.shift());
  }
  return rotatedNumbers;
}

const filterElement  = function(limit){
  return function(partitionedArray,number){
    let index = 1;
    if(number <= limit){
      index = 0;
    }
    partitionedArray[index].push(number);
    return partitionedArray;
  }
}

const partition = function(numbers,limit){
  let filterElements = filterElement(limit);
  return numbers.reduce(filterElements,[[],[]]);
}

module.exports = {filterOddNumbers,
                 filterEvenNumbers,
                 sumOfNumbers,
                 findGreatestNumber,
                 findLowestNumber,
                 selectSecondNumbers,
                 reverseNumbers,
                 averageOfNumbers,
                 findLengthOfNames,
                 countEvenNumbers,
                 countOddNumbers,
                 reverseFibonacci,
                 countNumbersAboveThreshold,
                 countNumbersBelowThreshold,
                 indexOf,
                 extractDigit,
                 isSorted,
                 isInDecendingOrder,
                 intersectionOf,
                 uniqueOf,
                 unionOf,
                 differenceOf,
                 isSubset,
                 zip,
                 rotate,
                 partition}
