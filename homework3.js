

 function entry_to_array_for_words() {
    let entry_toArray = [];
    for (let i = 0; ; ) {
        let entry = prompt(`array element ${i+1}`);
        if (entry !== null) { 
        entry_toArray.push(entry);
        i++;
        } else {break;}
    }
    return entry_toArray;
 }                               
                                
                                
                                
                                
                                
                                // Exercise 1

let anySentence = prompt ('enter the sentence',);
let myStr = anySentence;
let arrayFrom_myStr = [];
let switch_Words = entry_to_array_for_words();
let start_Length = switch_Words.length;
for (let i = 0; i < myStr.length; i++) {
    arrayFrom_myStr.push(myStr[i]);
}

/* now a loops: for finding the element containing "_",
*/
let j = 0;
for (let i = 0, j = 0; i <arrayFrom_myStr.length; i++) {
    if (arrayFrom_myStr[i] === '_') {
        arrayFrom_myStr[i] = switch_Words [j];
        j++;
        if (j == start_Length) {break;}
        }
    }

if (j == start_Length) {
    console.log("you are out of exchange Words, sorry");
    } else console.log (arrayFrom_myStr.join (''));





                     // Exercise 2
/*  
*/



function entry_to_array_for_numbers() {
    let entry_toArray = [];
    for (let i = 0; ; ) {
        let entry = prompt(`array element ${i+1}`);
        if (entry !== null) { 
            if (isNaN(entry)) {
                entry_toArray.push (entry);
                i++;
            } else {
                entry_toArray.push ((+entry));
                i++;
            }
        } else {break;}
    }
    return entry_toArray;
 }     
 
 
 //function sort_ascending() { would be nice to know how transfer an array as an argument and return a sorted array
 //}
                                
                                
let original_Array = entry_to_array_for_numbers();
let length = original_Array.length;
let odds_Array = [];
let evens_Array = [];

for (let i = 0; i < length; i++) {
    if (original_Array[i] === + original_Array[i]) {
        if (+original_Array[i] % 2 === 0) {
            evens_Array.push(+original_Array[i]);
        } else {odds_Array.push(+original_Array[i]);}

    }
}                                
console.log(original_Array);
console.log(evens_Array);
console.log(odds_Array); 
console.log (odds_Array.concat(evens_Array));





                         // Exercise 3
/* this one is too easy
just added two variables to my entry function
*/



function entry_to_array_with_integrated_counter() {
    let entry_toArray = [];
    let countString = 0, countNums = 0;
    for (let i = 0; ; ) {
        let entry = prompt(`array element ${i+1}`);
        if (entry !== null) { 
            if (isNaN(entry)) {
                entry_toArray.push (entry);
                i++;
                countString += 1;
            } else {
                entry_toArray.push ((+entry));
                i++;
                countNums += 1;
            }
        } else {break;}
    }
    console.log (`there were ${countNums} numbers and ${countString} strings in the array you entered `)
    return entry_toArray;
 }     
 let something = entry_to_array_with_integrated_counter();
 console.log (something);




                        // Exercise 4

 function entry_to_array_forexercise4() {
    let entry_toArray = [];
    for (let i = 0; ; ) {
        let entry = prompt(`array element ${i+1}`);
        if (entry !== null) { 
                entry_toArray.push (entry);
                i++;
            } else {break;}
    }
    return entry_toArray;
 }     
// could skip this function actually, but may be neede for some manipulations on a single element of an array in the future 
 function letter_counter (word) {
     let number_of_Letters = 0;
     number_of_Letters = word.length;
     return number_of_Letters;
 }

let some_Words = entry_to_array_forexercise4();
let length = some_Words.length
let count_Holder = [];
for (let i = 0; i < length; i++) {
      count_Holder[i] = letter_counter(some_Words[i]);
    }
let max = -Infinity;
let min = Infinity;
for (let i = 0; i < length; i++) {
    for ( let j = 0; j < length; j++) {
        if (count_Holder[j] > max ) {
            max = count_Holder[j];
        }
        if (count_Holder[j] < min ) {
            min = count_Holder [j];
        }
        if (count_Holder[j] < 0) {
            min = 0;
        }
    }
}
console.log(count_Holder);
console.log(`the longest has ${max} letters, the shortest has ${min} letters, \n the sum is ${max+min}`);


 // Exercise 5
 // the same function used exercise 3 

 function entry_to_array() {
    let entry_toArray = [];
      for (let i = 0; ; i++ ) {
        let entry = prompt(`array element ${i+1}`);
        if (entry !== null) { 
            if (isNaN(entry)) {
                entry_toArray.push (entry);
               
            } else {
                entry_toArray.push ((+entry));
                
            }
        } else {break;}
    }
    //console.log (`there were ${countNums} numbers and ${countString} strings in the array you entered `)
    return entry_toArray;
 }     
let NumberRow = entry_to_array();
let length = NumberRow.length;
let sum_of_Elements = 0;
for (let i = 0; i < length; i++ ) {
    sum_of_Elements += NumberRow[i];
}
console.log(NumberRow)
console.log(sum_of_Elements);






                    // Exercise 6
 // the same function used exercise 3 

 function entry_to_array() {
    let entry_toArray = [];
      for (let i = 0; ; i++ ) {
        let entry = prompt(`array element ${i+1}`);
        if (entry !== null) { 
            if (isNaN(entry)) {
                entry_toArray.push (entry);
               
            } else {
                entry_toArray.push ((+entry));
                
            }
        } else {break;}
    }
    //console.log (`there were ${countNums} numbers and ${countString} strings in the array you entered `)
    return entry_toArray;
 }     
let NumberRow = entry_to_array();
let length = NumberRow.length;
let multed_Array = [];
for (let i = 0, j = 0; i < length; i++ ) {
    multed_Array[j] = NumberRow[i] * NumberRow[i+1];
    j++;
    if (j === length-1) {break;}
   
}
console.log(NumberRow);
console.log(multed_Array);



// not  related
// fibonacci sequence counter
// given first two members of fibonacci number , count the rest till the entered number 

function fibonachi_till_the_number (upper_Number) {
    let fib_number = [];
    fib_number[0] = 1;
    fib_number[1] = 1;
    for (let i = 2; ; ) {
        fib_number [i] = fib_number [i-2] + fib_number[i-1];
        if (fib_number [i] <= upper_Number) {
            i++;
        } else {fib_number.pop();
            break;}
                   
    }
    return fib_number;
}

let fib_sequence = fibonachi_till_the_number (+prompt());
console.log(fib_sequence);