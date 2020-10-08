const content = document.getElementById("content");

var today = new Date();
var day = today.getDay();
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour <= 12) ? "AM" : "PM";

hour = (hour >= 12) ? hour-12 : hour;



const item = `<p> Today is : ${dayList[day]}</p>
            <p>Current Time is  : ${hour} ${prepand} : ${minute} : ${second}</p> 
            `;

const position = "beforeend";
content.insertAdjacentHTML(position, item);
 