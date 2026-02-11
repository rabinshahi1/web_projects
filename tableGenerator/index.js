const tableDiv= document.querySelector('.table')
const  rowIp=document.querySelector('#row')
const colsIp=document.getElementById('cols')
const btns= document.querySelector('.btns')

let currentTableInfo={

}


const createTable=(rowNum,colNum)=>{
    tableDiv.innerHTML=''
    const table = document.createElement('table')
const tbody = document.createElement('tbody')

 for(let i=0;i<rowNum;i++){
  const bodyRow= document.createElement("tr")
  bodyRow.className=(i+1)%2 ===0 ? 'even':"odd"

    for(let j=0;j<colNum;j++){
     const td= document.createElement('td')
     td.textContent=''
     bodyRow.appendChild(td)
    }
    tbody.appendChild(bodyRow)
 }
 table.appendChild(tbody)

 tableDiv.appendChild(table)
}

const generateTable=()=>{
 if(Number(rowIp.value)<=0 || Number(colsIp.value)<=0)
 {
    return;
 }
 else{
 currentTableInfo.row=Number(rowIp.value)
 currentTableInfo.column=Number(colsIp.value)
createTable(rowIp.value,colsIp.value)

 addButtons()

 
console.log(currentTableInfo)
 }
}
const addButtons=()=>{
    btns.innerHTML=`
    
    <button onclick="rowAdd()"> Row +</button>
    <button onclick="deleteRow()"> Row -</button>
    <button onclick="columnAdd()">Column +</button>
    <button onclick="deleteColumn()">Column -</button>
    <button id="highlight" onclick="highlight()">Highlight even row</button>
    
    
    `
}


const rowAdd=()=>{
    currentTableInfo.row+=1
createTable(currentTableInfo.row,currentTableInfo.column)

}
const columnAdd=()=>{
    currentTableInfo.column+=1
createTable(currentTableInfo.row,currentTableInfo.column)

}
const deleteRow=()=>{
  currentTableInfo.row-=1
createTable(currentTableInfo.row,currentTableInfo.column)

}
const deleteColumn=()=>{
      currentTableInfo.column-=1
createTable(currentTableInfo.row,currentTableInfo.column)

}
const highlight = () => {
    const evenRows = document.querySelectorAll('.even');
    const highlightBtn = document.getElementById('highlight');

    if (highlightBtn.innerText === 'Highlight even row') {
        highlightBtn.innerText = "Unhighlight even row";
        evenRows.forEach(row => row.classList.add('highlight-row'));
    } else {
        highlightBtn.innerText = 'Highlight even row';
        evenRows.forEach(row => row.classList.remove('highlight-row'));
    }
}