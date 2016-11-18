var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = 1000,
    height = canvas.height = 600;

var rect=[],
	circle=[],
	triangle=[],
	CircleCounter=0,
	mouse={
		x:0,
		y:0,
	},
	selected=false,
	i,
	count=0;

drawBackground();

var isCursorInRect = function(Obj){
	return mouse.x>Obj.x && mouse.x<Obj.x+Obj.w &&
		   mouse.y>Obj.y && mouse.y<Obj.y+Obj.h;
}
	
var isCursorInCircle = function(Obj){
	return Math.sqrt((Obj.x-mouse.x)*(Obj.x-mouse.x)+(Obj.y-mouse.y)*(Obj.y-mouse.y))<=Obj.r;
}

var isCursorInTriangle = function(Obj){
		return  ((Obj.ay-Obj.by)*mouse.x+(Obj.bx-Obj.ax)*mouse.y+(Obj.ax*Obj.by-Obj.bx*Obj.ay)<0 &&
				(Obj.by-Obj.cy)*mouse.x+(Obj.cx-Obj.bx)*mouse.y+(Obj.bx*Obj.cy-Obj.cx*Obj.by)>0 &&
				(Obj.ay-Obj.cy)*mouse.x+(Obj.cx-Obj.ax)*mouse.y+(Obj.ax*Obj.cy-Obj.cx*Obj.ay)>0)
				||
				((Obj.ay-Obj.by)*mouse.x+(Obj.bx-Obj.ax)*mouse.y+(Obj.ax*Obj.by-Obj.bx*Obj.ay)>0 &&
				(Obj.by-Obj.cy)*mouse.x+(Obj.cx-Obj.bx)*mouse.y+(Obj.bx*Obj.cy-Obj.cx*Obj.by)<0 &&
				(Obj.ay-Obj.cy)*mouse.x+(Obj.cx-Obj.ax)*mouse.y+(Obj.ax*Obj.cy-Obj.cx*Obj.ay)>0)
				 ||
				((Obj.ay-Obj.by)*mouse.x+(Obj.bx-Obj.ax)*mouse.y+(Obj.ax*Obj.by-Obj.bx*Obj.ay)>0 &&
				(Obj.by-Obj.cy)*mouse.x+(Obj.cx-Obj.bx)*mouse.y+(Obj.bx*Obj.cy-Obj.cx*Obj.by)>0 &&
				(Obj.ay-Obj.cy)*mouse.x+(Obj.cx-Obj.ax)*mouse.y+(Obj.ax*Obj.cy-Obj.cx*Obj.ay)<0);
	}

canvas.onmousemove = function(ev){
	mouse.x=ev.pageX-8,
   	mouse.y=ev.pageY-8;
}

canvas.onmousedown = function(ev){
	if(!selected){
		for(i in rect){
			if(isCursorInRect(rect[i])){
				selected = rect[i];
			}
		}
		for(i in circle){
			if(isCursorInCircle(circle[i])){
				selected = circle[i];
			}
		}
		for(i in triangle){
			console.log(isCursorInTriangle(triangle[i]));
			if(isCursorInTriangle(triangle[i])){
				selected = triangle[i];
			}
		}
	}
	if(selected){
		setInterval(function(){
			if(selected.r){
				selected.x = mouse.x;
				selected.y = mouse.y;
				ctx.clearRect(0,0,width,height);
				drawBackground();
				drawFigures();
				selected.stroke();
			}
			if(selected.w){
				selected.x = mouse.x-selected.w/2;
				selected.y = mouse.y-selected.h/2;
				ctx.clearRect(0,0,width,height);
				drawBackground();
				drawFigures();
				selected.stroke();
			}
			if(selected.ax){

				/*selected.ax = 3*selected.centerx-selected.bx-selected.cx-mouse.x;
				selected.ay = 3*selected.centery-selected.by-selected.cy-mouse.y;
				selected.bx = 3*selected.centerx-selected.ax-selected.cx-mouse.x;
				selected.by = 3*selected.centery-selected.ay-selected.cy-mouse.y;
				selected.cx = 3*selected.centerx-selected.bx-selected.ax-mouse.x;
				selected.cy = 3*selected.centery-selected.by-selected.ay-mouse.y;*/
			//	selected.centerx = mouse.x;
			//	selected.centery = mouse.y;
			//	selected.ax = 2*mouse.x - selected.centerx;
			//	selected.ay = 2*mouse.y - selected.centery;
			//	selected.bx = 2*mouse.x - selected.centerx;
			//	selected.by = 2*mouse.y - selected.centery;
			//	selected.cx = 2*mouse.x - selected.centerx;
			//	selected.cy = 2*mouse.y - selected.centery;
			//	ctx.clearRect(0,0,width,height);
			//	drawBackground();
			//	drawFigures();
			//	selected.stroke();
			}
		},25);
	}
}

canvas.onmouseup = function(ev){
	selected = false;
	ctx.clearRect(0,0,width,height);
	drawBackground();
	drawFigures();
	
}
