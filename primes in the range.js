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