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


// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});



// slow down   //used chat GPT for help
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video Down");

	// reduce speed by 10%
	video.playbackRate = Math.max(0.25, video.playbackRate * 0.9);
	video.playbackRate = Math.round(video.playbackRate * 100) / 100;

	// log new speed
	console.log("New playback rate:", video.playbackRate);
});


// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video Up");

	// increase speed by 10%
	video.playbackRate = Math.min(4, video.playbackRate * (1/0.9));
	video.playbackRate = Math.round(video.playbackRate * 100) / 100;

	// log new speed
	console.log("New playback rate:", video.playbackRate);
});



// skip ahead  //used chat GPT for help with the if statement
document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead 10s");

	// calculate new time
	let newTime = video.currentTime + 10;

	// if exceeding duration, restart video
	if (newTime > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = newTime;
	}

	// log position
	console.log("Current time:", video.currentTime);
});


// mute volume  //used chat GPT for help
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Clicked");

	// toggle muted state
	video.muted = !video.muted;

	// update button text
	if (video.muted) {
		this.textContent = "Unmute";
	} else {
		this.textContent = "Mute";
	}

	// log state
	console.log("Muted:", video.muted);
});


// Volume Slider
document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume slider changed");

	// convert slider value (0–100) to volume (0–1)
	video.volume = this.value / 100;

	// if volume is changed, unmute video
	video.muted = false;
	document.querySelector("#mute").textContent = "Mute";

	// update volume display
	document.querySelector("#volume").textContent = this.value + "%";

	// log volume
	console.log("Volume:", video.volume);
});


