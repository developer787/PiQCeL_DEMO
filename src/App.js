import React, { Component } from 'react'
import { connect } from "react-redux"

import './App.css'
import Canvas from './components/Canvas'
import Foreground from './components/Foreground'



const mapStateToProps = (state, ownProps)=>({
	count: state.counter.count
})

const mapDispatchToProps = ()=>({})



class App extends Component {
	render() {
		return (
			<div className="App">
			<Foreground />
			<Canvas />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
