                                                                /* Exercise 1 
                                                        solution for any number of entries */

 let anyNumbers = [];
 let entryValid;  
 /* I want the prompt pop up and push the entry to array,
  until a cancel is clicked*/  
 for (let i = 0; ; i++) {
     entryValid = prompt (`${i+1}th entry`);
     if (entryValid !== null) {
     anyNumbers[i] = +entryValid;
    } else break;
 } //console.log(anyNumbers);
 let signMeter = 0;
 let zeroValue = false;
 /*checking each element of the array for beeing a number,
 and counting the number of negative elements*/
 for (i = 0; i < anyNumbers.length; i++) {
     if (anyNumbers[i]===0) {
         zeroValue = true; console.log(' "unsigned" '); break;}
     if (anyNumbers[i]===+anyNumbers[i] && anyNumbers[i] < 0 ) {
         signMeter += 1;
        }
     }
     if ((signMeter === 0 || signMeter%2===0) && zeroValue != true) 
         console.log(' "+" ');
     else {console.log(' "-" ');}
     //console.log(anyNumbers);


                                                        // Exercise 2

let digit = prompt(' a single digit number, please ');
if (+digit >= 10 || digit == null){
    alert ('your entry is invalid, enter single digit number');
    digit = prompt ('a digit, please');
}
let number = prompt(' a number please ');
let numSplit = [];
let digitYes = false;
/* could do the check using String method only, but I guess turning String to array and
 then conducting checks is a better option*/
for ( let i = 0; i < number.length; i++) {
    if (number[i] == +number[i]) {
        numSplit[i] = +number[i];
        } 
    if (numSplit[i] === +digit) { digitYes = true; break;
        } 
    
}
if (digitYes) {
    console.log(" 'Yes' ");
} else console.log(" 'No' ");
//console.log(`searching for number ${digit}`); 
//console.log(numSplit);


                                                   /* Exercise 3
                                            for any entry where digits are contained */ 
                                                   


let toTransform = prompt('enter anything to switch it\'s first and last numbers');
if (toTransform == null) {
    alert('don\'t waste my recources, please enter something')
    toTransform = prompt ('press keypad, please');
}
let entryToArray = [];
//will get all digit entries from toTransform string to my array, and array will have no undefined element
let i = 0;
for (let j = 0; j < toTransform.length; j++) { 
        if (toTransform[j] == +toTransform[j]) {
             entryToArray[i] = +toTransform[j];
             i++;
        }
    }
    //now just repeat the lesson example a=a+b, b=a-b, a=a-b 
entryToArray[ entryToArray.length - 1 ] = entryToArray [entryToArray.length-1] + entryToArray [0];
entryToArray[0] = entryToArray[entryToArray.length-1] - entryToArray[0];
entryToArray[entryToArray.length - 1] = entryToArray[entryToArray.length-1] - entryToArray[0];
console.log(entryToArray);






                                                // Exercise 4

//using code from exercise 1
let anyNumbers = [];
let entryValid;   
for (let i = 0; ; i++) {
entryValid = prompt (`${i+1}th entry`);
      if (entryValid !== null) {
          anyNumbers[i] = +entryValid;
        } else break;
    }
//console.log(`unordered array ${anyNumbers}`);
let valueHold;
//now I start from the first element and compare it will all others, if a bigger number is found, it switches values
for (let i=0; i < anyNumbers.length; i++) {
    for (let j=0; j < anyNumbers.length ; j++) {
        if (anyNumbers[i] < anyNumbers[j]) {
            valueHold = anyNumbers [j];
            anyNumbers [j] = anyNumbers [i];
            anyNumbers [i] = valueHold;
        } 
    }
} 
//console.log (`ascending order ${anyNumbers}`);
//now I have to convert Array to String
let printView = '';
for (let i = 0; i < anyNumbers.length; i++) {
    if (i == 0) {
        printView += `${anyNumbers[i]}`;
    } else {
        printView += `, ${anyNumbers[i]}`;
        }
}
console.log(printView);



                                                    //Exercise 5 
                                                    
                                                    
alert ('let\'s refresh school knowledge: ax2 + bx + c = 0');
let a = +prompt('enter the "a"');
let b,c;
if (a === 0 ) {console.log(' "Enter valid constants" ');
    } else {
        b = +prompt('enter the "b"');
        c = +prompt('enter the "c"');
    
        let ereviDiskrim = Math.sqrt(b**2 - 4*a*c);
        let solution1, solution2;
            if (ereviDiskrim < 0) { console.log(' "Solution does not exist" ')
                } else {
                    solution1 = (-b + ereviDiskrim)/(2*a);
                    solution2 = (-b - ereviDiskrim)/(2*a); 
                }
            if (ereviDiskrim === 0 && !isNaN(solution1) && !isNaN(solution2)) {
                    console.log(` "Solution is ${solution1}" `);
                } else {
                    console.log(` "Solutions are ${solution1} and ${solution2}" `);
                    }
            }

                                        //Exercise 6

var n = +prompt();

var i = 0;
var j = 0;
// for n<10 Math.floor is falsy, and !Math.floor is true
if (n%2 === 0 && !Math.floor(n/10)) {
     
        i +=1;
    }

if (n%3 === 0 && n%10 === 1) {
   
        j+=1;
    }
console.log(` for this n = ${n}: i is ${i} and j is ${j} `);



                                        // Exercise 7

let height, base, side1, side2, areaTri, areaRect;
//now will make a loop of prompts and user can not escape:)
if (confirm ('you want me to count area of a triangle, right?')) {
     height = +prompt ('enter triangle height');
        while (height <= 0 || height == null) { 
            height = +prompt ('please enter only positive');
        }
     base = prompt ('enter triangle base');
        while (base <= 0 || base == null) {
            base = +prompt ('please enter only positive');
        }
        areaTri = base*height/2;
        console.log (`Area of triangle is ${areaTri}`);
} else {confirm ('I got you now - you want me to count area of a rectangle, right?');
    side1 = +prompt ('enter rectangle length');
        while (side1 <= 0 || side1 == null) { 
            side1 = +prompt ('please enter only positive');
        }               
    side2 = prompt ('enter rectangle width');
        while (side2 <= 0 || side2 == null) {
            side2 = +prompt ('please enter only positive');
        }
    areaRect = side1 * side2;
    console.log (`Area of rectangle is ${areaRect}`);  
        
    }




                                            /* Exercise 8
                                            solution with making ascending array
                                            */




let anyNumber = +prompt('a number please');
while (anyNumber == null || anyNumber !== +anyNumber) {
    anyNumber = +prompt(`enter only number`);
}
anyNumber = String(anyNumber);
let numArray = [];
let valueHold = 0;
let result = 0;
let min,max;
console.log(anyNumber);
for (let i = 0; i < anyNumber.length; i++) {
    numArray [i] = +anyNumber [i];
}
//ordering the array
for (let i = 0; i < numArray.length; i++) {
    for (let j=0; j < numArray.length; j++) {
        if (numArray [j] > numArray [i]) {
            valueHold = numArray[j];
            numArray[j] = numArray [i];
            numArray [i] = valueHold;
        }
      
    }
}
console.log(numArray);

min = numArray[0];
max = numArray[numArray.length-1];
result = max - min;
console.log(`difference is ${result}`);


                                                        /* Exercise 8
                                            solution by finding min and max values inside the array
                                                        */
let anyNumber = +prompt('a number please');
while (anyNumber == null || anyNumber !== +anyNumber) {
    anyNumber = +prompt(`enter only number`);
}
anyNumber = String(anyNumber);
let numArray = [];
let valueHold = 0;
let result = 0;
let min=9,
    max=0;
console.log(anyNumber);
for (let i = 0; i < anyNumber.length; i++) {
    numArray [i] = +anyNumber [i];
}
//ordering the array
for (let i = 0; i < numArray.length; i++) {
            if ( min > numArray [i] ) {
                min = numArray [i];
            }
            if (max < numArray [i] ) {
                max = numArray [i];
            }
      
      }

console.log(`min is ${min}, max is ${max}, result is ${max-min}`);





//additional solution for Exercise 3 without using any method


let aNumber = + prompt();
let lastDigit = aNumber%10;
let newString = '';
let digitCounter = 0
for (let newNum = aNumber; newNum > 0; newNum = ((newNum-lastDigit)/10)) {
    lastDigit = newNum%10;
    digitCounter++; 
    newString += +lastDigit;
}
//console.log(newString);
//getting the first and last digits of the entered number
let old_FirstDigit = +newString%10;
let old_LastDigit = aNumber%10;
//making new number by removing first and last digits of the entered number
let subNumber = ((aNumber - old_LastDigit) - old_FirstDigit * (10**(digitCounter - 1)))/10;
console.log(aNumber);
console.log(subNumber);
let reversedNumber = +(''+old_LastDigit + subNumber + old_FirstDigit);
console.log(reversedNumber); 








/* as I did not know of the functions when the homework was done,
present some practice with functions. 
May skip this if considered irrelevant */

//function to check for type of entered ONE number
function EntryCheckForNumbers() {
    let userEntry ;      
    do {userEntry = +prompt('attention please - only Numbers');}    
    while (userEntry !== +userEntry || userEntry === 0); 
    console.log ('Thank you very much');
    return userEntry;
}

//let myNumber = EntryCheckForNumbers();
//console.log (myNumber); 
/////////////////////////////////////////////////

// function to check for the type of entered data until an empty string entry or  a cancel is pressed

function EntryCheckForManyNumbers() {
    let userEntry = [];
    let i = 0;
    let enteredValue;
    for (;;i++) {
        enteredValue = prompt('attention please - only Numbers');
        if ( enteredValue != null && !isNaN(+enteredValue) && enteredValue !== '') {
            userEntry [i] = +enteredValue;
            } else break;
    
    }      
       //console.log ('Thank you very much');
    return userEntry;
}   

//let EntryArr = EntryCheckForManyNumbers();
//console.log (EntryArr);

//function finds min max of the array elements, but returns only max

function Max_Finder() {
        let numbers = EntryCheckForManyNumbers();
        let max = numbers [0]; 
        let min = numbers [numbers.length-1] ;
        for (let i = 0; i < numbers.length; i++){
            if (max < numbers[i]) {
                max = numbers[i];
            }
             if ( min > numbers[i]) {
                min = numbers[i];
            }
        } 
        //console.log(numbers);
          //  console.log(min, max);
        return max;
        
        }

//this one returns min number 

function Min_Finder() {
        let numbers = EntryCheckForManyNumbers();
        let max = numbers [0]; 
        let min = numbers [numbers.length-1] ;
        for (let i = 0; i < numbers.length; i++){
            if (max < numbers[i]) {
                max = numbers[i];
            }
             if ( min > numbers[i]) {
                min = numbers[i];
            }
        } 
        //console.log(numbers);
        //console.log(min, max);
        return min;
        }

  
//let find_Max = Max_Finder();
//console.log(find_Max);
        

//let find_Min = Min_Finder();
//console.log(find_Min);

//evrika - both min and max returned as an array :)
function ReturnArrayOf_MaxMin() {
    let numbers = EntryCheckForManyNumbers();
    let max = numbers [0]; 
    let min = numbers [numbers.length-1] ;
    for (let i = 0; i < numbers.length; i++){
        if (max < numbers[i]) {
            max = numbers[i];
        }
         if ( min > numbers[i]) {
            min = numbers[i];
        }
    } 
    let arrayFor_2_values = [];
    arrayFor_2_values.push(max);
    arrayFor_2_values.push(min);
    //console.log(numbers);
    //console.log(min, max);
    return arrayFor_2_values;
    }

let max_min_array = ReturnArrayOf_MaxMin();
console.log(max_min_array);


/* 
now lets make a function that will get an array from a string,
which contains numbers separated by comas , solved for negative elements also
*/
function StringEntrytoArray() {  let stringOf_Numbers = prompt('enter anything containing numbers');
let get_Numbers = [];
let number_Holder = '';
let i = 0
console.log(stringOf_Numbers.length);
    for (  j = 0; i < stringOf_Numbers.length; i++) {
       
        if (!isNaN(stringOf_Numbers[i]) && (stringOf_Numbers[i] !==' ' || stringOf_Numbers[i] !== " ")) {
            if (stringOf_Numbers[i-1]!=="-") {
                number_Holder += +stringOf_Numbers[i];
            } else {
                number_Holder +='-'+stringOf_Numbers[i];
            }

        } else if (!(+stringOf_Numbers[i]) && +stringOf_Numbers[i-1]) {
            get_Numbers[j] = +number_Holder;
            j++;
            number_Holder = '';//debugger;
        }
        if (i === stringOf_Numbers.length-1 && stringOf_Numbers[stringOf_Numbers.length-1] == +stringOf_Numbers[stringOf_Numbers.length-1]) {
            get_Numbers.push(+number_Holder);
        }
    }
  
        
    
console.log (stringOf_Numbers);
return get_Numbers;
}

//let newNumbers = StringEntrytoArray();
//console.log(`new array is ${newNumbers}`);
//console.log(newNumbers)



function digitremover(number, digit) {
    let numberDigits = [];
    number = String(number);
    for (let i = 0; i < number.length; i++) {
        if (number[i] != +digit) {
            numberDigits.push(number[i]); 
        }
    }
    console.log(numberDigits);
    if (numberDigits.lenght===number.lenght) {
        console.log(` there is no ${digit} digit in the number you entered`);
    } else {
        number = "";
        for ( let i=0; i < numberDigits.length; i++) {
        number +=numberDigits[i];
            } 
        }
        return +number;
}
 
function searchfor_2_digits(number, search) {
    let counter = 0;
    number = String(number);    
    for (let i = 0; i < number.length; i++) {
        if (+number[i] == search%10 && +number[i-1] == Math.floor(search/10) ) {
            counter+=1;            
        }            
    } 
    if (counter!==0) {console.log (`number ${search} apears in the entered number ${counter} times`);
    } else {console.log (` I could not find ${search} in entered number`);}

}

//searchfor_2_digits(5421542154246, 24);

function sorting_numbers_decsending (){
    let randomList = StringEntrytoArray();
    let min = 100;
    for (let i = 0; i < randomList.length; i++) {
        for (let j = 0; j < randomList.length; j++)
        if (randomList[i] > randomList[j]) {
            min = randomList[i];
            randomList[i] = randomList[j];
            randomList[j] = min;
        }
    }
 return randomList;
}
//let a = sorting_numbers_decsending();
//console.log(a);


// a function to find all prime numbers in the entered range

function all_primes_intherange(lowerLimit, upperLimit) {
    let checker = false;
    let primeList = [];
    if (+lowerLimit%2 === 0){
        loop1:for (let i = +lowerLimit+1; i <= +upperLimit; i+=2) {
                for (let j = 3; j < i/2; j+=2) {
                if ( i % j !== 0 ) { checker = true; 
                } else { checker = false;break;}  
            }
            if (checker === true) { primeList.push(i);}
        }
    } else {
        for (let i = +lowerLimit; i <= +upperLimit; i+=2) {
            for (let j = 3; j < i/2; j+=2) {
                if ( i % j !== 0 ) { checker = true;
                } else { checker = false;}   
            }
            if (checker === true) { primeList.push(i);}
        }
    }
   return primeList;
}
let primesInTheRange = all_primes_intherange( 35, 64);
console.log(primesInTheRange);