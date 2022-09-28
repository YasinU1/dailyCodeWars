// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let str1 = str.split("")
    let count = 0
    for (let i = 0; i < str1.length ; i++ ){
      if (str1[i] === "a"|| str1[i] === "e" || str1[i] === "i" || str1[i] === "o" || str1[i] === "u"){
        ++count 
      }
    }
    return count  
  }

  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      vowels.forEach((x) => {
       if (x === str[i]){
         vowelsCount++
          }
        })
      }
    return vowelsCount;
  }