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
