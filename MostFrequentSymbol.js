// finding the most frequent symbol in the array
function mostfrequent_symbol(anySymbolRowOriginal) {
    let anySymbolRow = [];
    let freq_counter = [];
    for ( let i = 0; i < anySymbolRowOriginal.length; i++){
        anySymbolRow[i] = anySymbolRowOriginal[i];
    }
    
    
    let k; 
    for (let i = 0; i < anySymbolRow.length; i++) { 
        k = 1;
        for (let j = i+1; j < anySymbolRow.length; j++) {
            if (anySymbolRow[i] === anySymbolRow[j] && anySymbolRow[i] !== undefined) {
                k = k+1;
                delete anySymbolRow[j];
            }
            freq_counter [i] = k;

        }

    }
    let max = 0;
    for (let i = 0; i < freq_counter.length; i++) {
        if ( freq_counter[i] > max) {
            max = freq_counter[i];
            

        }
    }console.log(max);
    
    for (let i = 0; i < freq_counter.length; i++) {
        console.log (`${anySymbolRowOriginal[i]} is repeated ${freq_counter[i]} times in your array`);
    }
}
let someRow = ['a', 'as','a',
'ds',,'a','a','sa','s','as','a','s','d','sd','ds','sd','d','we','e','w','d'];
let frequency_checker = mostfrequent_symbol(someRow);
