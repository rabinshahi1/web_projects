const time=document.querySelector('.middle');
let clockId;
let countDownId;
const showTimer=()=>{
 if(clockId){
    clearInterval(clockId)
 }
 const iptbox = document.createElement('input');
 iptbox.setAttribute('type','number');
 iptbox.setAttribute('placeholder','Enter time in seconds');
 iptbox.setAttribute('class','iptbox');
 const startbtn = document.createElement('button');
 startbtn.setAttribute('class','button');
 startbtn.innerText='Start Timer';
 time.innerHTML='';
 time.appendChild(iptbox);
 time.appendChild(startbtn)

 startbtn.addEventListener('click',()=>{
    let timer= Number(iptbox.value);
    if(timer<=0){
        alert('Please enter a valid time');
    }
    else{
        countDownId = setInterval(()=>{
            if(timer>=0){
                time.innerHTML=`
                
               
                <span class="countdown" > ${timer}</span> <span class="subscript"> sec</span>
                
                `
            }
            timer--;
            if(timer<0){
                clearInterval(countDownId);
                 time.innerHTML=`<h1> Time's Up !</h1>`
              
            }
        },1000)
       
    }
 })

}
const showClock=()=>{

  if(countDownId){
    clearInterval(countDownId)
  }  
clockId=setInterval(()=>{
    let date= new Date();
    let hour =date.getHours();
    let min = date.getMinutes();
    let sec= date.getSeconds();
    time.innerHTML= ` <span class="hr_min">${hour}:${min}:${sec}</span>`;
},1000)


};