/*search or match function,  algoritm searches starting from last letter of the search word
the point of starting from the end was like to go forward by length of the search word,
after finding the last letter of search word, it will check next letter for match, 
if during that a non match occures, the new index of search start will be "non match index" + "the length of the search word"

*/
function word_search(sentence, word) {
    let lange = word.length;
    let match = 0;
    let indexof_Match;
    let newStart = 0;
    for (let i = lange-1; i < sentence.length;) {
        if (word[lange-1] === sentence[i]) {
            for ( let j = 1; j < lange; j++) {
                if (word[lange-1-j] === sentence [i-j]) {
                    match++;
                    indexof_Match = i-lange+1;
                } else {newStart = i-j;
                        i = newStart + lange; 
                        break;}
            }
        } else {i++;}


        if (match === lange-1) {
            console.log (`there is a match on index ${indexof_Match}`);
        }
    }


} 

let search = word_search ('54gsfddk542111aLba254212454al12544545kasfassdfadfkasalgaf','lgaf');