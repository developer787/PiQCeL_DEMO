import React from "react"
class Ball extends React.Component {
	draw(props){
		const { 
			ctx, x, y, radius, color} = props
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fillStyle = color;
		ctx.fill();
	}
}

 export default Ball
/*
	x: 100,
	y: 100,
	vx: 5,
	vy: 2,
	radius: 25,
	color: 'blue',
	move: options =>{
		const w = options.stageWidth
		const h = options.stageHeight
		ball.x += ball.vx
		ball.y += ball.vy
		if (ball.y + ball.vy > h || ball.y + ball.vy < 0) {
			ball.vy = -ball.vy;
		}
		if (ball.x + ball.vx > w || ball.x + ball.vx < 0) {
			ball.vx = -ball.vx;
		}
	},
	draw: function(options) {
		const { ctx } = options
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
	*/
