var con=0;
function tres(cad){
    let res='';
    while(con<cad.length){
      let c=cad.charAt(con);
      if(c=='('){
        con++;
        res+=add(cad);
      }else{
        res+=c;
      }
      con++;
    }
    return res;
}
const add=(cad)=>{
    let res='';
    while(con<cad.length){
      let c=cad.charAt(con);
      if(c=='('){
        con++;
        res+=add(cad);
      }else if(c==')'){
        res=volteo(res);
        return res;
      }else{
        res+=c;
      }
      con++;
    }
    return res;

}
function volteo(cad){
  let sum='';
  for(let i=cad.length-1;i>=0;i--){
    let c=cad.charAt(i);
    sum+=c;
  }
  return sum;
}

console.log(tres("foo(bar(baz))blim"));
