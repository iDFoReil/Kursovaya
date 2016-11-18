function addTriangle(){
	var getAx = document.getElementById('setTriangleAx'),
		getAy = document.getElementById('setTriangleAy'),
		getBx = document.getElementById('setTriangleBx'),
		getBy = document.getElementById('setTriangleBy'),
		getCx = document.getElementById('setTriangleCx'),
		getCy = document.getElementById('setTriangleCy');

	var fillTriangle = function(ax,ay,bx,by,cx,cy){
		ctx.fillStyle = 'rgb(0,255,0)';
		ctx.beginPath();
		ctx.moveTo(ax,ay);
		ctx.lineTo(bx,by);
		ctx.lineTo(cx,cy);
		ctx.closePath();
		ctx.fill();
	}
	var strokeTriangle = function(ax,ay,bx,by,cx,cy){
		ctx.strokeStyle = 'rgb(0,0,255)';
		ctx.beginPath();
		ctx.moveTo(ax,ay);
		ctx.lineTo(bx,by);
		ctx.lineTo(cx,cy);
		ctx.lineTo(ax,ay);
		ctx.closePath();
		ctx.stroke();
	}
	//var Triangle = function(ax,ay,bx,by,cx,cy){
	//	this.centerx = Math.floor(ax+bx+cx)/3;
	//	this.centery =  Math.floor(ay+by+cy)/3;
	//	this.ax = 3*this.centerx-bx-cx;
	//	this.ay = 3*this.centery-by-cy;
	//	this.bx = 3*this.centerx-ax-cx;
	//	this.by = 3*this.centery-ay-cy;
	//	this.cx = 3*this.centerx-ax-bx;
	//	this.cy = 3*this.centery-ay-by;
	//};
	var Triangle = function(ax,ay,bx,by,cx,cy){
		this.ax = ax;
		this.ay = ay;
		this.bx = bx;
		this.by = by;
		this.cx = cx;
		this.cy = cy;
		this.centerx = Math.floor(ax+bx+cx)/3;
		this.centery =  Math.floor(ay+by+cy)/3;
	};
	Triangle.prototype = {
		draw: function(){
			fillTriangle(this.ax,this.ay,this.bx,this.by,this.cx,this.cy);
		},
		stroke: function(){
			strokeTriangle(this.ax,this.ay,this.bx,this.by,this.cx,this.cy);
		},
	}

	
	var i = triangle.length;

	triangle.push(new Triangle(+getAx.value,+getAy.value,+getBx.value,+getBy.value,+getCx.value,+getCy.value));
	count++;
	triangle[i].draw();
 };