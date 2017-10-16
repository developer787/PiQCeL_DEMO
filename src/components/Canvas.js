import React from 'react'
import Stage from './Stage'
import DPI from 'canvas-dpi-scaler'


class Canvas extends React.Component {
	componentDidMount() {
		this.updateCanvas()
	}
	componentDidUpdate(){
		this.updateCanvas()
	}
	updateCanvas() {
		const audio = new (window.AudioContext || window.webkitAudioContext)()
		const oscillator = audio.createOscillator()
		const volumen = audio.createGain()
		oscillator.type = "sawtooth";
		oscillator.frequency.value = 500;
		oscillator.connect(audio.destination);

		const ctx = this.refs.canvas.getContext('2d')
		const canvas = this.refs.canvas
		const mouse = new MouseEvent(canvas)
		const vw = window.innerWidth
		const vh = window.innerHeight
		const ratio = DPI(canvas, ctx, vw, vh)
		console.log(ratio)
		if(ratio === 1){
			canvas.width = vw
			canvas.height = vh
		}

		requestAnimationFrame(function gameLoop() {
			ctx.clearRect(0, 0, vw, vh)
			// Start drawing
			  Stage(ctx, vw, vh, audio, mouse, oscillator, volumen)
			// End Drawing
			requestAnimationFrame(gameLoop)
		})
	}
	render() {
		return (
			<canvas ref="canvas"/>
		)
	}
}



export default Canvas
