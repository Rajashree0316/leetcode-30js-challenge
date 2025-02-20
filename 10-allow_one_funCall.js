var once = function(fn) {
    let called = false;
    return function(...args){
        if(!called){
            called= true;
            return fn(...args)
        }
        else{
            return undefined;
        }
    }
};

/* 
Idea: to use a closure to store the state of the returned function. 
By doing this, we can keep track of whether the function has been
called before and behave accordingly. */