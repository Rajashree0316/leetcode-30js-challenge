var isEmpty = function(obj) {
    if (JSON.stringify(obj).length <= 2) return true
    else return false
};

/* When you stringify an object usingJSON.stringify(), 
the resulting JSON string will represent the object's key-value pairs as a string. */