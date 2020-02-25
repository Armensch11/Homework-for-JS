// Homework 4 Ex 1 (this was done in my earlier homework)
function fibonachi_sequence(n_th) {
    if (n_th > 0) {
        let fib_number = [];
        fib_number[0] = 0;
        fib_number[1] = 1;
        for (let i = 2;i < n_th ;i++ ) {
            fib_number [i] = fib_number [i-2] + fib_number[i-1];
        }
        return fib_number;
    } else {return 0;}
}

let fib_n = fibonachi_sequence(10);
console.log(fib_n);



// Homework 4 Ex 2
function noZeros(nummer){
    let noZero = true;
    for (let i = 0; i < String(nummer).length; i++) {
        if (String(nummer)[i] === '0') {
            noZero = false;
            return noZero;
        }
    } 
    return noZero;
}

function prod_div_sum(nummer){
    if (noZeros(nummer)) {
        let sum = 0;
        let prod = 1;
        let myStr = ''+nummer;
        for (let i=0; i < myStr.length; i++) {
            prod *= (+myStr[i]);
            sum += (+myStr[i]); 
        }
        let quoti = prod/sum;
        let remainder = prod%sum;
        if (remainder === 0) {
            return `Quotient is ${quoti}.`;
        } else { return `Remainder is ${remainder}.`;}
    } else {return `Cannot Calculate.`}
}

let check = prod_div_sum ();
console.log(check);



// Homework 4 Ex 3

function maxmin_differ_exist(nummer_row) {
    if(Array.isArray(nummer_row)) {
            let max = -Infinity;
            let min = +Infinity;
            for (let i = 0; i < nummer_row.length; i++) {
                if (max < nummer_row[i]) {
                    max = nummer_row[i];
                }
                if (min > nummer_row[i]) {
                    min = nummer_row[i];
                }
            }
            let differ = max-min;
            let exist = false;
        // I could have used nummer_row.indexOf(differ) !== -1, but prefer to write my search:)
            for (let i = 0; i < nummer_row.length; i++) {
                if (differ === nummer_row[i]) {
                    exist = true;
                    return exist;
                }
            } 
            return exist;  
    } return undefined;   
}    

let checkarray = true;
if (maxmin_differ_exist(checkarray)!==undefined) {
        if (maxmin_differ_exist(checkarray))  {console.log("true");
        } else {console.log("false");}
} else {console.log(`your entry is not an Array`);}



// Homework 4 Ex 4

function sort_descending(Row){
    let value_Holder;
    for (let i = 0; i < Row.length; i++) {
        for (let j = 0; j < Row.length; j++) {
            if (Row[i] > Row[j]) {
                value_Holder = Row[i];
                Row[i] = Row[j];
                Row [j] = value_Holder;
            }
        }
    }
return Row;
}

function remove_dublicates(Row) {
    let noDublic = [];
    for (let i = 0; i < Row.length; i++) {
        if(Row.indexOf(Row[i]) === i) {
            noDublic.push(Row[i]);
        }
    }
return noDublic;
}

let yourArray = [2,5,6,4,5,8,8,8,10,10,9,9,9,12,12,4,7,2,5,4];
let second_max = remove_dublicates(sort_descending(yourArray));
console.log(second_max[1]);




// Homework 4 Ex 5
function padd_Repet(the_row, pad, repet) {
    let pad_front = [];
    let pad_rear = [];
    if (pad <= the_row.length) {
        for (let i = 0; i < pad; i++) {
              pad_front.push(the_row[i]);
              pad_rear.unshift(the_row[the_row.length-1-i]);  
        }
    
    let finalRow = [];
    for (let i = 0; i < repet; i++) {
        for (let j = 0; j < pad; j++ ) {
            finalRow.push(pad_front[j]);
        }
    }
    for (let i = 0; i < the_row.length; i++ ){
            finalRow.push(the_row[i]);
        }
    for (let i = 0; i < repet; i++) {
        for (let j = 0; j < pad; j++ ) {
            finalRow.push(pad_rear[j]);
            }
        }
    return finalRow;
    } return 'enter valid pad Amount';
}
    

let check = padd_Repet ([1,1,0,0,1,1],7,2);
console.log ( check );

// // Homework 4 Ex 6 was done at the lesson 

// Homework 4 Ex 7
// I dont like those "If"s , but could not solve better

function pattern_drawer(nummer) {
    if (nummer > 2){
        let row ='';
        for (let i = 0; i< nummer ; i++) {
            row ='';
            for (let j = 0; j < nummer ; j++) {
                if(i > 0 && i < nummer-1){ 
                    if (j < 1 || j > nummer-2 ) {
                        row+=' * ';
                    } else { row +='   ';}
                } else {row += ' * ';}
            }
        row+='\n';
        console.log(row);
        }
    } else {return 'enter number over 2';}
}


let a = pattern_drawer(12);
console.log(a);

// Homework 4 Ex 8


function half_romb(limit) {
    let row = '';
    for (let i = -limit; i <= limit; i++ ){
        row ='';
        for (let j = 1; j <= limit - Math.abs(i); j++) {
             row +=j;   
        }
        row += '\n';
        console.log(row);
    }
}
half_romb(10);



//full romb
// argumenti chapov chi stacvum sarqel, -num +num aranqi 0-n misht gumarvelu patcharov
function romb(nummer){
    if (nummer >= 2) {   
       let row;
       for (let i = -(nummer-1); i <= nummer-1; i++) {
           row = "";
           for (let j = 0; j <= (2*(nummer-1)-Math.abs(i)); j++) {

                   if (j >= Math.abs(i)) {row +=" * ";
                   } else {row+="   ";}
               
           }
           row+='\n';
           console.log (row);
       }
   }else return console.log('can\'t draw rombus by that side');  
}
romb(3)

