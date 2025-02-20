/**
 Recursive & Iterative Approach 
 */
var flat = function (arr, n) {
    let res = [];
    function flattern(nums, level) {
        for (const num of nums) {
            if (Array.isArray(num) && level>0) {
                flattern(num, level-1);
            } else {
                res.push(num);
            }
        }
    }
    flattern(arr, n);
    return res;
};