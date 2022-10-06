
// Our Football team has finished the championship.

// Our teams match results are recorded in a collection of strings. 
// Each match is represented by a string in the format "x:y", where x us our teams score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x)
// got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


// function points(games) {
//     // your code here
//     let count = 0
//     for (let i = 0; i < games.length; i++){
//       const [x,y] = games[i].split(":")
//       count = count + Number(x)
//       console.log(x)
//     }
//     console.log(count)
//   }
  

function points(games) {
    // your code here
    let count = 0
    for (let i = 0; i < 10; i++){
      let [x,y] = games[i].split(":")
      if (+x > +y){
        count += 3
      }
      else if ( +x == +y){
        count += 1
      }
    }
    return count
  }
  
  
  
points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])

//test

function points(games) {
  return games.reduce((output,current)=>{
    let x = parseInt(current[0]); // current[0] gets the first digit of a str , and parse int turns that into a number to add
        let y = parseInt(current[2]);
    let value= x>y ? 3 : x===y ? 1 : 0; // double turnarey operator within a variable
    return output+value;
  },0)
}
