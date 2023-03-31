function isPalindrome(word) {
 let reversedWords = word.split('').reverse().join('');

 return word === reversedWords ? true:false;

}

/*
  split the string
  reverse the letters in the string
  join the words in the string
*/

/*
    Assigned a variable palindrome with a reversed version of the argument of the function isPalindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
