import { useState,useEffect, useContext } from "react";
import './App.css';

function Online(){
    //Online state
    const [isOnline,setIsOnline] =useState(navigator.onLine);

    useEffect(() => {
        //Update Network Status
        const handleStausChange =()=>{
            setIsOnline(navigator.onLine);
        };

        // Listen to the online status
        window.addEventListener('online',handleStausChange);
        
        //Listen to the offline status
        window.addEventListener('offline',handleStausChange);

        //Specify how to clean up after this effect for performance improvement

        return()=>{
            window.removeEventListener('online',handleStausChange);
            window.removeEventListener('offline',handleStausChange);
        };
    },[isOnline]);
    return(
        <div className="container">
            <h3> Welcome to the Imarticus.com</h3>
            <p>Turn On/Off your Wifi to see what happens</p>
            {isOnline ? (
                <h1 className="online"> You Are Online</h1>
            ):(
                <h1 className="offline"> You Are Offline</h1>
            )}
             </div>
    );
}
export default Online;