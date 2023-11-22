import logo from './logo.svg';
import './App.css';
import { MyContext } from './Components/Mycontext';
import MyComponent from './Components/Mycomponent';
import { useState, React } from 'react';
import Webpages from './Webpages';
import Webpages2 from './Webpages2';
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeForm from './Components/EmployeeForm';
import { red } from '@material-ui/core/colors';
import Online from './Online';

function App() {
  const [text,setText] = useState("Imarticus");
  return (
    <div>

    {/* 
      <MyContext.Provider value={{text,setText}}>
        <MyComponent /> // You  weant to change the MyComponent details... remove the MyComponent and replace the   <Product /> .
      </MyContext.Provider>
        <Online />
         <Webpages />
          <div>
           
          </div>
          */ }
       
       <h1 style={{color:red}}>Adding the Employee details</h1>
            <div class='col'></div>
            <EmployeeForm />
       
    </div>
  );
}

export default App;