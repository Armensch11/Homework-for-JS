/*search or match function,  algoritm searches starting from last letter of the search word
the point of starting from the end was like to go forward by length of the search word, but 
it did not work as intended*/
function word_search(sentence, word) {
    let lange = word.length;
    let match = 0;
    let indexof_Match;
higherloop: for (let i = lange-1; i < sentence.length; i ++) {
        if (word[lange-1] === sentence[i]) {
            for ( let j = 1; j < lange; j++) {
                if (word[lange-1-j] === sentence [i-j]) {
                    match++;
                    indexof_Match = i;
                } else {break;}
            }
        }
        if (match === lange-1) {
            console.log (`there is a match on index ${indexof_Match}`);
        }
    }


} 

let search = word_search ('54gsfd5g4fsd5g45sdf4g5fd4g5sd1g2sdf1g54sdf5g45sdf4g2dsfgdfgj','2dsfg');