import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div className='App'><h3>
                Username:<input type='text' name='text' /><br/>
                Password:<input type='password' name='pass' /><br/>
                <button id='Success' onClick={ans}>
                    Click Here
               
                </button> </h3>
            </div>
        )
    }
}
export default Login;