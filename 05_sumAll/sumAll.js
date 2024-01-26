const sumAll = function(input1, input2) {
    if(Number.isInteger(input1) == false  || Number.isInteger(input2) == false){
        return "ERROR";
    }
    if(input1 < 0 || input2 < 0){
        return "ERROR";
    }

    let leftValue = input1;
    let rightValue = input2;
    let theSum = 0;

    if(leftValue > rightValue){
        let placeHolder = leftValue;
        leftValue = rightValue;
        rightValue = placeHolder;
    }
   
    for(i = rightValue; i >= leftValue; i--){
        theSum += i
    }

    return theSum;
};

// Do not edit below this line
module.exports = sumAll;
