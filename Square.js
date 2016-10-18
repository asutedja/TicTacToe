import react from 'React'

class Square extends React.component {
	constructor(props) {
		super(props);
	}

	onClick() {
		this.props.marker.exist = true;
	}

	render() {
		return(
		<span>
			{this.props.marker ? (this.props.player ?  <div> XXX </div> : <div> OOO </div> ): null }
		</span>


	)
	}
}

export default Square;