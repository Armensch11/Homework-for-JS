let anyString = prompt (`enter something`);
let letterBox = [], numberBox = [];
if (anyString) {
    for (i = 0; i < anyString.length; i++) {
        if (anyString[i]==+anyString[i]) {
             numberBox.push (+anyString[i]);   
        } else letterBox.push (anyString[i]);
    }
}
console.log (letterBox, numberBox);
