
//You must wait for the image to load before
//you try to draw it. You can do so using this
//code below

var img = new Image();   // Create new img element
img.addEventListener("load", function() {  //listens for image to load
  // execute drawImage statements here
}, false);
img.src = 'myImage.png'; // Set source path