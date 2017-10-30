import React from 'react'

import './Foreground.css'

class Foreground extends React.Component {
	componentDidMount() {
	}
	componentDidUpdate(){
	}
	render() {
		return (
			<div className="Foreground">
			  <div className="header">
			  <p> Score: 0 </p>
			  </div>
			  <div className="footer">
			  <button>
			{"<"}
			  </button>
			  <button>
			{">"}
			  </button>
			  </div>
			</div>
		)
	}
}



export default Foreground
