function exerciseElaboration(p,n){
    var ult=p;
    var cuadra=0;
    var resto=0;
    for(var i=1; n>-1 ;i++)
    {
      p=p*10;
      n--;
    }
    p=p+ult;
    cuadra=Math.pow(p,2);

    while(cuadra>=1){
      resto=resto+cuadra%10;
      cuadra=Math.trunc(cuadra/10);
    }

    return resto;
}

console.log(exerciseElaboration(5,1));
