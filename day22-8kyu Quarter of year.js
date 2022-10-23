
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), 
// is part of the fourth quarter.





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