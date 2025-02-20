var reduce = function(nums, fn, init) {
    let acc = init;// Start with the initial value
    for(let i=0; i<nums.length; i++) { // Apply the reducer function sequentially
        acc = fn(acc, nums[i]);
    }
    return acc; // Return the final accumulated value
};