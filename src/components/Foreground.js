import React from 'react'
import { Button, Input, Header, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Foreground.css'
const buttons = () => (
	<div className="buttons">
	<Button 
		className="button-ui"
	  color="green"
	  circular 
	  size="massive" 
	  icon="arrow left">
	</Button>
	<Button 
		className="button-ui"
	  color="green"
	  size="massive" 
	  circular 
	icon="arrow right">
	</Button>
	</div>
)

class Foreground extends React.Component {
	componentDidMount() {
	}
	componentDidUpdate(){
	}
	render() {
		return (
			<div className="Foreground">
			<Header as="h1" textAlign="center">
			Score: 0 
			</Header>
			<div className="footer">
			{buttons()}
			</div>
			</div>
		)
	}
}



export default Foreground
