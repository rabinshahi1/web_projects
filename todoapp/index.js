const input_box=document.getElementById('ipt-box')
const todolist=document.getElementById('all_to_do')
const showCompleted=document.getElementById('showCom')
const showPending=document.getElementById('showPen')

let complete=0;
console.log(todolist)

let allMyToDo=[]

const makeItCancel=(idx)=>
{
      const removeItem=allMyToDo.splice(idx,1)
      renderTodo(allMyToDo);
}
const makeItDone=(idx)=>{
  
   
     allMyToDo[idx][1]='complete'
    complete=complete+1
    showCompleted.innerText=`Complete : ${complete}`
    renderTodo(allMyToDo);   
}

const renderTodo=(allMyToDo)=>
{
      todolist.innerHTML=''
    for (let i=(allMyToDo.length-1);i>=0;i--)
    {
         const newDiv = document.createElement('div')
         newDiv.className='todo'
         newDiv.innerHTML=`<div class="todo"> <h3><span>${allMyToDo.length-i} .</span>${allMyToDo[i][0]} :${allMyToDo[i][1]}</h3>
            ${allMyToDo[i][1] =='complete'? ``: `<button id="done" onclick= "makeItDone(${i})"> Done </button>
            <button id="cancel" onclick="makeItCancel(${i})">Cancel </button>`}
         </div>`
         todolist.appendChild(newDiv)
    }

}
const addToDo=()=>
    
 {
 
   
    let currentToDo= input_box.value
   
    allMyToDo.push([currentToDo,'pending'])
    
   
   

    renderTodo(allMyToDo)

}