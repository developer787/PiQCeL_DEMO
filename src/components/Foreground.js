import React from 'react'
import { Button, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Foreground.css'
const buttons = (INC, DEC) => (
	<div className="buttons">
	<Button 
	  onClick={DEC}
		className="button-ui"
	  color="green"
	  circular 
	  size="massive" 
	  icon="arrow left">
	</Button>
	<Button 
	  onClick={INC}
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
		const { INC, DEC } = this.props
		return (
			<div className="Foreground">
			<Header as="h1" textAlign="center">
			Score: 1{this.props.count} 
			</Header>
			<div className="footer">
			{buttons(INC, DEC)}
			</div>
			</div>
		)
	}
}



export default Foreground
