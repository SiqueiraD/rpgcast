
import React, { createRef, Component} from 'react'
import { Map, ImageOverlay } from 'react-leaflet'


class ImageTile extends Component {
	constructor(props) {
		super(props);
		this.state = { bounds: null }
		
		this.handleSize = this.handleSize.bind(this)
	}

	src = URL.createObjectURL(this.props.src)
	
	handleSize(image) {
		if(image!=null){
			this.setState({bounds:[[0,0], [100,300]]})
		}
	}
	
	
	render() { 
		if(this.state.bounds != null){
			return (
				
				<ImageOverlay 
				url= {this.src}
				
				bounds={this.state.bounds}//[[0,0], [85,300]]}
				
				/>
				)
			}
			else{
				return (<img src={this.src} onLoad={image => {this.handleSize(image)}}></img>)  
			}
		}
	}
	
	export default ImageTile;