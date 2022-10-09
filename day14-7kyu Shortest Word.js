// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



function findShort(s){
    let arr = s.split(" ")
    let shortestArr = arr.sort((a,b) => a.length > b.length ? 1 : -1)
    return shortestArr[0].length
  }


function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}