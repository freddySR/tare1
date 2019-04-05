
function isTandemRepeat(cadena){
  var cont=cadena.length;
  var div=0;
  var cad1="";
  var cad2="";
  if(cont%2==0)
  {
    div=Math.trunc(cont/2);
    for(var i=0;i<div;i++){
      cad1=cad1+cadena[i];
    }
    for(var j=div;j<cont;j++){
      cad2=cad2+cadena[j];
    }

    if(cad1===cad2){
      return "true";
    }
    else{
      return "false";
    }
  }
  else {
    return "false";
  }
}

var inputString = "qqq";
console.log(isTandemRepeat(inputString));
