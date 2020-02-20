// finding the most frequent symbol in the array



// firstly function for finding the symbols frequency
function find_the_symbol(symbol,symbolRow) {
    let counter = 0;
    let newArray = [];
    for (let i = 0; i < symbolRow.length; i++) {
        if (symbol === symbolRow[i]) {
            counter++;
        }
    }
    newArray[0] = symbol;
    newArray [1] = counter;
    return newArray;

}







function mostfrequent_symbol(anySymbolRowOriginal) {

}
let someRow = ['a', 'as','a',
'ds',,'a','a','sa','s','as','a','s','d','sd','ds','sd','d','we','e','w','d'];
let frequency_checker = find_the_symbol('a',someRow);
console.log(frequency_checker);