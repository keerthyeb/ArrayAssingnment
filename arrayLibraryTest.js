const assert = require("assert");
let lib = require("./arrayLibrary.js");

let {filterOddNumbers} = lib;
assert.deepEqual(filterOddNumbers([]),[]);
assert.deepEqual(filterOddNumbers([1]),[ 1 ]);
assert.deepEqual(filterOddNumbers([2]),[]);
assert.deepEqual(filterOddNumbers([2,4]),[]);
assert.deepEqual(filterOddNumbers([1,3]),[ 1, 3 ]);
assert.deepEqual(filterOddNumbers([2,3]),[ 3 ]);
assert.deepEqual(filterOddNumbers([22,3,4,5]),[ 3, 5 ]);


let {filterEvenNumbers} = lib;
assert.deepEqual(filterEvenNumbers([]),[]);
assert.deepEqual(filterEvenNumbers([1]),[]);
assert.deepEqual(filterEvenNumbers([2]),[ 2 ]);
assert.deepEqual(filterEvenNumbers([2,4]),[ 2, 4 ]);
assert.deepEqual(filterEvenNumbers([1,3]),[]);
assert.deepEqual(filterEvenNumbers([2,3]),[ 2 ]);
assert.deepEqual(filterEvenNumbers([22,3,4,5]),[ 22, 4 ]);


let {sumOfNumbers} = lib;
assert.deepEqual(sumOfNumbers([]),0);
assert.deepEqual(sumOfNumbers([0]),0);
assert.deepEqual(sumOfNumbers([3]),3);
assert.deepEqual(sumOfNumbers([3,4,2,1]),10);


let {reverseNumbers} = lib;  
let _2_4 = [2,4]; 
assert.deepEqual(reverseNumbers(_2_4),[ 4, 2 ]);
assert.deepEqual(_2_4,[2,4]);
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


let {greatestNumber} = lib;  
assert.deepEqual(greatestNumber([22,3,4,5]),22);
assert.deepEqual(greatestNumber([0]),0);
assert.deepEqual(greatestNumber([1]),1);
assert.deepEqual(greatestNumber([0,1]),1);
assert.deepEqual(greatestNumber([33,44,23,1]),44);


let {lowestNumber} = lib;
assert.deepEqual(lowestNumber([22,3,4,5]),3);
assert.deepEqual(lowestNumber([0]),0);
assert.deepEqual(lowestNumber([1]),1);
assert.deepEqual(lowestNumber([0,1]),0);
assert.deepEqual(lowestNumber([33,44,23,1]),1);


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


let {countNumbersAbove} = lib;
assert.deepEqual(countNumbersAbove([2,3,4,5,6],3),3);
assert.deepEqual(countNumbersAbove([2,3,4,5],10),0);
assert.deepEqual(countNumbersAbove([11,12,13],10),3);
assert.deepEqual(countNumbersAbove([],3),0);
assert.deepEqual(countNumbersAbove([2,3,4,5,6],6),0);


let {indexOfNumber} = lib;
assert.deepEqual(indexOfNumber([2,3,4,5,6],3),1);
assert.deepEqual(indexOfNumber([2,3,4,5],10),-1);
assert.deepEqual(indexOfNumber([11,12,13,10],10),3);
assert.deepEqual(indexOfNumber([],3),-1);
assert.deepEqual(indexOfNumber([2,3,4,5,6],6),4);


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


let {intersectionOf2Arrays} = lib;
assert.deepEqual(intersectionOf2Arrays([1,2,3,4,5],[4,5,6,3,7]),[4,5,3]);
assert.deepEqual(intersectionOf2Arrays([4,5,6,7],[1,2,3,4]),[4]);
assert.deepEqual(intersectionOf2Arrays([1,2,3,4],[5,6,7,8]),[]);
assert.deepEqual(intersectionOf2Arrays([0],[0]),[0]);
assert.deepEqual(intersectionOf2Arrays(["keerthy","amju","moothu"],["amju"]),["amju"]);


let {uniqueElements} = lib;
assert.deepEqual(uniqueElements([1,2,3,4,1,2]),[1,2,3,4]);
assert.deepEqual(uniqueElements(["keer","amju","moothu","amju"]),["keer","amju","moothu"]);
assert.deepEqual(uniqueElements([]),[]);
assert.deepEqual(uniqueElements([1,2,3]),[1,2,3]);


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
