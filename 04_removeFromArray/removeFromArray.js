const removeFromArray = function() {
    //First input is always the array;
    let args = arguments;
    let inputArray = args[0];

    //For loop for each additional argument
    for(let i = 1; i<args.length; i++){
        //Parses array and removes given argument
        inputArray.forEach((element, index) => {
            if(element === args[i]){
                inputArray.splice(index, 1);
            }
        });
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
