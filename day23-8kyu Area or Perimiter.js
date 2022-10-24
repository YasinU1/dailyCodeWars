// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.



// PREP
// two inputs if they are square = area rectangle perimeter
//P: -is it number, whole number, + ,  no clarity
//R: Return area or perimeter
const areaOrPerimeter = function(l , w) {
    // Return your answer
    // conditional l == w 
    // 2 results same = area // differ = perimeter
    // area l * w
    //perimeter 2 * l + 2* w
    return l == w ?  (l*w) : 2*(l + w)
    // if (l == w){
    //     return l * w
    // }
    // else{
    //     return (2 * l) + (2 * w)
    // }
  };


//E: 
areaOrPerimeter(6,6)  // 36 area 6x6
areaOrPerimeter(5,7) // 24
areaOrPerimeter(9, 10) // 38 9+9 10+ 10

// PREP
// month as an integer 1-12, month 2 = 1st , month 6 is 2
//P:  - is it a number, will it every be a string boolean , always be a whole number and not a float with decimals, will it be positive,
// will there be anything that might be passed in that i havent clarified
//P: num, whole, + 
//R: Return or Console.log/  - return of each number
//Examples

function quarterOf(month) {
    // math.ceil month / 3
    // return what month it is
    return Math.ceil(month / 3)
    
  }
  
  // Going to create test cases so that we are 100% aligned with watch the results should be 
  quarterOf(2) // 1   so our argument of 2 with it being feb will produce the number 1 because its in the first quarter
  quarterOf(6) // 2 
  quarterOf(11) // 4
  
// does this look correct in what we expecting to come out of this problem , reiterate that result is a number whole and positive -- 
// does this look good
