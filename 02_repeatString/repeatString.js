const repeatString = function(givenString, noTimes) {
    let theString = "";
    let theMessage = givenString.toString();
    if(noTimes < 0){
        return "ERROR";
    }
    for(let i = 0; i < noTimes; i++){
        theString += theMessage;
    }
    return theString;
};

// Do not edit below this line
module.exports = repeatString;
