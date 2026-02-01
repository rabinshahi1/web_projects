const max=100
const showscoreDiv= document.getElementById("score")
const showFeedBack =document.getElementById("feedback")
const iptbox=document.getElementById('input-box')
const showPoint=document.getElementById('showPoints')
let point =0;
let randNum;
function randomNumGen()
{

    return Math.floor((Math.random() * (max)))+1;
}





const playGame=()=>
{
  iptbox.value=''
 randNum =randomNumGen()
showFeedBack.innerText=`Guess the Number ? [0,100]`

   

}




const checkGuess=()=>{

  const my_guess=  iptbox.value
  if (my_guess=='') 
  {
    showFeedBack.innerHTML=`<h3> Make sure you had given the input value </h3>`
  }

  if(my_guess==randNum)
  {
    point+=10
    showFeedBack.innerHTML=`<h2>You guessed it correct ! ${randNum} </h2>
     <h4> Wanna paly again click on start !'
    `
  }
  else if (my_guess>randNum)
  {
    point-=5
    showFeedBack.innerHTML=`
    <h3> Low than this ${my_guess} </h3>
    `
  }
  else
  {
    point-=5
     showFeedBack.innerHTML=`
    <h3> Higher than this ${my_guess} </h3>
    `
  }
  showscoreDiv.innerHTML=`<h2> Score : ${point} </h2>`


}