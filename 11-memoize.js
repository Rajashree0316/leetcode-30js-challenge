function memoize(fn) {
    let result = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (result.hasOwnProperty(key)) {
            return result[key];
        }
        const newResult = fn.apply(this, args);
        result[key] = newResult;
        return newResult
    }
}

/** 
 When the memoized function is called with a new input,
 it first checks if the input exists in the cache. If it does, 
 it returns the cached value. If it doesn't, it computes the result, 
 stores it in the cache, and returns it.
 */