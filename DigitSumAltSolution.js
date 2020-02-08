let n = +prompt('enter number');
let grade = 1;
for (let i = 10; i <= n; i*=10) {
        if ( n/i < 10 ) {
            grade = i;
        } console.log (grade);
}
let remains = n;
let sum = 0;
for (let j = grade; j > 1; j = j/10) {    
    sum += Math.floor (remains/j);
    remains = remains - (Math.floor(remains/j)) * j;
    /*when reaching the last digit, loop exits without adding that last one,
     as j gets smaller than 1, so had to add another "if" check */ 
    if ( remains < 10 ) {
        sum += remains;
    }
}
console.log(sum);
