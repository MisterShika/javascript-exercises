const palindromes = function (theInput) {
    //trims punctuation and spaces
    //starts from left and right
    //if not same return false
    //if left index is greater than right index break
    let theString = theInput.replace(/[^\w]|_/g, "");
    theString = theString.toLowerCase();
    //console.log(theString);
    let backCount = theString.length - 1;
    for(let i = 0; i < backCount; i++){
        // console.log(`i is ${i} and backCount is ${backCount}`);
        // console.log(`${theString[i]} and ${theString[backCount]}`);
        if(theString[i] !== theString[backCount]){
            return false;
        }
        backCount--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
