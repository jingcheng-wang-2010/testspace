// Convert Celsius to Fahrenheit
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

function convertCtoF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
  
convertCtoF(30);

// Reverse a String
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length-1; i > -1; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
  
reverseString("hello"); 

function reverseString2(str) {
    return str
    .split("")
    .reverse()
    .join("");
}

// Factorialize a Number
function factorialize(num) {
    let factorial = 1;
    while (num > 0) {
        factorial *= num;
        num--;
    }
    return factorial;
  }
  
  factorialize(5);

// initiate product as 1, for loop won't trigger unless num is greater than 1
  function factorialize2(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }

// recurive solution
function factorialize3(num) {
    if (num <= 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }

// tail recursion solution
  function factorialize(num, factorial = 1) {
    if (num <= 0) {
      return factorial;
    } else {
      return factorialize(num - 1, factorial * num);
    }
  }

  // Find the Longest Word in a String
  function findLongestWordLength(str) {
    let longest = 0;
    let splitStr = str.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > longest) {
            longest = splitStr[i].length;
        }
    }
    return longest;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  // loop through whole str and calculate when encounter space
  function findLongestWordLength2(str) {
    let longestLength = 0;
    let currentLength = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        if (currentLength > longestLength) {
          longestLength = currentLength;
        }
        currentLength = 0;
      } else {
        currentLength++;
      }
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    
    return longestLength;
    }

    // use .reduce()
    function findLongestWordLength3(s) {
        return s
          .split(' ')
          .reduce((longest, word) => Math.max(longest, word.length), 0);
      }

      // Using .map()
      function findLongestWordLength4(str) {
        return Math.max(...str.split(" ").map(word => word.length));
      }

      // recursive
      function findLongestWordLength5(str) {
        // split the string into individual words
        const words = str.split(" ");
      
        // words only has 1 element left that is the longest element
        if (words.length == 1) {
          return words[0].length;
        }
      
        // if words has multiple elements, remove the first element
        // and recursively call the function
        return Math.max(
          words[0].length,
          findLongestWordLength5(words.slice(1).join(" "))
        );
      }