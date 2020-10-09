const content = document.getElementById("content");
const answer = document.getElementById("answer");
var side1 = document.getElementById("side1");
var side2 = document.getElementById("side2");
var side3 = document.getElementById("side3");


function add(){ 
    var a = side1.value;
    side1.value = "";

    var b = side2.value;
    side2.value = '';

    var c = side3.value;
    side3.value = '';

    var s = ((+a) + (+b) + (+c))/2;
    var inside = s * (s-a)*(s-b)*(s-c);
    area = Math.sqrt(inside);

    var message = `
        <p>The Are is : ${area}</p>
    `;
 
    answer.insertAdjacentHTML("beforeend", message);

    
   

}
 