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
		const stageWidth = window.innerWidth
		const stageHeight = window.innerHeight
		const ratio = DPI(canvas, ctx, stageWidth, stageHeight)
		console.log(ratio)
		if(ratio === 1){
			canvas.width = stageWidth
			canvas.height = stageHeight
		}
		const stage_props = {
			canvas, ctx, mouse, stageWidth, stageHeight, audio,
			oscillator, volumen

		requestAnimationFrame(function gameLoop() {
			ctx.clearRect(0, 0, stageWidth, stageHeight)
			// Start drawing
			  Stage(stage_props)
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
