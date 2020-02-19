//Perfect number finder

//divisions of the number
function divides_to (check_Num) {
    arrayof_Divisions = [];
    for (let i = 1, j = 0; i <= check_Num/2 ; i++) {
        if ( check_Num % i === 0) {
            arrayof_Divisions.push(i);
            j++;
        }
    }
    return arrayof_Divisions;
}
//finding perfect numbers
function perfects_inthe_range (lower,upper) {
   for (i = lower; i <= upper; i++) {
       let sum = 0;
       let devisions = divides_to(i);
       for ( let j = 0; j < devisions.length; j++) {
           sum += devisions[j];
           if (j === devisions.length-1 && sum === i) {
               console.log (`${i} is perfect`);
           }
       }
   }
}

let something = perfects_inthe_range(0,10000);