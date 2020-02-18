/*search or match function,  algoritm searches starting from last letter of the search word
the point of starting from the end was like to go forward by length of the search word,
after finding the last letter of search word, it will check next letter for match, 
if during that a non match occures, the new index of search start will be "non match index" + "the length of the search word"

*/
function word_search(sentence,word) {
    let lange = word.length;
    let match = 0;
    let indexof_Match;
    let newStart = 0;
    higherloop:for (let i = lange-1; i < sentence.length; i++) {
        if (word[lange-1] === sentence[i]) {
            for ( let j = 1; j < lange; j++) {
                if (word[lange-1-j] === sentence [i-j]) {
                    match++;
                    indexof_Match = i-lange+1;
                    if ((match+1) === lange) {
                        console.log (`there is a match on index ${indexof_Match}`);
                        break higherloop;
                } 
            }else {newStart = i-j;
                match = 0;
                //i = newStart + lange; 
                break;}
        } 
    }
        
        }
    
} 

let search = word_search ('55545f4g5sdf4g54fdg54sdf5g4s5df4g5sdf4gkasfassdfadfklgaf212121212121212','kasf');