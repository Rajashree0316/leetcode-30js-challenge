var filter = function(arr, fn) {
    const filteredArr = []; // empty array
    for( let i=0; i< arr.length; i++){
       if(fn (arr[i],i)){
        filteredArr.push(arr[i]);
       }
    }
    return filteredArr ;
};

/* Using a for loop and Array.push */