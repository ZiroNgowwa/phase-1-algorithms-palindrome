function isPalindrome(word) {
  // Write your algorithm here
  let replace = /[.,'!?\- \"]/g;
  let text = word.replace(replace, '').toUpperCase();
  for (let i = 0; i < Math.floor(text.length / 2) - 1; i++) {
    if (text.charAt(i) == text.charAt(text.length - 1 - i)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
*/
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
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
