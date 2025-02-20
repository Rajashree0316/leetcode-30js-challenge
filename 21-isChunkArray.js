/**
JavaScript array methods: The solution utilizes various array methods such as slice, push, and Array.from().
 */
var chunk = function(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, function(_, index) {
      return arr.slice(index * size, index * size + size);
    });
  };
