for(let i = 2; i <= 1000; i++){
    let isPrime = true;
    for(let a = 2, max = Math.sqrt(i); a <= max; a++){
      if(i % a === 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      console.log(i);
    }
  }
  // console.log(primes);