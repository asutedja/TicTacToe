import React from 'react'
import {render} from 'react-dom'
import Square from './Square.js'


class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			row1:[],
			row2:[],
			row3:[],
			player: false
		}
	}

	componentWillMount() {

		this.setState({
			row1:[{exist:false}, {exist:false}, {exist:false}], 
		   row2:[{exist:false}, {exist:false}, {exist:false}], 
		   row3:[{exist:false}, {exist:false}, {exist:false}] 
		})
	}

	onClick(marker) {
		this.setState {
			marker: marker,
			player: !this.state.player,
		}
	}


	render() {
		return (
			<div>
			 <div>
			{this.state.row1.map( (marker) =>
				<Square marker={marker} player={this.state.player} />
			)}
			 </div>

			  <div>
			 {this.state.row2.map( (marker) =>
			 	<Square marker={marker} player={this.state.player}/>
			 )}
			  </div>

			   <div>
			  {this.state.row3.map( (marker) =>
			  	<Square marker={marker} player={this.state.player}/>
			  )}
			   </div>
			</div>
			)
	}
} 
render(<Game/>, document.getElementById('app'));

