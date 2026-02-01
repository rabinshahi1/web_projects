const input_box=document.getElementById("ipt-box")
const screen=document.querySelector(".screen")

let list_operation=[]
let new_ls_operation=""
const operators=['+','/','-','*','.']
let dotStatus=0;
let totalExp=[]
const HISTORY_LENGTH=5


const renderHistory = () => {
    screen.innerHTML = ""

    for (let i = totalExp.length - 1; i >= 0; i--) {
        const exp = totalExp[i][0]
        const res = totalExp[i][1]

        const historyItem = document.createElement("div")
        historyItem.className = "history-item"

        historyItem.innerHTML = `
            <div class="history-exp">${exp}</div>
            <div class="history-res">= ${res}</div>
        `

        screen.appendChild(historyItem)
    }
}


const calculateValue=(exp)=>
{
 let pos2insert,interResult,spliceRes;
   while(exp.indexOf('/')!=-1)
   {
     pos2insert=exp.indexOf('/')-1
     if (exp[pos2insert+2]!=0 )
     {
    interResult= exp[pos2insert]/exp[pos2insert+2]
    spliceRes= exp.splice(pos2insert,3)
     exp.splice(pos2insert,0,interResult)
     }
     else 
     {
        exp=[]
        input_box.value=new_ls_operation
        break;
     }
    
     
   }
   while(exp.indexOf('*')!=-1)
   {
     pos2insert=exp.indexOf('*')-1

     interResult= exp[pos2insert]*exp[pos2insert+2]
    spliceRes= exp.splice(pos2insert,3)
     exp.splice(pos2insert,0,interResult)
     
   }
    while(exp.indexOf('+')!=-1)
   {
     pos2insert=exp.indexOf('+')-1

     interResult= exp[pos2insert]+exp[pos2insert+2]
     spliceRes=exp.splice(pos2insert,3)
     exp.splice(pos2insert,0,interResult)
     
   }
    while(exp.indexOf('-')!=-1)
   {
     pos2insert=exp.indexOf('-')-1

     interResult= exp[pos2insert]-exp[pos2insert+2]
     spliceRes=exp.splice(pos2insert,3)
     exp.splice(pos2insert,0,interResult)
     
   }
   return exp;
}



const btnClick=(data)=>
{

    if (list_operation.length==0 && (data=='/' || data =='*' || data =='+' || data=='-' ))
    {
       console.log('invalid operation')
       return;
    }
    else if (operators.includes(list_operation[list_operation.length-1]) && (data=='/' || data =='*' || data =='+' || data=='-' ||data=='.')){
       console.log("double operator at same time")
       return;  
    }
    else if(data=='=' && (operators.includes(list_operation[list_operation.length-1])))
    {
        console.log('Invalid operation')
        return ;
        
    }
    else if(data=='=')
    {
       
      

        let result=calculateValue(list_operation)

        input_box.value=result[0]
        if(totalExp.length ==HISTORY_LENGTH)
        {
            let removeElement=totalExp.shift()
        }
        totalExp.push([new_ls_operation,result[0]])
        
         renderHistory()
        list_operation=result
        new_ls_operation=result.toString()
        
        return ;
    }
    else if (data=="all_clear")
    {
        list_operation=[]
        new_ls_operation=''
        input_box.value=new_ls_operation
        return;
    }else if(data=="single_clear")
    {
        let popVal=list_operation.pop()
        new_ls_operation=list_operation.join('')
        input_box.value=new_ls_operation
        return ;
    }
    else if (!operators.includes(data) && list_operation.length!=0 && !operators.includes(list_operation[list_operation.length-1]))
    {
        let firstNum=list_operation.pop().toString()
        list_operation.push(Number(firstNum+data))
        new_ls_operation=list_operation.join('')
        input_box.value=new_ls_operation
        console.log(list_operation)
        return;
    }
    else if(list_operation[list_operation.length-1]=='.' )
    {   
        dotStatus++
       
        let numAndDot=list_operation.splice(list_operation.length-2,2).join('')
     
        list_operation.push(Number(numAndDot+data))
        new_ls_operation=list_operation.join('')
        input_box.value=new_ls_operation
        console.log(list_operation)
        return;
    }
    else if(dotStatus==1 && ! operators.includes(data))
    {
        console.log("Invalid number")
        return;
    }
    else if(operators.includes(data))
    {
        dotStatus=0;
    }

    list_operation.push(data)
    console.log(list_operation)
    new_ls_operation=list_operation.join("")
    input_box.value=new_ls_operation
   
}



const clearHistory= ()=>{
    totalExp=[]
    screen.innerHTML=""
}