var Count_Vowels= (S) => 
{
  const vowel = S.match(/[aeiou]/gi).length;
  return vowel;    
};