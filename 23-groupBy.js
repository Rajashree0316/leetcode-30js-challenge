/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const response = {};
    for(const item of this) {
        const key = fn(item);
        if (!response[key]) {
            response[key] = [item];
        } else {
            response[key].push(item);
        }
    }
    return response;
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */