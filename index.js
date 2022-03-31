// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(function(driver){
        return driver.toUpperCase() === string.toUpperCase();
    });

    // let result = [];
    // for(const i of drivers){
    //     if(string.toUpperCase() === i.toUpperCase()){
    //         result.push(i);
    //     };
    // };
    // return result;
};

function fuzzyMatch(drivers1, string1){
    return drivers1.filter(function(driver1){
        return driver1.slice(0, string1.length).toUpperCase() === string1.toUpperCase();
    });

    //     let result1 = [];
    //     for(const i of drivers1){
    //         if(i.slice(0, string1.length) === string1){
    //             result1.push(i);
    //         };
    //     };
    //     return result1;
};

function matchName(drivers2, string2){
    return drivers2.filter(function(driver2){
        return driver2.name === string2;
    });
};