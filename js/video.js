var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	// Get the video element
	video=document.querySelector("#player1");
	//Turning off autoplay and loop
	video.autoplay=false;
	video.loop=false;
});


// play button

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

	//update volume
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
	video.play();
});



