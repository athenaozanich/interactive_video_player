//select player
var video = document.querySelector("video");
        //add controls
$('video').mediaelementplayer({
    features: ['playpause', 'volume', 'current', 'progress', 'fullscreen'],
    stretching: 'responsive'
   
   
 });


//select Span elements for 
var transcript = document.querySelectorAll("span");
//style player and controls
video.addEventListener("timeupdate", function () {
    for (var _i = 0; _i < transcript.length; _i += 1) {
      transcript[_i].style.cursor = "text";
      if (video.currentTime > transcript[_i].getAttribute("data-start") && video.currentTime < transcript[_i].getAttribute("data-end")) {
        transcript[_i].style.color = "lightgreen";
      } else {
        transcript[_i].style.color = "";
      }
    }
  });


// Click event for body text - allows jumping to that part of the video
for (var i = 0; i < transcript.length; i += 1) {
    transcript[i].addEventListener("click", function (event) {
      video.currentTime = event.target.getAttribute("data-start");
    });                
  }

            
        