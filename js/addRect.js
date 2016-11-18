function addRect(){
	var getRectX = document.getElementById('setRectX'),
		 getRectY = document.getElementById('setRectY'),
		 getRectW = document.getElementById('setRectWidth'),
		 getRectH = document.getElementById('setRectHeight');
	
	var fillRect = function(x,y,w,h){
		ctx.fillStyle = 'rgb(0,255,0)';
		ctx.strokeStyle = 'black';
		ctx.fillRect(x,y,w,h);
		for(var k=0;k<5;k++){ctx.strokeRect(x,y,w,h);}
	}
	var strokeRect = function(x,y,w,h){
		ctx.strokeStyle = 'rgb(255,0,0)';
		ctx.strokeRect(x,y,w,h);
		for(var k=0;k<5;k++){ctx.strokeRect(x,y,w,h);}
	}
	var Rect = function(x,y,w,h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	};
	Rect.prototype = {
		draw: function(){
			fillRect(this.x,this.y,this.w,this.h);
		},
		stroke: function(){
			strokeRect(this.x,this.y,this.w,this.h);
		},
	}

	
	var i = rect.length;

	rect.push(new Rect(+getRectX.value,+getRectY.value,+getRectW.value,+getRectH.value));
	count++;
	rect[i].draw();
 };