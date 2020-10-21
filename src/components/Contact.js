// import { ReactComponent } from '*.svg';
// import { render } from '@testing-library/react';
import React from 'react'; 
import './contact.css';


class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  status: props.status,
		};
	}	

	render() {
	return (
		<div className="Contact" >
			<img className="avatar" src={this.props.avatar} alt={this.props.name} />

			<div>
				<p className="name">{this.props.name}</p>

				<div className="status" >
					<span className={(this.state.status)? "status-online" : "status-offline"} 

					onClick={event => {
					const newStatus = !this.state.status;
					this.setState({ status: newStatus });
					}}> </span>

					<p className= "status-text"

					onClick={event => {
					const newStatus = !this.state.status;
					this.setState({ status: newStatus });
					}} > {(this.state.status)? "Online" : "Offline"} </p>

			   </div>
			</div>

		</div>
		)
	}
}
export default Contact; 


