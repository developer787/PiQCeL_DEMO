import React, { Component } from 'react'

import './App.css'
import Canvas from './components/Canvas'
import Foreground from './components/Foreground'







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

export default App;
