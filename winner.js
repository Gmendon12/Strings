 
var Game_Winner = (S) => 
{
  let Aditya=0;
  let Danish=0;
  for(let i=0;i<S.length;i++){
    if(S.charAt(i)=='A'){
      Aditya+=1
    }
    if(S.charAt(i)=='D'){
      Danish+=1
    }
  }
  if(Aditya > Danish){
    return 'Aditya'
  }
  else if(Aditya < Danish){
    return 'Danish'
  }
  else{
    return 'Draw'
  }
}