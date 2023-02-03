function isPalindrome(word) {
  // Write your algorithm here
    // const wordToArray = word.split();
    // const reverseWord = wordToArray.reverse().join();
    // wordToArray === reverseWord ? (isPalindrome(true)) : (isPalindrome(false));
    //not sure why this didnt work

    const length = word.length;
    for (let i = 0; i < length / 2; i++) {
      if (word[i]!== word[length - 1 - i]) {
        return false;
    
    }
    return true;
}}
/* 
  Add your pseudocode here
  strings need to be converted to lowercase
  check if the first and last characters are the same
  for the length of the string

  how to check if the first and last characters are the same?
  and then repeat the process for the rest of the string
*/

/*
  Add written explanation of your solution here
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
