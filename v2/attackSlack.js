var sendButton = null
var target = window.prompt("Enter Target")
var count = parseInt(window.prompt("Enter count"))
var phrase = window.prompt("Enter phrase")
function attack() {
   name = document.getElementsByTagName('span')[2].innerHTML;
   if (!(name.includes(target))) {
       alert("Target Mismatch");
       clearInterval(interval);
       return;
   }
   else {
       if (count == 0) {
           clearInterval(interval);
       }
       var textBox = document.getElementsByTagName('p')[0];
       sendButton = document.getElementsByTagName('button')[document.getElementsByTagName('button').length - 1];
       textBox.innerHTML = phrase;
       setTimeout(clicker, 500);
   }
}
function clicker() {
   sendButton.click();
   count--;
}
var interval = setInterval(attack, 1000)