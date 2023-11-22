import React from 'react';

class Ticketres extends React.Component{
    render(){
        return(
            <div className='App-header'><justify><h3>
                <h1>Ticket Reservation </h1>
                From  :  <input type='text' name='text' /><br/><br/>
                To &nbsp; :  &nbsp;&nbsp;&nbsp;<input type='text' name='text' /><br/><br/>
                Date  :  <input type='text' name='text' /><br/><br/> 

                <button id='Success' onClick={event => alert(event.target.id)}>
                    check</button>   
                    &nbsp;&nbsp;
                <button id='Success' onClick={event => alert(event.target.id)}>
                    Search Others </button> </h3></justify> 
            </div>
        )
    }
}

export default Ticketres;