
/* This function provide waiting time till content loaded */

document.addEventListener('DOMContentLoaded', function(){
	/* menuState(); */
	mobileMenu();
	openMap();
	closeMap();
});


/* Functions starts below */

/* Define variable as global as we use in many functions */
var iconElement;

/* Mobile nav icon click listener */
function mobileMenu(){
	iconElement = document.getElementById('mobileIcon');
	iconElement.addEventListener('click', function(){
		if(iconElement.innerHTML=='☰'){
			navVisibility('visible');
			iframe = document.getElementById("mymap");iframe.style.display = "none";
		}else{
			navVisibility('hidden');
		}
	})
}

/* Show or hide navigation menu */
function navVisibility(state){
	if (state == 'visible'){
		document.getElementById('navigation').style.display = 'flex';
		document.getElementById('mobileIcon').innerHTML='&#88';
	}else{
		document.getElementById('navigation').style.display = 'none';
		document.getElementById('mobileIcon').innerHTML='&#9776';
	}
}


/* Open map by click social media icon - location, or close map by clicking same icon */
function openMap(){
	document.getElementById("gmap").addEventListener('click', function(){
		if(document.getElementById("mymap").style.display=='block'){
			document.getElementById("mymap").style.display = "none";
		}else{	document.getElementById("mymap").style.display='block';
				if (window.innerWidth < '768'){navVisibility('hidden');} /* Hide nav menu if opening map to prevent overlapping */
		}
	})
}
/* Close map by clicking X icon on top */
function closeMap(){
	var xIcon = document.getElementsByClassName("close");
	xIcon[0].addEventListener('click', function(){
		document.getElementById("mymap").style.display = "none";
	});
}

/* In case of resizing mobile menu initial state must be display none but desktop version must be visible */
function menuState(){
	window.addEventListener("resize", function(){
		/* If window size over 768px - display nav menu */
		if (window.innerWidth > '768'){
			navVisibility('visible');
		}else{
			navVisibility('hidden');
		}
	});
}
function detectDevice(){
	if(window.innerWidth < window.innerHeight){
		document.getElementById("desktopStyling").disabled = true;
	}
}
