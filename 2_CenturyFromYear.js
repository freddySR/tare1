function CenturyFromYear(año){
  var siglo;
  var resto;

  if(año%100==0)  {
    siglo=año/100;
  }
  else {
        siglo=(Math.trunc(año/100))+1;
  }
  return siglo;
}
console.log(CenturyFromYear(1905));
