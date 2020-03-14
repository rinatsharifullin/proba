
/* This function provide waiting time till content loaded */

document.addEventListener('DOMContentLoaded', function(){
	mobileMenu();
	openMap();
	closeMap();
});

function mobileMenu(){
	var iconElement = document.getElementById('mobileIcon');
	
	iconElement.addEventListener('click', function(){
		if(iconElement.innerHTML=='☰'){
			document.getElementById('navigation').style.display = 'flex';
			iconElement.innerHTML='&#88';
			var iframe = document.getElementById("mymap");iframe.style.display = "none";
		}else{
			document.getElementById('navigation').style.display = 'none';
			iconElement.innerHTML='&#9776';
		}
	})
}
function openMap(){
	var iframe = document.getElementById("mymap");
	var mapIcon = document.getElementById("gmap");
	mapIcon.addEventListener('click', function(){
		iframe.style.display='block';
		
	})
}

function closeMap(){
	var iframe = document.getElementById("mymap");
	var x = document.getElementsByClassName("close");
	x[0].addEventListener('click', function(){
		iframe.style.display = "none";
	});

}

