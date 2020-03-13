
/* This function provide waiting time till content loaded */

document.addEventListener('DOMContentLoaded', function(){
	mobileMenu();
});

function mobileMenu(){
	var iconElement = document.getElementById('mobileIcon');
	console.log(iconElement.innerText == '☰');
	
	iconElement.addEventListener('click', function(){
		if(iconElement.innerHTML=='☰'){
			document.getElementById('navigation').style.display = 'flex';
			iconElement.innerHTML='&#88';
		}else{
			document.getElementById('navigation').style.display = 'none';
			iconElement.innerHTML='&#9776';
		}
	})
}