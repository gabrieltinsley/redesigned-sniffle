let timerId = null;

window.addEventListener("DOMContentLoaded", function() {
   document.addEventListener("click", startAnimation);
});

function startAnimation(e) {
   // Get mouse coordinates
   let clickX = e.clientX;
   let clickY = e.clientY;

   //Stop any previous timers
   if(timerId !== null) {
      clearInterval(timerId);
   }

   //Start a new timer that calls moveImage(x,y) every 10 ms, timer ID is global
   timerId = setInterval(function() {
      moveImage(clickX, clickY);
   }, 10);
}

function moveImage(x, y) {
   const img = document.querySelector("img");

   // Determine location of image
   let imgX = parseInt(img.style.left);
   let imgY = parseInt(img.style.top);

   /**
    * Finds the given coordinates that center the image 
    * around the click
    */
   const centerX = Math.round(x - (img.width / 2));
   const centerY = Math.round(y - (img.height / 2));

   // Timer stops when image reaches the center point
   if(imgX === centerX && imgY === centerY) {
      clearInterval(timerId);
      timerId = null;
      return;
   }

   //Image moves 1 pixel in all directions
   if(imgX < centerX) {
      imgX++;
   }
   else if(imgX > centerX) {
      imgX--;
   }

   if(imgY < centerY) {
      imgY++;
   }
   else if(imgY > centerY) {
      imgY--;
   }
   
   // Update image location
   img.style.left = imgX + "px";
   img.style.top = imgY + "px";
}