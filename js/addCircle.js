function addCircle(){
	var getCircleX = document.getElementById('setCircleX'),
		  getCircleY = document.getElementById('setCircleY'),
		  getCircleR = document.getElementById('setCircleR');

   	var fillCircle = function(x,y,r,start,finish){
    	ctx.beginPath();
    	ctx.arc(x,y,r,start,finish);
    	ctx.closePath();
    	ctx.fillStyle = 'rgb(0,255,0)';
      ctx.strokeStyle = 'black';
   		ctx.fill();
      for(var k=0;k<3;k++){ctx.stroke()}
      
   	}
   	var strokeCircle = function(x,y,r,start,finish){
    	ctx.beginPath();
    	ctx.arc(x,y,r,start,finish);
    	ctx.closePath();
    	ctx.strokeStyle = 'rgb(255,0,0)';
   		for(var k=0;k<3;k++){ctx.stroke()}
   	}
   	var Circle = function(x,y,r,start,finish){
    	this.x = x;
    	this.y = y;
    	this.r = r;
    	this.start = start;
    	this.finish = finish;
   	};
   	Circle.prototype = {
    	draw: function(){
        	fillCircle(this.x,this.y,this.r,this.start,this.finish);
    	},
      	stroke: function(){
         	strokeCircle(this.x,this.y,this.r,this.start,this.finish);
      	},
   	}

   
   	var i = circle.length;

    circle.push(new Circle(+getCircleX.value,+getCircleY.value,+getCircleR.value,0,2*Math.PI));
	count++;
    circle[i].draw();	
}