import React, {useState} from 'react';
function Sample1(){
          const[name,name1]= useState('joshua');
          return(
            <div>
                <h1>{name}</h1>
                <button type="button" onClick={()=>name1('joe')}>Click</button>
                <button type="button" onClick={()=>name1('jo')}>Click</button>
                <button type="button" onClick={()=>name1('j')}>Click</button>
            </div>
          )
}

export default Sample1;