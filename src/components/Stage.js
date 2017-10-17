const ball = {
	x: 100,
	y: 100,
	vx: 5,
	vy: 2,
	radius: 25,
	color: 'blue',
	move: options =>{
		const w = options.stageWidth
		const h = options.stageHeight
		const oscillator = options.oscillator
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
}
const Circle = (options)=>{
	options.ctx.beginPath()
	options.ctx.arc(options.stageWidth/2,options.stageHeight/2,50,0,Math.PI * 2, true)
	options.ctx.fillStyle = "#000000"
	options.ctx.fill()
	options.ctx.closePath()
}
const Nose = (options)=>{
	options.ctx.beginPath()
	options.ctx.arc(options.stageWidth/2,options.stageHeight/2 + 6,8,0,Math.PI * 2, true)

	options.ctx.fillStyle = "#FFFFFF"
	options.ctx.fill()
	options.ctx.stroke()
	options.ctx.closePath()
}
const Eyes = (options)=>{
	options.ctx.beginPath()
	options.ctx.arc(options.stageWidth/2 - 5,options.stageHeight/2 - 5,5,0,Math.PI * 2, true)
	options.ctx.arc(options.stageWidth/2 + 5,options.stageHeight/2 - 5,5,0,Math.PI * 2, true)

	options.ctx.fillStyle = "#FFFFFF"
	options.ctx.fill()
	options.ctx.closePath()
}
const EyeBrows = (options)=>{
	const w = options.stageWidth
	const h = options.stageHeight
	options.ctx.beginPath()
	options.ctx.lineWidth = "4"
	options.ctx.moveTo(w/2 - 16, h/2 - 22 )
	options.ctx.bezierCurveTo(w/2 - 12, h/2-30, w/2 - 8, h/2 -16, w/2 - 4, h/2 - 22 )
	options.ctx.moveTo(w/2 + 4, h/2 - 22 )
	options.ctx.bezierCurveTo(w/2 + 8, h/2 - 16, w/2 + 12, h/2 -30, w/2 + 16, h/2 - 22 )

	options.ctx.strokeStyle = "#FFFFFF"
	options.ctx.stroke()
	options.ctx.closePath()
}
const Mouth = (options)=>{
	options.ctx.beginPath()
	options.ctx.rect(options.stageWidth/2-10,options.stageHeight/2 + 18,20,10)

	options.ctx.fillStyle = "#FFFFFF"
	options.ctx.fill()
	options.ctx.stroke()
	options.ctx.closePath()
}
export default (stage_props) => {
	const {canvas, ctx, stageWidth, StageHeight, mouse, audio, oscillator} = stage_props
	const options = {
		ctx,
		stageWidth,
		stageHeight
		audio,
		oscillator,
		volumen
	}
	// Your artwork starts here...

	Circle(options)
	Mouth(options)
	Eyes(options)
	EyeBrows(options)
	Nose(options)
	ball.draw(options)
	ball.move(options)

	// And it ends here.
}    
