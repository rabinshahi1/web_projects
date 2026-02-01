const nameIp =document.getElementById('name')
const math=document.getElementById('math')
const webpp=document.getElementById('webpp')
const python=document.getElementById('python')
const cn=document.getElementById('cn')
const form =document.getElementById('form')
const tableSection=document.querySelector('.result')
let subjectName=['math','web','python','cn'];
let userData=[]
let otherHeaderDetail=['total','percent','result']
const totalMarksPersSub=60


 let totalMarks ;
 let totalPercent;
 let result;

function roundUp(num,place){
    const precision=Math.pow(10,place)
    return Math.ceil(num* precision)/precision
}


function calculateMarks(){
     
    totalMarks=[]
    totalPercent=[]
    result=[]
    userData.forEach((user)=>{
        let sum=0;
        let id=0;
        subjectName.forEach((hname)=>{
            if(Number(user[hname]<24))
            {
        
                  id=1;
            }
            sum+=Number(user[hname])
     

     } )
     totalMarks.push(sum);
     if(id!=1)
     {
    
     let percent =roundUp((sum/((subjectName.length)*totalMarksPersSub)) *100,2)
     totalPercent.push(percent)
     result.push('pass')
     }
     else{
        totalPercent.push('-')
        result.push('fail')
     }
     
    })
    
    
}




const renderTable =()=>{
tableSection.innerHTML=''
const table = document.createElement('table')
const thead = document.createElement('thead')
const headRow= document.createElement('tr')

const mergedheader=['name',...subjectName,...otherHeaderDetail]
mergedheader.forEach((data)=>{
  
    const  th= document.createElement('th')
    th.textContent= data
    headRow.appendChild(th)
})
thead.appendChild(headRow)
table.appendChild(thead)

  

  
const tbody = document.createElement('tbody')
userData.forEach((user,idx)=>{
    const row = document.createElement('tr')
    mergedheader.forEach((data)=>{
    
     const td =document.createElement('td')
     if(!user.hasOwnProperty(data))  
     {
        if(data=='total')
        {
            user.total=totalMarks[idx]
        }
        else if(data=='percent'){
            user.percent=totalPercent[idx]
        }
        else{
           user.result=result[idx]
                        }
     }
     td.textContent=user[data]
     if(data==='result')
     {
        if (user[data] === 'pass') {
      row.classList.add('pass')
        } else {
        row.classList.add('fail')
                    }
     }
     row.appendChild(td)


    })
    tbody.appendChild(row)

})
table.appendChild(tbody)
tableSection.appendChild(table)


}



form.addEventListener('submit',(e)=>{
   e.preventDefault()
   const name=nameIp.value
   const mathMarks=math.value 
   const webMarks= webpp.value
   const pythonMarks= python.value
   const cnMarks =cn.value
   const perUserData={name,
    math:mathMarks
    ,web:webMarks
    ,python:pythonMarks
    ,cn:cnMarks

    }
    
    
   userData.push(perUserData)

    calculateMarks()
  
   renderTable()

})




