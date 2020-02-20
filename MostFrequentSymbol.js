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

function transfer_all_symbols_to_check(symbolRow) {
    let ArrayElementinArray = [];
    for (let i = 0; i < symbolRow.length; i++) {
        ArrayElementinArray[i] = find_the_symbol(symbolRow[i], symbolRow);
    }
    
  return ArrayElementinArray;  
}


let symforcheck = ['s','s','a','s','s','s','a','d','d','d'];

let tempArray = transfer_all_symbols_to_check(symforcheck);
//now there is a need to eliminate same elements from our two dimensional array 

let finalArray = [];
let max = 0;
let k = 0;
let maxarray = [];
for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length; j++){
        if (max < tempArray [i][1]) {
            maxarray[k] = tempArray[i][1];
        }

    }
}

console.log(maxarray);

console.log(tempArray);
