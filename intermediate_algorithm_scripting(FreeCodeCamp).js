/* FreeCodeCamp - Intermediate Algorithm Scripting - Task */

//Sum All Numbers in a Range
/* We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
 The lowest number will not always come first. */

function sumAll(arr) {
    var min = Math.min.apply(null,arr);
    var max = Math.max.apply(null,arr);
    var sum = 0;
    for(var i=min; i<=max; i++){
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);
sumAll([10, 5]);


//Diff Two Arrays
/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.*/

function diffArray(arr1, arr2) {
    var newArr = [];

    arr1.forEach(function(element) {
        if (arr2.indexOf(element) === -1){
            newArr.push(element);
        }
    });

    arr2.forEach(function(element) {
        if (arr1.indexOf(element) === -1){
            newArr.push(element);
        }
    });
    return newArr;
}

diffArray([1, 6, 8, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);


//Wherefore art thou
/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property
and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if
it is to be included in the returned array.
 For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
 and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and
 its value, that was passed on as the second argument.*/

function whatIsInAName(collection, source) {
    var arr = [];
    var keys = Object.keys(source);
    collection.forEach(function(element) {
        for (var i=0; i<keys.length; i++){
            var value = keys[i];
            if (!element.hasOwnProperty(value)||element[value]!=source[value]) {
                return;
            }
        }
        arr.push(element);
    });
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });


//Search and Replace
/*
* Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 First argument is the sentence to perform the search and replace on.
 Second argument is the word that you will be replacing (before).
 Third argument is what you will be replacing the second argument with (after).
 NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace
 the word "Book" with the word "dog", it should be replaced as "Dog"*/

function myReplace(str, before, after) {
    var re = new RegExp(before,"gi");
    var index = str.search(before);
    var newStr = "";
    if (str[index] === str[index].toUpperCase()){
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    newStr = str.replace(re, after);

    return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

//Pig Latin
/* Translate the provided string to pig latin.
 Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it
 to the end of the word and suffixes an "ay".
 If a word begins with a vowel you just add "way" to the end.
 Input strings are guaranteed to be English words in all lowercase.*/

function translatePigLatin(str) {
    var pattern = /[aeiou]/gi;
    if (pattern.test(str[0])){
        str = str + "way";
    } else if (!pattern.test(str[1])) {
        str = str.substr(2) + str.substr(0,2) + "ay";
    } else {
        str = str.substr(1) + str.substr(0,1) + "ay";
    }

    return str;
}

translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("glove");

//Missing letters
/* Find the missing letter in the passed letter range and return it.
 If all letters are present in the range, return undefined.*/


function fearNotLetter(str) {
    var charCode = str.charCodeAt(0)+1;
    var missingLetter;
    for (var i=1; i<str.length; i++){
        if (charCode !== str.charCodeAt(i)){
            missingLetter = String.fromCharCode(charCode);
        } else {
            charCode = charCode + 1;
        }
    }
    return missingLetter;
}

fearNotLetter("abce");
fearNotLetter("abcdeghijklmno");

//Sorted Union
/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.*/

function uniteUnique(arr) {
    var args = Array.prototype.slice.call(arguments);
    var array = args.reduce(
        function(a, b) {
            return a.concat(b);
        }, []
    );

    var newArray = [];
    for (var i=0; i<array.length; i++){
        if (newArray.indexOf(array[i]) < 0) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);