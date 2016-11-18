function drawBackground(){
	ctx.fillStyle = 'grey';
	ctx.fillRect(0,0,width,height);
	for(var i=0; i<=width; i+=50){
		for(var j=0; j<=height; j+=50){
		ctx.beginPath();
		ctx.arc(i, j, 1, 0, Math.PI*2);
		ctx.closePath();
		ctx.fillStyle='black';
		ctx.fill(); 
		}
	}
}
function drawFigures(){
	for(var k=0;k<count;k++){
		if(rect[k]){
			rect[k].draw();
		}
		if(circle[k]){
			circle[k].draw();
		}
		if(triangle[k]){
			triangle[k].draw();
		}
	}
}