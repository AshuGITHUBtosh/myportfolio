let guess;
let count=0;
let answer=Math.floor(Math.random()*10)+1;
document.getElementById("butt").onclick=function()
{
   count=+1;
   document.getElementById("number").value=guess;
   if(guess==answer)
   {
      alert("it took you",count,"guesses");

   }
   else if(guess<answer)
   {
      alert("too samll");
   }
   else{
      alert("too big");
   }
   


}