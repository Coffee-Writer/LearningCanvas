function draw(){
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
            
            ctx.beginPath();        //First, you create the path
            ctx.moveTo(75,50);      //moves point of origin in pixels
            ctx.lineTo(100,75);     //draws a line from origin to this location
            ctx.lineTo(100,25);     //draws a line from current location to this location
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 5;
            ctx.stroke();           //shows how the path was drawn
            ctx.fill();             //Fills in the path to make a black triangle; automatically closes the shape back to origin.
        }
      }