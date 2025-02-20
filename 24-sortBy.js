/**
 arr.sort((a, b) => [expression])
(a, b) => fn(a) - fn(b)

 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a) - fn(b))
};