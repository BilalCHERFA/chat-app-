import React from 'react'; 
import './contact.css';


function Contact(props) {
	return (
		<div className="Contact" >
			<img className="avatar" src={props.avatar} alt={props.name} />

			<div>
				<p className="name">{props.name}</p>
				<div className="status" >
				<div className={(props.status)? "status-online" : "status-offline"} />
				<p className="status-text">{(props.status)? 'Online' : 'Offline'} </p>
			</div>
			</div>
		</div>
		)
	}

export default Contact; 
