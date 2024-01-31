const getTheTitles = function(theArray) {
    let bookArray = [];
    theArray.forEach(element => {
        bookArray.push(element.title);
        //console.log(element.title);
    });
    return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
