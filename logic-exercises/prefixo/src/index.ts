const input = ["flower", "flow", "flight"];
const input2 = ["dog","racecar","car"];
const input3 = ["coracao","cor","corona","coreia"];

const findingCommonPrefix = (input: string[]): any =>{
    
    let commonPrefix = "";
    let shortestString = input[0];

    for (let i = 0; i <= input.length - 1; i++){
        if(shortestString.length > input[i].length){
            shortestString = input[i];
        };
    };

    for (let i = 0; i <= shortestString.length - 1; i++){
        for (let j = 0; j <= input.length - 1; j++){
            if ( shortestString[i] !== input[j][i]){
                return commonPrefix
            };
        };

        if(shortestString[i]){
            commonPrefix += shortestString[i];
        };
    }; 
    return commonPrefix;   
    
};

console.log(findingCommonPrefix(input3));
