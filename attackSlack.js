
var target=window.prompt("Enter Target");
var phrase=window.prompt("Enter Phrase");
var count=parseInt(window.prompt("Count:"));

function sendMsg(target,phrase){
    x=document.getElementsByTagName('span')[2];
    profilename=x.innerText;
    y=document.getElementsByTagName('p')[0];
    y.innerHTML=phrase;
    if(profilename.includes(target)){
        
        // for(delay=0;delay<1000;delay++);
        setTimeout(clicker,500);
    }else{
    	alert("Target Mismatch");
    	clearInterval(interval);
		return;

    }
}
function clicker(){
	z=document.getElementsByTagName('button');
        btn=z[z.length-1];
        btn.click();
        count--;
}

function startFn(){
	if(count==0){
		clearInterval(interval);
		return;
	}
    
    sendMsg(target,phrase);
    
}

var interval=setInterval(startFn,1000);