function draw(){
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
            
            //Using .moveto lets you "lift the pen" to a new location
            
            //arc(x, y, radius, startAngle, endAngle, anticlockwise)
            //Draws an arc which is centered at (x, y) position with
            //radius r starting at startAngle and ending at endAngle
            //going in the given direction indicated by anticlockwise (defaulting to clockwise).
            
            ctx.beginPath();        
            ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle; 
            ctx.moveTo(110,75);
            ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
            ctx.moveTo(65,65);
            ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
            ctx.moveTo(95,65);
            ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
            ctx.stroke();
        }
      }