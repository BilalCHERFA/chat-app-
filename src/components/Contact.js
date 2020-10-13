import React from 'react'; 
import './contact.css';

function Contact(){
    const avatar = 'https://randomuser.me/api/portraits/women/91.jpg'; 
    const name = "Dark Pacman";
    const status = true;

    return(
        <div className='Contact'>
           <img src ={avatar} className= 'avatar'/> 

           <div className='status'>

                <h4 className= 'name'> {name} </h4>
                <span className= {(status)? "status-online" : "status-offline"}></span> 
                <p className='status-text'> {(status)?  'Online' : 'Offline'} </p>
           
           </div>
            

      
        </div>


    )
}

export default Contact;