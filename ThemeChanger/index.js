const passIp= document.getElementById('password')
const buttondiv= document.querySelector('.buttonDiv')
const dispStrong=document.querySelector('.strongPassword')
const themeBtn= document.querySelector('#theme')
const bodyTag = document.body;

let suggestedPass ;
const generateBtn = document.querySelector(".btn");
const headTag= document.getElementById('head')


const specialSymbol= ['@','#',"$",'%','^','&','*',"(",")",'_','.',"~","{",'}',"[","]"]
const number=['1','2','3','4','5','6','7','8','9']
const maxLength =15
const defaultThemeColor = {
  color: "#000000",
  bg_color: "#ffffff",
  btn_color: "#4f46e5",
  password_color:"#4f46e5",
  head_color:"#4f46e5"
};

const darkThemeColor = {
  color: "#ffffff",
  bg_color: "#000000",
  btn_color: "#22c55e",
  password_color:'#26954f',
  head_color:'#26954f'
};

let currentThemeColor = defaultThemeColor;



buttondiv.addEventListener('click',()=>{
const userPass= passIp.value
 if(userPass.length >=maxLength){
    dispStrong.innerText=`
    You already have long password
    
    `
    return;
 }
 
 const randChar= maxLength-userPass.length
 const charSuggetion=randCharSuggestor(randChar)

 const strongPassword = userPass+charSuggetion.join("")
 dispStrong.innerHTML=`
    <h6 class="password"> Strong Password : ${strongPassword} </h6>
 
 `
 suggestedPass= document.querySelector('.password')

})

const randCharSuggestor= (n)=>{

  const randCharList= [...specialSymbol,...number]
  let charSuggester=[]
  for(let i=0;i<n;i++){
    charSuggester.push(randCharList[Math.floor(Math.random() * randCharList.length)])
  }
  console.log(charSuggester)
  return charSuggester

}
const applyTheme = (theme) => {
  bodyTag.style.backgroundColor = theme.bg_color;
  bodyTag.style.color = theme.color;
  generateBtn.style.backgroundColor = theme.btn_color;
  headTag.style.color=theme.head_color

  if(suggestedPass){
    suggestedPass.style.color=theme.password_color
 
  }
};

const changeTheme =()=>{


  if (currentThemeColor === defaultThemeColor) {
    currentThemeColor = darkThemeColor;
    themeBtn.innerText = "Light";
  } else {
    currentThemeColor = defaultThemeColor;
    themeBtn.innerText = "Dark";
  }

  applyTheme(currentThemeColor);

}