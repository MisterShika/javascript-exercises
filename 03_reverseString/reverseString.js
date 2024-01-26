const reverseString = function(theMessage) {
    let newString = "";
    for(i=theMessage.length; i>0; i--){
        newString += theMessage[i-1];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
