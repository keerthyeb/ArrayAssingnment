const assert = require("assert");
const lib = require("./arrayLibrary.js");
const { logTestCase } = require('./testLibrary.js');

const getFunctionSeperator = function(){
  let functionSeperator = new Array(92).fill("-").join("");
  return functionSeperator;
}

console.log("No | Test                          |input                | expectedOutput | actualOutput   |");
console.log(getFunctionSeperator());

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


let {sumOfNumbers} = lib;
const testSumOfNumbers = function(input, expectedOutput) {
  let actualOutput = sumOfNumbers(input);
  let message = 'sumOfNumbers';
  assert.deepEqual(actualOutput,expectedOutput);
  console.log(logTestCase({input, expectedOutput, actualOutput, message}));
}

console.log(getFunctionSeperator());

testSumOfNumbers([],0);
testSumOfNumbers([0],0);
testSumOfNumbers([3],3);
testSumOfNumbers([3,4,2,1],10);


let {reverseNumbers} = lib;  
assert.deepEqual(reverseNumbers([2,4]),[ 4, 2 ]);
assert.deepEqual(reverseNumbers([4,2]),[2,4]);
assert.deepEqual(reverseNumbers([1,3]),[ 3, 1 ]);
assert.deepEqual(reverseNumbers([2,3]),[ 3, 2 ]);
assert.deepEqual(reverseNumbers([22,3,4,5]),[ 5, 4, 3, 22 ]);


let {selectSecondNumbers} = lib;
assert.deepEqual(selectSecondNumbers([2,3]),[ 2 ]);
assert.deepEqual(selectSecondNumbers([22,3,4,5]),[ 22, 4 ]);
assert.deepEqual(selectSecondNumbers([1,2,5,-1,2,4,3,1]),[ 1, 5, 2, 3 ]);


let {reverseFibonacci} = lib;
assert.deepEqual(reverseFibonacci(5),[ 5, 3, 2, 1, 1 ]);
assert.deepEqual(reverseFibonacci(7),[ 13, 8, 5, 3, 2, 1, 1 ]);
assert.deepEqual(reverseFibonacci(1),[ 1 ]);
assert.deepEqual(reverseFibonacci(2),[ 1, 1 ]);


let {findGreatestNumber} = lib;  
assert.deepEqual(findGreatestNumber([22,3,4,5]),22);
assert.deepEqual(findGreatestNumber([0]),0);
assert.deepEqual(findGreatestNumber([1]),1);
assert.deepEqual(findGreatestNumber([0,1]),1);
assert.deepEqual(findGreatestNumber([33,44,23,1]),44);


let {findLowestNumber} = lib;
assert.deepEqual(findLowestNumber([22,3,4,5]),3);
assert.deepEqual(findLowestNumber([0]),0);
assert.deepEqual(findLowestNumber([1]),1);
assert.deepEqual(findLowestNumber([0,1]),0);
assert.deepEqual(findLowestNumber([33,44,23,1]),1);


let {averageOfNumbers} = lib;
assert.equal(averageOfNumbers([0]),0);
assert.equal(averageOfNumbers([1,2,3,4]),3);
assert.equal(averageOfNumbers([3,5]),4);
assert.equal(averageOfNumbers([1]),1);
assert.equal(averageOfNumbers([2,4]),3);


let {mapLengthOfNames} = lib;
assert.deepEqual(mapLengthOfNames(["keerthy"]),[7]); 
assert.deepEqual(mapLengthOfNames(["keerthy","pannapur","deepika"]),[7,8,7]);
assert.deepEqual(mapLengthOfNames(["amju","moothu"]),[4,6]);
assert.deepEqual(mapLengthOfNames([]),[]);


let {countOddNumbers} = lib;
assert.deepEqual(countOddNumbers([]),0);
assert.deepEqual(countOddNumbers([1]),1);
assert.deepEqual(countOddNumbers([2]),0);
assert.deepEqual(countOddNumbers([2,4]),0);
assert.deepEqual(countOddNumbers([1,3]),2);
assert.deepEqual(countOddNumbers([2,3]),1);
assert.deepEqual(countOddNumbers([22,3,4,5]),2);


let {countEvenNumbers} = lib;
assert.deepEqual(countEvenNumbers([]),0);
assert.deepEqual(countEvenNumbers([1]),0);
assert.deepEqual(countEvenNumbers([2]),1);
assert.deepEqual(countEvenNumbers([2,4]),2);
assert.deepEqual(countEvenNumbers([1,3]),0);
assert.deepEqual(countEvenNumbers([2,3]),1);
assert.deepEqual(countEvenNumbers([22,3,4,5]),2);


let {countNumbersAboveThreshold} = lib;
assert.deepEqual(countNumbersAboveThreshold([2,3,4,5,6],3),3);
assert.deepEqual(countNumbersAboveThreshold([2,3,4,5],10),0);
assert.deepEqual(countNumbersAboveThreshold([11,12,13],10),3);
assert.deepEqual(countNumbersAboveThreshold([],3),0);
assert.deepEqual(countNumbersAboveThreshold([2,3,4,5,6],6),0);


let {countNumbersBelowThreshold} = lib;
assert.deepEqual(countNumbersBelowThreshold([2,3,4,5,6],3),1);
assert.deepEqual(countNumbersBelowThreshold([2,3,4,5],10),4);
assert.deepEqual(countNumbersBelowThreshold([11,12,13],10),0);
assert.deepEqual(countNumbersBelowThreshold([],3),0);
assert.deepEqual(countNumbersBelowThreshold([2,3,4,5,6],6),4);



let {indexOf} = lib;
assert.deepEqual(indexOf([2,3,4,5,6],3),1);
assert.deepEqual(indexOf([2,3,4,5],10),-1);
assert.deepEqual(indexOf([11,12,13,10],10),3);
assert.deepEqual(indexOf([],3),-1);
assert.deepEqual(indexOf([2,3,4,5,6],6),4);


let {extractDigit} = lib;
assert.deepEqual(extractDigit(2345),[2,3,4,5]);
assert.deepEqual(extractDigit(23455),[2,3,4,5,5]);
assert.deepEqual(extractDigit(780),[7,8,0]);


let {isSorted} = lib;
assert.equal(isSorted([1,2,3,4,5]),true);
assert.equal(isSorted([1]),true);
assert.equal(isSorted([1,2,5,4,3]),false);
assert.equal(isSorted([5,4,3,2,1]),false);


let {isInDecendingOrder} = lib;
assert.equal(isInDecendingOrder([1,2,3,4,5]),false);
assert.equal(isInDecendingOrder([1]),true);
assert.equal(isInDecendingOrder([1,2,5,4,3]),false);
assert.equal(isInDecendingOrder([5,4,3,2,1]),true);


let {intersectionOf} = lib;
assert.deepEqual(intersectionOf([1,2,3,4,5],[4,5,6,3,7]),[4,5,3]);
assert.deepEqual(intersectionOf([4,5,6,7],[1,2,3,4]),[4]);
assert.deepEqual(intersectionOf([1,2,3,4],[5,6,7,8]),[]);
assert.deepEqual(intersectionOf([0],[0]),[0]);
assert.deepEqual(intersectionOf(["keerthy","amju","moothu"],["amju"]),["amju"]);


let {uniqueOf} = lib;
assert.deepEqual(uniqueOf([1,2,3,4,1,2]),[1,2,3,4]);
assert.deepEqual(uniqueOf(["keer","amju","moothu","amju"]),["keer","amju","moothu"]);
assert.deepEqual(uniqueOf([]),[]);
assert.deepEqual(uniqueOf([1,2,3]),[1,2,3]);


let {unionOf}= lib;
assert.deepEqual(unionOf([1,2,3,4,5],[4,5,6,3,7]),[1,2,3,4,5,6,7]);
assert.deepEqual(unionOf([4,5,6,7],[1,2,3,4]),[4,5,6,7,1,2,3]);
assert.deepEqual(unionOf([1,2,3,4],[5,6,7,8]),[1,2,3,4,5,6,7,8]);
assert.deepEqual(unionOf([0],[0]),[0]);
assert.deepEqual(unionOf(["keerthy","amju"],["moothu","amju"]),["keerthy","amju","moothu"]);
assert.deepEqual(unionOf([10,10],[10]),[10]);


let {differenceOf} =lib;
assert.deepEqual(differenceOf([1,2,3,4,5],[4,5,6,3,7]),[1,2]);
assert.deepEqual(differenceOf([4,5,6,7],[1,2,3,4]),[5,6,7]);
assert.deepEqual(differenceOf([1,2,3,4],[5,6,7,8]),[1,2,3,4]);
assert.deepEqual(differenceOf([0],[0]),[]);
assert.deepEqual(differenceOf(["keerthy","amju","moothu"],["amju"]),["keerthy","moothu"]);


let {isSubset} = lib;
assert.deepEqual(isSubset([1,2,3,4],[2,3]),true);
assert.deepEqual(isSubset(["keerthy","moothu"],["moothu"]),true);
assert.deepEqual(isSubset([1,2,3],[3,4]),false);
assert.deepEqual(isSubset([1,2,3],[5,6]),false);


let {zip} = lib;
assert.deepEqual(zip([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]]);
assert.deepEqual(zip([],[]),[]);
assert.deepEqual(zip([1,2,3],[4,5]),[[1,4],[2,5]]);
assert.deepEqual(zip([1,2,],[7,8,9]),[[1,7],[2,8]]);


let {rotate} = lib;
assert.deepEqual(rotate([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(rotate([1,2,3,4,5],4),[5,1,2,3,4]);

let {partition} = lib;
assert.deepEqual(partition([1,2,7,4,9,10,5],5),[[1,2,4,5],[7,9,10]]);
assert.deepEqual(partition([2,3,4,5,6],6),[[2,3,4,5,6],[]]);
assert.deepEqual(partition([4,5,8,0],5),[[4,5,0],[8]]);

console.log("all test passed");
