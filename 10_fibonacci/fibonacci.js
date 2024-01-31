const fibonacci = function(numberInput) {
    const theLimit = parseInt(numberInput);
    let leftNum = 0;
    let totalNum = 1;
    if(theLimit < 0){
        return "OOPS";
    }
    if(theLimit === 0){
        return leftNum;
    }
    for(let i = 1; i < theLimit; i++){
        // console.log(`START LOOP Left num: ${leftNum}`);
        // console.log(`START LOOP Total: ${totalNum}`);
        // console.log(`TOTAL MATH ${leftNum} + ${totalNum} = ${leftNum + totalNum}`);
        totalNum = leftNum + totalNum;
        //console.log(`TOATAL MATH ${totalNum} - ${leftNum}  = ${totalNum - leftNum}`);
        leftNum = totalNum - leftNum;
    }
    return totalNum;
};

// Do not edit below this line
module.exports = fibonacci;
