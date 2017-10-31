import React, { Component } from 'react'
import { connect } from "react-redux"

import './App.css'
import Canvas from './components/Canvas'
import Foreground from './components/Foreground'



const mapStateToProps = (state, ownProps)=>({
	count: state.counter.count,
	x: state.circle.x
})

const mapDispatchToProps = (dispatch)=>({
	INC: ()=>dispatch({type: "INC"}),
	DEC: ()=>dispatch({type: "DEC"}),
	LEFT: ()=>dispatch({type: "LEFT"}),
	RIGHT: ()=>dispatch({type: "RIGHT"})
})



class App extends Component {
	render() {
		const { x, count, INC, DEC, LEFT, RIGHT } = this.props
		return (
			<div className="App">
			<Foreground 
			  count={count}
			  LEFT={LEFT} 
			  RIGHT={RIGHT} 
			  DEC={DEC} 
			  INC={INC} />
			<Canvas ballx={x}/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
