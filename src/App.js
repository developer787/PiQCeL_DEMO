import React, { Component } from 'react'
import { connect } from "react-redux"

import './App.css'
import Canvas from './components/Canvas'
import Foreground from './components/Foreground'



const mapStateToProps = (state, ownProps)=>({
	count: state.counter.count
})

const mapDispatchToProps = (dispatch)=>({
	INC: ()=>dispatch({type: "INC"}),
	DEC: ()=>dispatch({type: "DEC"})
})



class App extends Component {
	render() {
		const { count, INC, DEC } = this.props
		return (
			<div className="App">
			<Foreground 
			  count={count}
			  DEC={DEC} 
			  INC={INC} />
			<Canvas />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
