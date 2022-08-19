 
var Palin_Check = (str) =>
{
	 var  a = 0, b = str.length - 1
   
   while (a < b) {
   
   if (str.charAt(a) != str.charAt(b))
      return "False"
      a++
      b--
  }
    return "True"
}
