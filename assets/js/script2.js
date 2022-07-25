let colorBox = ""; 
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");

document.addEventListener('keydown', function (event) {
if (event.key === 'a') {
	
/* Cambiar a color 1 */	

colorBox = "aqua";	
box1.style.backgroundColor = colorBox;	


} else if (event.key=== 's') {

/* Cambiar a color 2 */

colorBox = "fuchsia";
box2.style.backgroundColor = colorBox;	

	
} else if (event.key === 'd') {

/* Cambiar a color 3 */

colorBox = "teal";
box3.style.backgroundColor = colorBox;	

	
} else if(event.key === 'f') {

/* Cambiar a color 4 */
	
colorBox = "lime";
box4.style.backgroundColor = colorBox;	
	
} 
	
})

box1.addEventListener ('click', () => box1.style.backgroundColor = "black")
box2.addEventListener ('click', () => box2.style.backgroundColor = "black")
box3.addEventListener ('click', () => box3.style.backgroundColor = "black")
box4.addEventListener ('click', () => box4.style.backgroundColor = "black")






