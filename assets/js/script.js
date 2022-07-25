// 3.1 

const ele = document.querySelector("#ele1")

function pintar(){

ele.style.backgroundColor = "yellow"
	
}

ele.addEventListener("click", pintar)


// 3.2


function pintar(color = "green"){

ele.style.backgroundColor = color
	
}

pintar ();

ele.addEventListener("click",function(){
	
pintar("yellow")	
	
});



// 4

