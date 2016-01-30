function draw(){
        var canvas = document.getElementById('tutorial');       //gets the canvas element
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
            
            ctx.fillStyle = "rgb(200,0,0)";                     //styles a red rectangle
            ctx.fillRect (10, 10, 55, 50);                      //draws the red rectangle using these four points
            
            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect (30, 30, 55, 50);
        }
      }