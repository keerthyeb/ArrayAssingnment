const assert = require("assert");
let lib = require("./library.js");
let {filterOddNumbers} = lib ;
let {filterEvenNumbers} = lib ;
let {sumOfNumbers} = lib ;
let {reverseNumbers} = lib ;
let {selectSecondNumbers} = lib ;
let {reverseFibonacci} = lib ;
let {greatestNumber} = lib ;
let {lowestNumber} = lib ;
let {averageOfNumbers} = lib ;
let {mapLengthOfNames} = lib ;
let {countOddNumbers} = lib ;
let {countEvenNumbers} = lib ;
let {countNumbersAbove} = lib;
let {countNumbersBelow} = lib;
let {reverseArray} = lib;
let {indexOfNumber} = lib;
let {extractDigit} = lib;
let {uniqueOfNumbers} = lib;
let {isSorted} = lib;
let { isInDecendingOrder} = lib;
let {intersectionOf2Arrays} = lib;
let {uniqueElements} = lib;
let {unionOf2Array} = lib;

assert.deepEqual(filterOddNumbers([]),[]);
assert.deepEqual(filterOddNumbers([1]),[ 1 ]);
assert.deepEqual(filterOddNumbers([2]),[]);
assert.deepEqual(filterOddNumbers([2,4]),[]);
assert.deepEqual(filterOddNumbers([1,3]),[ 1, 3 ]);
assert.deepEqual(filterOddNumbers([2,3]),[ 3 ]);
assert.deepEqual(filterOddNumbers([22,3,4,5]),[ 3, 5 ]);

assert.deepEqual(filterEvenNumbers([]),[]);
assert.deepEqual(filterEvenNumbers([1]),[]);
assert.deepEqual(filterEvenNumbers([2]),[ 2 ]);
assert.deepEqual(filterEvenNumbers([2,4]),[ 2, 4 ]);
assert.deepEqual(filterEvenNumbers([1,3]),[]);
assert.deepEqual(filterEvenNumbers([2,3]),[ 2 ]);
assert.deepEqual(filterEvenNumbers([22,3,4,5]),[ 22, 4 ]);

assert.deepEqual(sumOfNumbers([]),0);
assert.deepEqual(sumOfNumbers([0]),0);
assert.deepEqual(sumOfNumbers([3]),3);
assert.deepEqual(sumOfNumbers([3,4,2,1]),10);

let _2_4 = [2,4]; 
assert.deepEqual(reverseNumbers(_2_4),[ 4, 2 ]);
assert.deepEqual(_2_4,[2,4]);
assert.deepEqual(reverseNumbers([1,3]),[ 3, 1 ]);
assert.deepEqual(reverseNumbers([2,3]),[ 3, 2 ]);
assert.deepEqual(reverseNumbers([22,3,4,5]),[ 5, 4, 3, 22 ]);

assert.deepEqual(selectSecondNumbers([2,3]),[ 2 ]);
assert.deepEqual(selectSecondNumbers([22,3,4,5]),[ 22, 4 ]);
assert.deepEqual(selectSecondNumbers([1,2,5,-1,2,4,3,1]),[ 1, 5, 2, 3 ]);

assert.deepEqual(reverseFibonacci(5),[ 5, 3, 2, 1, 1 ]);
assert.deepEqual(reverseFibonacci(7),[ 13, 8, 5, 3, 2, 1, 1 ]);
assert.deepEqual(reverseFibonacci(1),[ 1 ]);
assert.deepEqual(reverseFibonacci(2),[ 1, 1 ]);

assert.deepEqual(greatestNumber([22,3,4,5]),22);
assert.deepEqual(greatestNumber([0]),0);
assert.deepEqual(greatestNumber([1]),1);
assert.deepEqual(greatestNumber([0,1]),1);
assert.deepEqual(greatestNumber([33,44,23,1]),44);

assert.deepEqual(lowestNumber([22,3,4,5]),3);
assert.deepEqual(lowestNumber([0]),0);
assert.deepEqual(lowestNumber([1]),1);
assert.deepEqual(lowestNumber([0,1]),0);
assert.deepEqual(lowestNumber([33,44,23,1]),1);

assert.equal(averageOfNumbers([0]),0);
assert.equal(averageOfNumbers([1,2,3,4]),3);
assert.equal(averageOfNumbers([3,5]),4);
assert.equal(averageOfNumbers([1]),1);
assert.equal(averageOfNumbers([2,4]),3);

assert.deepEqual(mapLengthOfNames(["keerthy"]),[7]); 
assert.deepEqual(mapLengthOfNames(["keerthy","pannapur","deepika"]),[7,8,7]);
assert.deepEqual(mapLengthOfNames(["amju","moothu"]),[4,6]);
assert.deepEqual(mapLengthOfNames([]),[]);

assert.deepEqual(countOddNumbers([]),0);
assert.deepEqual(countOddNumbers([1]),1);
assert.deepEqual(countOddNumbers([2]),0);
assert.deepEqual(countOddNumbers([2,4]),0);
assert.deepEqual(countOddNumbers([1,3]),2);
assert.deepEqual(countOddNumbers([2,3]),1);
assert.deepEqual(countOddNumbers([22,3,4,5]),2);

assert.deepEqual(countEvenNumbers([]),0);
assert.deepEqual(countEvenNumbers([1]),0);
assert.deepEqual(countEvenNumbers([2]),1);
assert.deepEqual(countEvenNumbers([2,4]),2);
assert.deepEqual(countEvenNumbers([1,3]),0);
assert.deepEqual(countEvenNumbers([2,3]),1);
assert.deepEqual(countEvenNumbers([22,3,4,5]),2);

assert.deepEqual(countNumbersAbove([2,3,4,5,6],3),3);
assert.deepEqual(countNumbersAbove([2,3,4,5],10),0);
assert.deepEqual(countNumbersAbove([11,12,13],10),3);
assert.deepEqual(countNumbersAbove([],3),0);
assert.deepEqual(countNumbersAbove([2,3,4,5,6],6),0);

assert.deepEqual(reverseNumbers(_2_4),[ 4, 2 ]);
assert.deepEqual(_2_4,[2,4]);
assert.deepEqual(reverseNumbers([1,3]),[ 3, 1 ]);
assert.deepEqual(reverseNumbers([2,3]),[ 3, 2 ]);
assert.deepEqual(reverseNumbers([22,3,4,5]),[ 5, 4, 3, 22 ]);

assert.deepEqual(reverseArray(_2_4),[ 4, 2 ]);
assert.deepEqual(_2_4,[2,4]);
assert.deepEqual(reverseArray([1,3]),[ 3, 1 ]);
assert.deepEqual(reverseArray([2,3]),[ 3, 2 ]);
assert.deepEqual(reverseArray([22,3,4,5]),[ 5, 4, 3, 22 ]);

assert.deepEqual(indexOfNumber([2,3,4,5,6],3),1);
assert.deepEqual(indexOfNumber([2,3,4,5],10),-1);
assert.deepEqual(indexOfNumber([11,12,13,10],10),3);
assert.deepEqual(indexOfNumber([],3),-1);
assert.deepEqual(indexOfNumber([2,3,4,5,6],6),4);

assert.deepEqual(extractDigit(2345),[2,3,4,5]);
assert.deepEqual(extractDigit(23455),[2,3,4,5,5]);
assert.deepEqual(extractDigit(780),[7,8,0]);

assert.equal(isSorted([1,2,3,4,5]),true);
assert.equal(isSorted([1]),true);
assert.equal(isSorted([1,2,5,4,3]),false);
assert.equal(isSorted([5,4,3,2,1]),false);

assert.equal(isInDecendingOrder([1,2,3,4,5]),false);
assert.equal(isInDecendingOrder([1]),true);
assert.equal(isInDecendingOrder([1,2,5,4,3]),false);
assert.equal(isInDecendingOrder([5,4,3,2,1]),true);

assert.deepEqual(intersectionOf2Arrays([1,2,3,4,5],[4,5,6,3,7]),[4,5,3]);
assert.deepEqual(intersectionOf2Arrays([4,5,6,7],[1,2,3,4]),[4]);
assert.deepEqual(intersectionOf2Arrays([1,2,3,4],[5,6,7,8]),[]);
assert.deepEqual(intersectionOf2Arrays([0],[0]),[0]);
assert.deepEqual(intersectionOf2Arrays(["keerthy","amju","moothu"],["amju"]),["amju"]);

assert.deepEqual(uniqueElements([1,2,3,4,1,2]),[1,2,3,4]);
assert.deepEqual(uniqueElements(["keer","amju","moothu","amju"]),["keer","amju","moothu"]);
assert.deepEqual(uniqueElements([]),[]);
assert.deepEqual(uniqueElements([1,2,3]),[1,2,3]);

assert.deepEqual(unionOf2Array([1,2,3,4,5],[4,5,6,3,7]),[1,2,3,4,5,6,7]);
assert.deepEqual(unionOf2Array([4,5,6,7],[1,2,3,4]),[4,5,6,7,1,2,3]);
assert.deepEqual(unionOf2Array([1,2,3,4],[5,6,7,8]),[1,2,3,4,5,6,7,8]);
assert.deepEqual(unionOf2Array([0],[0]),[0]);
assert.deepEqual(unionOf2Array(["keerthy","amju"],["moothu","amju"]),["keerthy","amju","moothu"]);

