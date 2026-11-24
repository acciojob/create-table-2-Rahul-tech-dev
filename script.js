function createTable() {
    let button = document.getElementById("btn");
let table = document.getElementById("myTable");

button.addEventListener("click", () => {
    let rn = prompt("Input number of rows: ");
    let cn = prompt("Input number of columns: ");

    rn = Number(rn);
    cn = Number(cn);

    if (isNaN(rn) || isNaN(cn)) {
        alert("Enter only numbers");
        return;
    }

    if (rn <= 0 || cn <= 0) {
        alert("Enter positive numbers");
        return;
    }

    // Table creation logic goes here
    let tr;
    let td;
    table.innerHTML="";
    for(let i=0; i<rn; i++){
        tr=document.createElement("tr");
        for(let j=0; j<cn; j++){
            td=document.createElement("td");
            td.innerText=`Row-${i} Column-${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
    


});
  
}
