
// given array of integers, and given a target, 
// return indices of two numbers to == target

var twoSum = function(nums, target) {
    /// go through the array for the first time, for a full length of the array
    let hashmap = {}
    for (let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if (hashmap.hasOwnProperty(diff)){
            return [hashmap[diff], i]
        }
        hashmap[nums[i]] = i
    }

    // go through the array for the second time but not include the first no.
    // add the second time to the first time,
    // compare if the add == target, if not contiue
    // if that has passed, return a array with the index values of the two correct values
    // for (let i = 0; i < nums.length; i++){
    //     for (let j = 1; j < nums.length + 1; i++){
    //         if (nums[i] + nums[j] == target){
    //             return [i,j]
    //         }
    //     }
    // }


};

/// twoSum([2,7,11,15], 9) [0,1]
/// twoSum([3,2,4], 6) [1,2]