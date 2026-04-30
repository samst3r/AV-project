/* 
  TODO 1:
  Use querySelector() to save your two buttons into variables.

  Required variables:
  button1 stores the first button element
  button2 stores the second button element
*/

let play1 = document.querySelector("#button-one"); //reuse this line of code for other elements getting stored
let play2 = document.querySelector("#button-two");
let pause1 = document.querySelector("#pause-one");
let pause2 = document.querySelector("#pause-two");
//code for task 1 here

/* 
  TODO 2:
  Use querySelector() to save your two video elements into variables.

  Required variable names:
  video1 stores the first video element
  video2 stores the second video element
*/

//code for task 2 here
let video1 = document.querySelector("#video-one");
let video2 = document.querySelector("#video-two");
/* 
  TODO 3:
  Use querySelector() to save your two audio elements into variables.

  Required variable names:
  audio1 stores the first audio element
  audio2 stores the second audio element
*/

//code for task 3 here
let audio1 = document.querySelector("#audio-one");
let audio2 = document.querySelector("#audio-two");
/* 
  TODO 4:
  Add a click event listener to button1.

  When button1 is clicked:
  - play video1
  - play audio1

  Hint:
  video1.play();
  audio1.play();
*/
play1.addEventListener("click", function () {
  console.log("Button 1 clicked");
  audio2.pause();
  video2.pause();
  //
  audio1.play();
  video1.play();
});
pause1.addEventListener("click", function () {
  console.log("Button 1 clicked");
  audio1.pause();
  video1.pause();
});
play2.addEventListener("click", function () {
  console.log("Button 2 clicked");
  audio1.pause();
  video1.pause();
  //
  audio2.play();
  video2.play();
});
pause2.addEventListener("click", function () {
  console.log("Button 1 clicked");
  audio2.pause();
  video2.pause();
});
/* 
  TODO 5:
  Add a click event listener to button2.

  When button2 is clicked:
  - play video2
  - play audio2
*/
//code for task 5 below, use the code above to start and change the variables

// TODO: Play video2 here.

// TODO: Play audio2 here.

/* 
  OPTIONAL CHALLENGE 1: This code can be added to either  event handler above in tasks 4 & 5
  When Pair 1 plays, pause Pair 2.
  This makes your website work more like a real media player.

  Methods you may need:
  video2.pause();
  audio2.pause();
*/

/* 
  OPTIONAL CHALLENGE 2: THis code can also be added inside event handlers for tasks 4 & 5
  Reset a video or audio clip back to the beginning.

  Property you may need:
  video1.currentTime = 0;
  audio1.currentTime = 0;
*/

/* 
  OPTIONAL CHALLENGE 3:
  Make the current play button also pause the video and audio once its clicked after they are played. THis can be done by creating a variable like isplaying=false; then use a pattern like -> if(isPlaying){audio.pause();} inside of the event handler
  Then use querySelector() and addEventListener() to make them work.
*/

/* 
  SPICY CHALLENGE:
  Change this site so that there is only one video tag and one audio tag(comment out old code)
  The user can choose which video or audio source plays by using a button.

  You will need
  - another event handler
  - variables/list that store audio src or paths
  - button or dropdown menu to select source of audio or video
  

*/
