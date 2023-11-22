import React from 'react';

class Feedback extends React.Component{
    render(){
        return( 
            <div className='App-header'><justify><h3>
            <h1> Feedback </h1>
            <input type='text' name='text' className='button1'  value={"what kind of feedback do you have ?" }/> <br/><br/>
            <input type='text' name='text' className='button2'  value={"what's on your mind ?" }/> <br/><br/>
            
            <h4>how would you rate our site ?</h4>
             <h3>*****&nbsp;&nbsp;****&nbsp;&nbsp;***&nbsp;&nbsp;**&nbsp;&nbsp;*</h3>

            <button id='Success' onClick={event => alert(event.target.id)}>
                Submit</button>   
                &nbsp;&nbsp;
            <button id='Success' onClick={event => alert(event.target.id)}>
                Another response </button> </h3></justify> 
        </div>
        )
    }
    
}

export default Feedback;