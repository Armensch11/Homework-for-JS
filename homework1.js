            //exercise 1
let a = +prompt ('enter first number', '00');
let b = +prompt ('enter second number', '00');
let adiv = a%b;
let bdiv = b%a;
if (adiv == 0 || bdiv == 0) {alert('1');
            } else ( alert('0'));

            // exercise 2
let angleA = +prompt ('enter first angle', '00');
let angleB = +prompt ('enter second angle', '00');
let angleC = 180 - angleA - angleB;
alert (`third angle is equal ${angleC} degrees`);  
           
            // exercise 3
let num = +prompt('enter number', '00');
let a = '+'+num+num;
let b = '+'+num+num+num;
let sum = num + (+a) + (+b);
alert (sum);

            //exercise 4
let num = +prompt('enter number to convert', '00');
if ( num%10 && num > 10 ) { num = + ('+'+num%10+(num-num%10)/10); 
                alert (`conversion result is ${num}`);
              } else alert (num);

//alternative solution for exercise 4

let str = prompt ('enter a number', '00');
if (+str == str ) { if (+str[str.length-1]) { let lastDigit = str[str.length-1];
                                            alert (lastDigit);
                                            let newstr = str.slice (0, str.length-1);
                                            alert (newstr);
                                            let answer = lastDigit+newstr;
                                            alert (answer);
                                            } else alert (`your number ${str} was not converted`);

                    } else alert ('your enter is not number');

            //exercise 5
let count=0;
let num1 = +prompt ('enter number1', '00');
    count++;
let num2 = +prompt ('enter number2', '00');
    count++;
let num3 = +prompt ('enter number3', '00');
    count++
let num4 = +prompt ('enter number3', '00');
    count++
let num5 = +prompt ('enter number4', '00');
    count++
let sum = num1+num2+num3+num4+num5;
let average = sum/count;
console.log (`average of the entered numbers is ${average}`);

              //exercise 5 solution after Monday lesson

              let sum = 0;
              let average=0
              for ( i = 1; i <= 5; i++) {
                      sum = sum + (+prompt ('enter number'));
                      average = sum/i;
              }
               console.log (average);