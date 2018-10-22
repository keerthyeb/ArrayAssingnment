const assert = require("assert");
const lib = require("./arrayLibrary.js");
const { logTestCase } = require('./testLibrary.js');

const getFunctionSeperator = function(){
  let functionSeperator = new Array(92).fill("-").join("");
  return functionSeperator;
}

console.log("No | Test                          |input                | expectedOutput | actualOutput   |");
console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

let {filterOddNumbers} = lib;
const testFilterOddNumbers = function(input, expectedOutput) {
  let actualOutput = filterOddNumbers(input);
  let message = 'filterOddNumbers';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

testFilterOddNumbers([-1], [-1]);
testFilterOddNumbers([0],[]);
testFilterOddNumbers([1],[ 1 ]);
testFilterOddNumbers([2],[]);
testFilterOddNumbers([2,4],[]);
testFilterOddNumbers([1,3],[ 1, 3 ]);
testFilterOddNumbers([2,3],[ 3 ]);
testFilterOddNumbers([22,3,4,5],[ 3, 5 ]);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

let {filterEvenNumbers} = lib;
const testFilterEvenNumbers = function(input, expectedOutput) {
  let actualOutput = filterEvenNumbers(input);
  let message = 'filterEvenNumbers';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));

}

testFilterEvenNumbers([],[]);
testFilterEvenNumbers([1],[]);
testFilterEvenNumbers([2],[ 2 ]);
testFilterEvenNumbers([2,4],[ 2, 4 ]);
testFilterEvenNumbers([1,3],[]);
testFilterEvenNumbers([2,3],[ 2 ]);
testFilterEvenNumbers([22,3,4,5],[ 22, 4 ]);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

let {sumOfNumbers} = lib;
const testSumOfNumbers = function(input, expectedOutput) {
  let actualOutput = sumOfNumbers(input);
  let message = 'sumOfNumbers';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

testSumOfNumbers([],0);
testSumOfNumbers([0],0);
testSumOfNumbers([3],3);
testSumOfNumbers([3,4,2,1],10);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

let {reverseNumbers} = lib;  

const testReverseNumbers = function(input, expectedOutput) {
  let actualOutput = reverseNumbers(input);
  let message = 'reverseNumbers';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

testReverseNumbers([2,4],[ 4, 2 ]);
testReverseNumbers([4,2],[2,4]);
testReverseNumbers([1,3],[ 3, 1 ]);
testReverseNumbers([2,3],[ 3, 2 ]);
testReverseNumbers([22,3,4,5],[ 5, 4, 3, 22 ]);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

let {selectSecondNumbers} = lib;
const testSelectSecondNumbers = function(input, expectedOutput) {
  let actualOutput = selectSecondNumbers(input);
  let message = 'selectSecondNumbers';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

testSelectSecondNumbers([2,3],[ 2 ]);
testSelectSecondNumbers([22,3,4,5],[ 22, 4 ]);
testSelectSecondNumbers([1,2,5,-1,2,4,3,1],[ 1, 5, 2, 3 ]);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

let {reverseFibonacci} = lib;
const testReverseFibonacci = function(input, expectedOutput) {
  let actualOutput = reverseFibonacci(input);
  let message = 'reverseFibonacci';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

testReverseFibonacci(5,[ 5, 3, 2, 1, 1 ]);
testReverseFibonacci(7,[ 13, 8, 5, 3, 2, 1, 1 ]);
testReverseFibonacci(1,[ 1 ]);
testReverseFibonacci(2,[ 1, 1 ]);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

const testFindGreatestNumber = function(input, expectedOutput) {
  let actualOutput = findGreatestNumber(input);
  let message = 'findGreatestNumber';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

let {findGreatestNumber} = lib;  
testFindGreatestNumber([22,3,4,5],22);
testFindGreatestNumber([0],0);
testFindGreatestNumber([1],1);
testFindGreatestNumber([0,1],1);
testFindGreatestNumber([33,44,23,1],44);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

const testFindLowestNumber = function(input, expectedOutput) {
  let actualOutput = findLowestNumber(input);
  let message = 'findLowestNumber';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

let {findLowestNumber} = lib;
testFindLowestNumber([22,3,4,5],3);
testFindLowestNumber([0],0);
testFindLowestNumber([1],1);
testFindLowestNumber([0,1],0);
testFindLowestNumber([33,44,23,1],1);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

const testAverageOfNumbers = function(input, expectedOutput) {
  let actualOutput = averageOfNumbers(input);
  let message = 'averageOfNumbers';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

let {averageOfNumbers} = lib;
testAverageOfNumbers([0],0);
testAverageOfNumbers([1,2,3,4],3);
testAverageOfNumbers([3,5],4);
testAverageOfNumbers([1],1);
testAverageOfNumbers([2,4],3);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/
const testMapLengthOfNames = function(input, expectedOutput) {
  let actualOutput = mapLengthOfNames(input);
  let message = 'mapLengthOfNames';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

let {mapLengthOfNames} = lib;
testMapLengthOfNames(["keerthy"],[7]); 
testMapLengthOfNames(["keerthy","pannapur"],[7,8]);
testMapLengthOfNames(["amju","moothu"],[4,6]);
testMapLengthOfNames([],[]);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

const testCountOddNumbers = function(input, expectedOutput) {
  let actualOutput = countOddNumbers(input);
  let message = 'countOddNumbers';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}


let {countOddNumbers} = lib;
testCountOddNumbers([],0);
testCountOddNumbers([1],1);
testCountOddNumbers([2],0);
testCountOddNumbers([2,4],0);
testCountOddNumbers([1,3],2);
testCountOddNumbers([2,3],1);
testCountOddNumbers([22,3,4,5],2);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

const testCountEvenNumbers = function(input, expectedOutput) {
  let actualOutput = countEvenNumbers(input);
  let message = 'countEvenNumbers';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

let {countEvenNumbers} = lib;
testCountEvenNumbers([],0);
testCountEvenNumbers([1],0);
testCountEvenNumbers([2],1);
testCountEvenNumbers([2,4],2);
testCountEvenNumbers([1,3],0);
testCountEvenNumbers([2,3],1);
testCountEvenNumbers([22,3,4,5],2);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

let {countNumbersAboveThreshold} = lib;
assert.deepEqual(countNumbersAboveThreshold([2,3,4,5,6],3),3);
assert.deepEqual(countNumbersAboveThreshold([2,3,4,5],10),0);
assert.deepEqual(countNumbersAboveThreshold([11,12,13],10),3);
assert.deepEqual(countNumbersAboveThreshold([],3),0);
assert.deepEqual(countNumbersAboveThreshold([2,3,4,5,6],6),0);

/*--------------------------------------------------------------------------------------------------*/

let {countNumbersBelowThreshold} = lib;
assert.deepEqual(countNumbersBelowThreshold([2,3,4,5,6],3),1);
assert.deepEqual(countNumbersBelowThreshold([2,3,4,5],10),4);
assert.deepEqual(countNumbersBelowThreshold([11,12,13],10),0);
assert.deepEqual(countNumbersBelowThreshold([],3),0);
assert.deepEqual(countNumbersBelowThreshold([2,3,4,5,6],6),4);

/*--------------------------------------------------------------------------------------------------*/


let {indexOf} = lib;
assert.deepEqual(indexOf([2,3,4,5,6],3),1);
assert.deepEqual(indexOf([2,3,4,5],10),-1);
assert.deepEqual(indexOf([11,12,13,10],10),3);
assert.deepEqual(indexOf([],3),-1);
assert.deepEqual(indexOf([2,3,4,5,6],6),4);

/*--------------------------------------------------------------------------------------------------*/

const testExtractDigit = function(input, expectedOutput) {
  let actualOutput = extractDigit(input);
  let message = 'extractDigit';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

let {extractDigit} = lib;
testExtractDigit(2345,[2,3,4,5]);
testExtractDigit(23455,[2,3,4,5,5]);
testExtractDigit(780,[7,8,0]);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

const testIsSorted = function(input, expectedOutput) {
  let actualOutput = isSorted(input);
  let message = 'isSorted';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}


let {isSorted} = lib;
testIsSorted([1,2,3,4,5],true);
testIsSorted([1],true);
testIsSorted([1,2,5,4,3],false);
testIsSorted([5,4,3,2,1],false);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

const testIsInDecendingOrder = function(input, expectedOutput) {
  let actualOutput = isInDecendingOrder(input);
  let message = 'isInDecendingOrder';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

let {isInDecendingOrder} = lib;
testIsInDecendingOrder([1,2,3,4,5],false);
testIsInDecendingOrder([1],true);
testIsInDecendingOrder([1,2,5,4,3],false);
testIsInDecendingOrder([5,4,3,2,1],true);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

let {intersectionOf} = lib;
assert.deepEqual(intersectionOf([1,2,3,4,5],[4,5,6,3,7]),[3,4,5]);
assert.deepEqual(intersectionOf([4,5,6,7],[1,2,3,4]),[4]);
assert.deepEqual(intersectionOf([1,2,3,4],[5,6,7,8]),[]);
assert.deepEqual(intersectionOf([0],[0]),[0]);
assert.deepEqual(intersectionOf(["keerthy","amju","moothu"],["amju"]),["amju"]);

/*--------------------------------------------------------------------------------------------------*/

const testUniqueOf = function(input, expectedOutput) {
  let actualOutput = uniqueOf(input);
  let message = 'uniqueOf';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

let {uniqueOf} = lib;
testUniqueOf([1,2,3,4,1,2],[1,2,3,4]);
testUniqueOf(["amju","mothu","amju"],["amju","mothu"]);
testUniqueOf([],[]);
testUniqueOf([1,2,3],[1,2,3]);

console.log(getFunctionSeperator());

/*--------------------------------------------------------------------------------------------------*/

let {unionOf}= lib;
assert.deepEqual(unionOf([1,2,3,4,5],[4,5,6,3,7]),[1,2,3,4,5,6,7]);
assert.deepEqual(unionOf([4,5,6,7],[1,2,3,4]),[4,5,6,7,1,2,3]);
assert.deepEqual(unionOf([1,2,3,4],[5,6,7,8]),[1,2,3,4,5,6,7,8]);
assert.deepEqual(unionOf([0],[0]),[0]);
assert.deepEqual(unionOf(["keerthy","amju"],["moothu","amju"]),["keerthy","amju","moothu"]);
assert.deepEqual(unionOf([10,10],[10]),[10]);

/*--------------------------------------------------------------------------------------------------*/

let {differenceOf} =lib;
assert.deepEqual(differenceOf([1,2,3,4,5],[4,5,6,3,7]),[1,2]);
assert.deepEqual(differenceOf([4,5,6,7],[1,2,3,4]),[5,6,7]);
assert.deepEqual(differenceOf([1,2,3,4],[5,6,7,8]),[1,2,3,4]);
assert.deepEqual(differenceOf([0],[0]),[]);
assert.deepEqual(differenceOf(["keerthy","amju","moothu"],["amju"]),["keerthy","moothu"]);

/*--------------------------------------------------------------------------------------------------*/

let {isSubset} = lib;
assert.deepEqual(isSubset([1,2,3,4],[2,3]),true);
assert.deepEqual(isSubset(["keerthy","moothu"],["moothu"]),true);
assert.deepEqual(isSubset([1,2,3],[3,4]),false);
assert.deepEqual(isSubset([1,2,3],[5,6]),false);

/*--------------------------------------------------------------------------------------------------*/

let {zip} = lib;
assert.deepEqual(zip([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]]);
assert.deepEqual(zip([],[]),[]);
assert.deepEqual(zip([1,2,3],[4,5]),[[1,4],[2,5]]);
assert.deepEqual(zip([1,2,],[7,8,9]),[[1,7],[2,8]]);

/*--------------------------------------------------------------------------------------------------*/

let {rotate} = lib;
assert.deepEqual(rotate([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(rotate([1,2,3,4,5],4),[5,1,2,3,4]);

/*--------------------------------------------------------------------------------------------------*/
let {partition} = lib;
assert.deepEqual(partition([1,2,7,4,9,10,5],5),[[1,2,4,5],[7,9,10]]);
assert.deepEqual(partition([2,3,4,5,6],6),[[2,3,4,5,6],[]]);
assert.deepEqual(partition([4,5,8,0],5),[[4,5,0],[8]]);

console.log("all test passed");
