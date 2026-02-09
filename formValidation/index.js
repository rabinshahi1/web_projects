const myForm= document.getElementById('myform')
const usernameIp=document.getElementById('username')
const emailIp= document.getElementById('email')
const passIp=document.getElementById('password')
const errorBox=document.querySelector('.errorMessage')
const specialSymbol=['@','.','$','%','^','&','*','(',')','-','+',',','!','#','<','>','?','[',']','{','}',';',':','"',"'",'=']
const numbers=['0','1','2','3','4','5','6','7','8','9']
const  [emailSymb1,dot,...restSpecial]=specialSymbol
let userDetails=[]

myForm.addEventListener("submit",(e)=>{
    e.preventDefault()
// 
//   console.log((usernameIp.value === ''))
  if(usernameIp.value==='' || emailIp.value==='' || passIp.value==='')
{
    errorBox.innerHTML=`
    <h4 class ="error"> All Fields are required </h4>
    `
}

 else {
  const username= usernameIp.value
  const email=emailIp.value
  const password=passIp.value
  const arrayOfusername=username.split('')
  const foundSpecialSymbol = arrayOfusername.find((character)=>(specialSymbol.includes(character)))
  const foundNumber = arrayOfusername.find((char)=>( numbers.includes(char)))
  console.log(foundNumber,foundSpecialSymbol)
let count =0;
email.split('').forEach((char)=>{
    if(char ==='@') count++
})
     if(username.length<2)
     {
        errorBox.innerHTML=`
       
       <h4 class ="error"> Name must be greater than 2 character</h4>
        `
     }
     else if(foundSpecialSymbol || foundNumber){
        errorBox.innerHTML=`
       
       <h4 class ="error"> Hey Name should not  contain ${foundSpecialSymbol ? foundSpecialSymbol:foundNumber}</h4>
        `
     }
     else if(!email.split('').includes("@")) errorBox.innerHTML=` <h4 class ="error"> Hey Email should   contain @ </h4>  `
     else if(email.split('').find((char)=> restSpecial.includes(char)))  errorBox.innerHTML=` <h4 class ="error">Enter the valid email address this contain special symbol </h4>  `
     else if (count>1)  errorBox.innerHTML=` <h4 class ="error"> Entter the valid address  it contains  ${count} @ symbol</h4>  `
     else if(email[0]==='@' || email[0]==='.' || !email.includes('.com'))  errorBox.innerHTML=` <h4 class ="error"> Hey Enter the valid adress </h4>  ` 
     else if( !password.split('').find((p) => specialSymbol.includes(p))) errorBox.innerHTML=` <h4 class ="error"> Password is to weak </h4>  ` 
     else if(password.length<=5) errorBox.innerHTML=` <h4 class ="error"> Password is too short  </h4>  ` 
     else{
        userDetails.push({
            username,
            email,
            password
        })
        errorBox.innerHTML=` <h4 class ="error"> Sumbmitted successfully!  </h4>  ` 
     }


 }


})