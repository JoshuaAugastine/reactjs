
import './App.css';
import ThemeSwitcher from './ThemeSwitcher';
import Sample1 from './Sample1';
import Bike from './Bike';
import Timer from './Timer';
import Button from './Buttons';
import Counter from './Counter';
import Timer1 from './Timer1';
import MouseEvent from './MouseEvent';
import Checkboxlist from './Checkboxlist';
import { useState } from 'react';
import Checklist from './Checklist';

function App() {
  const checkboxes =[' Java', ' React js', ' Git', ' Mangodb'];
  const [checkedState, setcheckedState] = useState(new Array(checkboxes.length).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = checkedState.map((item, idx) =>
    
    idx ===index? !item : item );
    setcheckedState(updatedCheckedState);
  }
  const countCheckedcheckboxes =() =>{
    return checkedState.filter(Boolean).length;
  }
  return (
    <div className="App">
      <h1>select the course you want to learn</h1>
      <Checklist
         checkboxes = {checkboxes}
         checkedState = {checkedState}
         handleCheckboxChange = {handleCheckboxChange} />
     
     <p>
      number of checked checkboxes:
      <strong>{countCheckedcheckboxes()}</strong>
     </p>
     
    
    
    </div>
  );
}

export default App;
