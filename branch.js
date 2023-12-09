// if-else chain
let calender = new Date()
let currentTime = calender.getHours()
console.log(currentTime);

if (currentTime < 12) {
    console.log("good morning");
}else if (currentTime < 16) {
    console.log("good afternoon");
}else if (currentTime < 19) {
    console.log("good evening");
} else {
    console.log("good night");
}
// switch

let userOption = 20
switch (userOption) {
    case 1:
        console.log("user pressed 1");
        break;
    case 2:
        console.log("user pressed 2");
        break;
    case 3:
        console.log("user pressed 3");
        break;
    default:
        console.log("invalid option");
        break;
}

// tenary opeartor: ?:
// condition ? true : false

let Days = new Date()
let CurrentDay = Days.getFullYear()

if (CurrentDay < 12) {
    console.log("Happz new year");
}else {
    console.log("Not new year");
}



// write a program that checks if a given word is a palindrome. A palindrome is a word that is spelled the same way forward and backward, such as “racecar” or “madam”.

// A function that returns a boolean if the conditions are met.
// function wordIsPalindrome(word) {
//     // convert the word to a lower case
//     let  word = word.toLowercase();
//     // reverse the word
//     // 1. split the word to individual string
//     let wordSplit = word.split("");
//     // 2. reverse the spitted word
//     let reverseWord = wordSplit.reverse();
//     // 3. join slitted word and reversed word
//     let joinAll = reverseWord.join("");

//     // use the comparison operator to compare word and joined strings
//     if (word === joinAll) {
//         return true;
//     }else {
//         return false;
//     }
// }

//  Message when a user enters a word
// let word = prompt ("write a word: ")
// if (wordIsPalindrome(word)) {
//     console.log("word is palindrome");
// }else {
//     console.log("word is not palindrome");
// }

function wordIsPalindrome(str) {
    let  word = str.toLowerCase();
    let wordSplit = word.split("");
    let reverseWord = wordSplit.reverse();
    let joinAll = reverseWord.join("");

    if (word === joinAll) {
        return true;
    }else {
        return false;
    }

}
let word = prompt ("write a word: ")
if (wordIsPalindrome(word)) {
    console.log("word is palindrome");
}else {
    console.log("word is not palindrome");
}