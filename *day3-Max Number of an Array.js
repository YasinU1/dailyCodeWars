// Write a program that creates the following array, then calculates and shows the array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];





function maxValues(){
    let count = 0
    for(let i = 0; i < values.length; i++){
        if (count < values[i]){
            count = values[i]
        }
    }
    console.log(count)
}

maxValues()