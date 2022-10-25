


// function array of strings, sorted , order shortest to longest,  by string length
// PREP
// P: array of strings and strings , no special , one string , no spaces, different lengths
// R: return array strings which is sorted shortest to largest

// E: 
function sortByLength(array){
// return array sorted shortest to longest
// conditional string length 
// a sort function shortes -> largest
// return a array

return array.sort((a,b) =>{
    if (a.length > b.length){
        return 1
    }
    else{
        return -1
    }
})

}
function sortByLength(array){
return array.sort((a,b) => (a.length > b.length) ? 1 : -1)
}

sortByLength([and, it, because]) // [it, and, because]
sortByLength([one, three, five]) // [one, five, three]


//test