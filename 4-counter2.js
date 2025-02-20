var createCounter = function(init) {
    var a = init;
    function increment(){
        return ++a;

    }
     function decrement(){
        return --a;
    }
     function reset(){
        a= init;
        return a;
    }
    return{
        increment,
        decrement,
        reset
    }
};

