function draw() {
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

      
      //uses an object, Path2D, to store a path you have made. 
    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

      //Invokes the stroke and fill methods, using the previously made objects you have cached. This means you don't have to redraw them every use.
      
    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
