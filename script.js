const form=document.getElementById("GenerateTable");
form.addEventListener("submit",function(event){
    event.preventDefault();

    const row=parseInt(document.getElementById("row-input").value);
    const col=parseInt(document.getElementById("col-input").value);
    
    const table=document.createElement('table');

    for( let i=0;i<row;i++)
    {
        const tr=document.createElement('tr');
        for(let j=0;j<col;j++)
        {
            const td=document.createElement('td');
            td.innerText='explorin';
            tr.append(td);

        }
        table.append(tr);
    }

    const output=document.getElementById("output");
    output.innerHTML="";
    output.append(table);
    
    

})