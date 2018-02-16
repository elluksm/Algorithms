/* FreeCodeCamp - Basic Algorithm Scripting - Task */

//Reverse the provided string

function reverseString(str) {
    var arr = [];
    arr = str.split("");
    arr.reverse();
    var string = arr.join("");
    return string;
}

reverseString("hello");


//Check for Palindromes
/* Return true if the given string is a palindrome. Otherwise, return false.
 A palindrome is a word or sentence that's spelled the same way both forward and backward,
 ignoring punctuation, case, and spacing.*/

function palindrome(str) {
    // Good luck!
    var a = str.toLowerCase();
    a = a.replace(/\W|_/gi,"");
    var b = a.split("");
    b.reverse();
    var c = b.join("");
    if (a===c){
        return true;
    }
    else {
        return false;}
}

console.log(palindrome("B man, a-- plan, a canal. Panama"));
palindrome("0_0 (: /-\ :) 0-0");
palindrome("My age is 0, 0 si ega ym.");


//Find the Longest Word in a String
/* Return the length of the longest word in the provided sentence.
 Your response should be a number.*/

function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = 0;

    for (var i=0; i<words.length; i++){
        if (words[i].length > longestWord) {
            longestWord = words[i].length;
        }
    }
    return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//Title Case a Sentence
/* Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case. */

function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    var upperCaseArray = [];
    for (var i=0; i < words.length; i++){
        upperCaseArray[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    var upperCaseString = upperCaseArray.join(" ");
    return upperCaseString;
}

titleCase("I'm a liTTle tEa pOt");

//Return Largest Numbers in Arrays
/* Return an array consisting of the largest number from each provided sub-array.
 For simplicity, the provided array will contain exactly 4 sub-arrays.*/

function largestOfFour(arr) {
    var result = [];
    for (var i=0; i<arr.length; i++){
        var max = 0;
        for (var j=0; j<arr[i].length; j++){
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        result[i] = max;
    }
    return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//Repeat a string repeat a string
/* Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.*/

function repeatStringNumTimes(str, num) {
    var newString = "";
    if (num>0){
        for (var i=0; i<num; i++) {
            newString = newString.concat(str);
        }
    }
    return newString;
}

repeatStringNumTimes("abc", 3);


//Truncate a string
/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
 Note that inserting the three dots to the end will add to the string length.
 However, if the given maximum string length num is less than or equal to 3, then the addition of the three
  dots does not add to the string length in determining the truncated string.*/

function truncateString(str, num) {
    var truncateString = "";
    if (str.length <= num) {
        return str;
    } else if (num<=3) {
        truncateString = str.substr(0,num) + "...";
    } else {
        truncateString = str.substr(0,num-3) + "...";
    }
    return truncateString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 53);


//Chunky Monkey
/* Write a function that splits an array (first argument) into groups the length of size (second argument)
and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
    var chunkArray = [];

    for (var i=0; i<arr.length; i+=size) {
        var array = arr.slice(i, i+size);
        chunkArray.push(array);
    }

    return chunkArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);


//Slasher Flick
/*Return the remaining elements of an array after chopping off n elements from the head.
 The head means the beginning of the array, or the zeroth index.*/

function slasher(arr, howMany) {
    var newArray = arr.splice(howMany);

    return newArray;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 9);
slasher(["burgers", "fries", "shake"], 1);


//Mutations
/* Return true if the string in the first element of the array contains all of the letters of the string in
the second element of the array.
 For example, ["hello", "Hello"], should return true because all of the letters in the second string are
 present in the first, ignoring case.
 The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
 Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".*/

function mutation(arr) {
    var array = [];
    array.push(arr[0].toLowerCase());
    array.push(arr[1].toLowerCase());
    for (var i =0; i<arr[1].length; i++){
        if (array[0].indexOf(array[1][i])===-1){
            return false;
        }
    }
    return true;
}

mutation(["Hello", "Hey"]);
mutation(["Mary", "Army"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);


//Falsy Bouncer
/* Remove all falsy values from an array.
 Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */

function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", undefined, 9]);
bouncer([1, null, NaN, 2, undefined]);
bouncer([false, null, 0, NaN, undefined, ""]);


//Seek and Destroy
/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments. */

function destroyer(arr) {
    var newArray = Array.prototype.slice.call(arguments);
    for (var i=1; i<newArray.length; i++){

        newArray[0] = newArray[0].filter(function(val) {
            return val !== newArray[i];
        });
    }
    return newArray[0];
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);


//Where do I belong
/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once
it has been sorted. The returned value should be a number.
 For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
 Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look
  like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).*/

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b) {
        return a - b;
    });
    return arr.indexOf(num);
}

getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([40, 60], 50);

//Caesars Cipher
/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher
the meanings of the letters are shifted by some set amount.
 A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/

function rot13(str) {
    var arrayIndexes = [];
    for (var i=0; i<str.length; i++){
        var charCode = str.charCodeAt(i);
        if (charCode < 65 || charCode > 90){
            arrayIndexes[i] = charCode;
        } else if (charCode < 78) {
            arrayIndexes[i] = charCode+13;
        } else {
            arrayIndexes[i] = charCode-13;
        }
    }
    var newString = String.fromCharCode.apply(null, arrayIndexes);
    return newString;
}

rot13("SERR PBQR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
