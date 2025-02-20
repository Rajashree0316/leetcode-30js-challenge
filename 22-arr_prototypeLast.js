/**
TheArray.prototype.last()method is designed to return the last element of an array, or -1 if the array is empty.  */

Array.prototype.last = function() {
    if (!this.length) {
        return -1;
    }
    return this[this.length-1];
};
