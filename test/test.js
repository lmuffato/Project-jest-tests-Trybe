function fatorial (n) {
  
  let factor = n; 
  if(n == 0) {return 1;} 
  while (n>1) {n -= 1; factor *= n;
  } return factor;


} console.log(fatorial(5))

// console.log( Math.pow(5, 2) )