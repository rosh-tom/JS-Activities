const content = document.getElementById("content");
 
var today = new Date();
var mm = today.getMonth();
var dd = today.getDay();
var yyyy = today.getFullYear();

if(dd < 10){
    dd = "0"+dd;
}
if(mm < 10){
    mm = "0"+mm;
}

const answer = `
    <p>Today : ${today}</p>
    <p>Month : ${mm}</p>
    <p>Day : ${dd}</p>
    <p>Year : ${yyyy}</p>
    <hr>
    <p>mm-dd-yyyy : <b>${mm}-${dd}-${yyyy}</b></p>
    <p>mm/dd/yyyy : <b>${mm}/${dd}/${yyyy}</b></p>
    <p>dd-mm-yyyy : <b>${dd}-${mm}-${yyyy}</b></p>
    <p>dd/mm/yyyy : <b>${dd}/${mm}/${yyyy}</b></p>
`;

content.insertAdjacentHTML("beforeend", answer);

