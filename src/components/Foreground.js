import React from 'react'
import { Button, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Foreground.css'
const buttons = (props) => {
	const {INC, DEC, LEFT, RIGHT } = props
	return (
		<div className="buttons">
		<Button 
		onClick={LEFT}
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
}

class Foreground extends React.Component {
	componentDidMount() {
	}
	componentDidUpdate(){
	}
	render() {
		const { count, INC, DEC, LEFT, RIGHT } = this.props
		const props = {
			INC,
			DEC,
			LEFT,
			RIGHT
		}
		return (
			<div className="Foreground">
			<Header as="h1" textAlign="center">
			Score: {count} 
			</Header>
			<div className="footer">
			{buttons(props)}
			</div>
			</div>
		)
	}
}



export default Foreground
