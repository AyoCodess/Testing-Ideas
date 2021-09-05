"use strict";
// comparing objects together

//? frequency counter
function validAnagram2(str1, str2) {
    // add whatever parameters you deem necessary - good luck!
    if (str1.length !== str2.length) {
        console.log(false);
        return false;
    }
    let strObject1 = {};
    let strObject2 = {};

    for (let char of str1) {
        strObject1[char] = (strObject1[char] || 0) + 1;
    }

    for (let char of str2) {
        strObject2[char] = (strObject2[char] || 0) + 1;
    }

    for (let key in strObject1) {
        if (!strObject2[key] || strObject1[key] !== strObject2[key]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

// validAnagram2("zzz", "zze"); // false
// validAnagram2("anagram", "nagaram"); // true
// validAnagram2("rat", "car"); // false) // false
// validAnagram2("awesome", "awesom"); // false
// validAnagram2("qwerty", "qeywrt"); // true
// validAnagram2("texttwisttime", "timetwisttext"); // true

let arr = [-6, -5, -4, -3, 0, 1, 2, 3, 5, 10];
let arr2 = [-2, -1, 0, 3];
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//? multiple pointers

function sumZero(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];

        if (sum === 0) {
            return [array[left] + array[right]];
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
}

// sumZero(arr2);

function sumZero1(array) {
    let left = 0;
    let right = array.length - 1;

    if (array[0] > 0) {
        console.log(`no pair found 1`);
        return undefined;
    }

    while (left < right) {
        let sum = array[left] + array[right];

        if (sum === 0) {
            console.log([array[left], array[right]]);
            return [array[left], array[right]];
        } else if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        }
    }
    console.log(`no pair found 2`);
    return undefined;
}

// sumZero1(arr);
// sumZero1(arr2);
// sumZero1(arr3);

let arr4 = [1, 1, 1, 1, 1, 2];
let arr5 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
let arr6 = [];
let arr7 = [-2, -1, -1, 0, 1];

function countUniqueValues(array) {
    let obj = {};

    for (let num of array) {
        obj[num] = (obj[num] || 0) + 1;
    }

    console.log(Object.keys(obj).length);
    return Object.keys(obj).length;
}

// countUniqueValues(arr4);
// countUniqueValues(arr5);
// countUniqueValues(arr6);
// countUniqueValues(arr7);

function countUniqueValues2(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) count++;
        console.log(array[i], array[i] + 1);
    }
    console.log(count);
    console.log(array);
    return count;
}

// countUniqueValues2(arr4);
// countUniqueValues2(arr5);
// countUniqueValues2(arr6);
// countUniqueValues2(arr7);

const countUniqueValues3 = (array) => {
    let uniques;
    if (!array) return [];
    uniques = [...new Set(array)].length;
    console.log(uniques);
    return uniques;
};

// countUniqueValues3(arr5);

function countUniqueValues4(arr) {
    let uniques = [];
    arr.forEach((cur) => {
        if (!uniques.includes(cur)) {
            uniques.push(cur);
        }
    });
    console.log(uniques.length);
    return uniques.length;
}

// countUniqueValues4(arr5);

//? Sliding window patters - keeps track of a subset via a variable, array, object of data in a main set of data

// let arr8 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];

function maxSubarraySum(array, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (array.length < num) return null;

    //? add together first set of numbers in thr array
    for (let i = 0; i < num; i++) {
        maxSum += array[i];
        console.log(num);
    }

    tempSum = maxSum;
    console.log(maxSum);
    console.log(tempSum);

    //? we minus the first value in our num count (1), from temp sum, then add current array indexed value (4).
    for (let i = num; i < array.length; i++) {
        let arrMinusNum = array[i - num];
        let arrI = array[i];

        tempSum = tempSum - arrMinusNum + arrI;
        maxSum = Math.max(maxSum, tempSum);
    }

    console.log(maxSum);
    return maxSum;
}
//? sliding window

// maxSubarraySum(arr8, 3);
// maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

function sameFrequency(num1, num2) {
    //? short circuit if numbers are not the same length

    if (num1.toString().length !== num2.toString().length) {
        console.log(false);
        return false;
    }

    let num3 = num1.toString();
    let num4 = num2.toString();

    //? create and use two object to count frequency

    let numObj3 = {};
    let numObj4 = {};

    //?  compare both object values to eachother

    for (let num of num3) {
        console.log(num);
        numObj3[num] = (numObj3[num] || 0) + 1;
    }

    for (let num of num4) {
        numObj4[num] = (numObj4[num] || 0) + 1;
    }

    for (let key in numObj3) {
        if (numObj3[key] !== numObj4[key]) {
            console.log(false);
            return false;
        } else {
            console.log(true);
            return true;
        }
    }
}

// return tree or false if the values have the same digits

// sameFrequency(182, 281);
// sameFrequency(34, 14);
// sameFrequency(3589578, 5879385);
// sameFrequency(22, 222);

function sameFrequency1(num1, num2) {
    const digits = {};

    while (num1 > 0) {
        digits[num1 % 10] = (digits[num1 % 10] || 0) + 1;
        num1 = Math.floor(num1 / 10);
    }

    console.log(digits);

    while (num2 > 0) {
        if (!digits[num2 % 10]) {
            return false;
        }

        digits[num2 % 10] -= 1;
        num2 = Math.floor(num2 / 10);
    }

    return true;
}

// sameFrequency1(456, 654);

function areThereDuplicates(...items) {
    let start = 0;
    let next = 1;

    items.sort();

    console.log(items);

    while (start < items.length) {
        if (items[start] === items[next]) {
            console.log(true);
            return true;
        }
        start++;
        next++;
    }

    console.log(false);
    return false;
}

//? multiple counter method

// areThereDuplicates(1, 2, 3);
// areThereDuplicates(1, 2, 2);
// areThereDuplicates("a", "b", "c", "a");

function areThereDuplicates2(...items) {
    let obj = {};

    for (let item of items) {
        obj[item] = (obj[item] || 0) + 1;
    }

    console.log(obj);

    for (let [key, value] of Object.entries(obj)) {
        if (value > 1) {
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}
//? frequency counter method

// areThereDuplicates2(1, 2, 3);
// areThereDuplicates2(1, 2, 2);
// areThereDuplicates2("a", "b", "c", "a");

function areThereDuplicates3() {
    let collection = {};

    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
        console.log(collection);
    }

    for (let key in collection) {
        if (collection[key] > 1) return true;
    }

    return false;
}

//? frequency counter method 2

// areThereDuplicates3(1, 2, 3);
// areThereDuplicates3(1, 2, 2);
// areThereDuplicates3("a", "b", "c", "a");

function areThereDuplicates4() {
    let set = new Set(arguments).size;

    console.log(set);

    console.log(set !== arguments.length);
}

//? one line method

// areThereDuplicates4(23, 23, 45, 56, 32, 78);

function averagePair(array, target) {
    //? short circuit
    if (array.length === 0) {
        console.log(false);
        return false;
    }

    //? compare the integers in the array with each other using pointers

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        //? compare with target integer

        if (array[left] + array[right] / 2 === target) {
            console.log(true);
            return true;
        }

        left++;
        right--;
        console.log(left, right);
    }

    console.log(false);
    return false;
}

//? multiple pointers
// averagePair([1, 2, 3], 2.5);
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
// averagePair([-1, 0, 3, 4, 5, 6], 4.1);
// averagePair([], 4);

function isSubsequence(string1, string2) {
    let i = 0;
    let j = 0;

    let arr = [];

    //? short circuit
    if (!string1) {
        console.log(true);
        return true;
    }

    while (j < string2.length) {
        if (string2[j] === string1[i]) {
            i++;
            arr.push(string2[j]);
            console.log(arr);
        }
        if (i === string1.length) {
            console.log(true);
            return true;
        }
        j++;
    }
    console.log(false);
    return false;
}

//? multiple pointers, complicated - very important to understand. consider what should happend in the while statement ( just consider true conditions) if one of them breaks return false in the end.
// isSubsequence("hello", "hello world");
// isSubsequence('sing', 'sting')
// isSubsequence("abc", "abracadabra");
// isSubsequence('abc', 'acb')

function maxSubarraySum2(array, num) {
    let tempSum = 0;
    let maxSum = 0;

    //? short circuit
    if (array.length < num) {
        console.log(null);
        return null;
    }

    //? calculated first num, numbers of array
    for (let i = 0; i < num; i++) {
        tempSum += array[i];
    }

    maxSum = tempSum;
    console.log(maxSum);

    //? implement sliding window

    for (let i = num; i < array.length; i++) {
        tempSum += array[i] - array[i - num];
        maxSum = Math.max(maxSum, tempSum);

        console.log(maxSum);
        return maxSum;
    }
}

// maxSubarraySum2([100,200,300,400],2)
// maxSubarraySum2([1,4,2,10,23,3,1,0,20],4)
// maxSubarraySum2([-3,4,0,-2,6,-1],2)
// maxSubarraySum2([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);
// maxSubarraySum2([2, 3, 3], 3);
// maxSubarraySum2([3],3)

function minSubArrayLen(arr, num) {
    if (arr.length < 2) return null;

    let left = 0;
    let right = 0;
    let minLen = 0;
    let tempLen;
    let tempSum = arr[left];

    while (right < arr.length) {
        if (tempSum < num) {
            right++;
            if (arr[right]) tempSum += arr[right];
        } else {
            tempLen = right - left + 1;
            minLen = minLen ? Math.min(minLen, tempLen) : tempLen;
            if (minLen === 1) return 1;
            tempSum -= arr[left];
            left++;
        }
    }
    console.log(minLen);
    return minLen;
}

//?sliding window (hard)

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
// minSubArrayLen([2, 1, 6, 5, 4], 9);
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);

function minSubArrayLen2(arr, n) {
    let minLen = Infinity;
    let tempLen = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum >= n) {
            while (sum >= n) {
                sum -= arr[i - tempLen];
                minLen = Math.min(minLen, tempLen);
                tempLen--;
            }
        }
        tempLen++;
    }
    return minLen === Infinity ? 0 : minLen + 1;
}

// minSubArrayLen2([2, 3, 1, 2, 4, 3], 7);
// minSubArrayLen2([2, 1, 6, 5, 4], 9);
// minSubArrayLen2([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);
// minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);
// minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
// minSubArrayLen2([4, 3, 3, 8, 1, 2, 3], 11);
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);

function findLongestSubstring(str) {
    let longestSubStr = -Infinity;
    let subStrKeys = {};

    if (str.length === 0) return 0;

    let pos = 0;
    let subStrLen = 0;

    while (pos < str.length) {
        if (!(str[pos] in subStrKeys)) {
            subStrKeys[str[pos]] = pos;
            pos++;
            subStrLen++;
        } else {
            if (longestSubStr < subStrLen) longestSubStr = subStrLen;

            const newPos = subStrKeys[str[pos]] + 1;
            subStrKeys = {};

            pos = newPos;
            subStrLen = 0;
        }
    }

    if (longestSubStr < subStrLen) longestSubStr = subStrLen;

    return longestSubStr;
}

//? sliding window

// findLongestSubstring('') //
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

//? RECURSION

function collect(arr, res = []) {
    if (!arr.length) return res;
    if (arr[0] % 2 !== 0) res.push(arr[0]);

    return collect(arr.slice(1), res);
}

// console.log(collect([1, 2, 3, 4, 5, 6, 7]));

function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

// power(2,0) // 1
// power(2,2) // 4
power(2, 4); // 16

//? implementing linear search
//! you can use a foreach or traditional for loop
let arr11 = [3, 4, 65, 78, 22, 55];

function linearSearch(arr, term) {
    for (let [index, item] of arr.entries()) {
        if (item === term) {
            console.log(index);
            return index;
        }
    }

    console.log("not found");
    return "not found";
}

// linearSearch(arr11, 4);

let arr12 = [
    3, 4, 65, 78, 22, 55, 723, 67, 1, 34, 67, 3, 56, 75, 734, 75, 12, 754, 3,
    6435, 652, 75, 35, 53, 63, 73, 23, 65,
];

let arrSorted = arr12.sort(function (a, b) {
    return a - b;
});

function binarySearch(arr, val) {
    let mid = Math.ceil(arr.length / 2);
    let start = 0;
    let end = arr.length - 1;
    let result = -1;

    while (start <= end) {
        if (arr[mid] === val) {
            result = mid;
            break;
        } else if (arr[mid] > val) {
            end = mid - 1;
            mid = Math.ceil((start + end) / 2);
        } else {
            start = mid + 1;
            mid = Math.ceil((start + end) / 2);
        }
    }

    console.log(result);
    return result;
}

// binarySearch(arrSorted, 999);

let naiveString = (str, sub, count = 0) => {
    for (let i = 0; i <= str.length - sub.length; i++) {
        if (str.substring(i, i + sub.length) === sub) {
            count++;
        }
        console.log(count);
        return count;
    }
};

naiveString("mynameisgoku", "goku");
