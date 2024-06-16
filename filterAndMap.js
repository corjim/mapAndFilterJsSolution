
//      Array Method - ForEach 

// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled.

function doubleValues(str) {
    let newArr = [];
    str.forEach(function (el) {
        newArr.push(el * 2)
    });
};

// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function.

function onlyEvenValues(str) {
    let newArr = [];
    str.forEach(function (el) {
        if (el % 2 === 0);
        newArr.push(el);
    });
    return newArr;
};

// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

function showFirstAndLast(str) {
    let newArr = [];
    str.forEach(function (el) {
        newArr.push(el[0] + el[el.length - 1]);
    });
    return newArr;
};

// Write a function called addKeyAndValue which accepts an array of objects, an index, and a value and returns the array passed to the function with the new key and value added for each object.

function addkeyAndValue(str, i, value) {
    str.forEach(function (el) {
        el[i] = value;
    });
    return str;
};


// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count.

function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = 'aeiou';

    splitArr.forEach(function (letter) {
        let lowerCasedLetter = letter.toLowerCase()
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
};


//      Array Method - map

//Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled.

function doubleValuesWithMap(str) {
    return str.map(function (val) {
        return val * 2;
    });
};


// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

function valTimesIndex(str) {
    return str.map(function (val, i) {
        return val * i;
    })
}; console.log([1, 3, 4, 5]);


// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

function extractKey(obj, key) {
    return obj.map(function (val) {
        return val[key];
    });
};

// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

function extractFullName(obj, key) {
    return obj.map(function (el) {
        return el.first + ' ' + el.last;
    });
};

//  Array method filter.

// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

function filterByValue(str, key) {
    return str.filter(function (el) {
        return el[key] !== undefined;
    });
};


// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(str, value) {
    return str.filter(function (val) {
        return val === value;
    })[0];
};


// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

function findInObj(str, key, value) {
    return str.filter(function (val) {
        return val[key] === value;
    })[0];
};

//Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.


function removeVowels(str) {
    const vowels = "aeiou";
    let lowerCasedStr = str.toLowerCase();
    let splitStr = lowerCasedStr.split("");

    let filteredStr = splitStr.filter(function (val) {
        return vowels.indexOf(val) === -1;
    })
    return filteredStr.join('');
};

// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

function doubleOddNumbers(str) {
    return str.filter(function (val) {
        return val % 2 !== 0;
    }).map(function (val) {
        val * 2;
    })
};
