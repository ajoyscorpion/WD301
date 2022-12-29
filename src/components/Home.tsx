import React from "react";
import logo from "../logo.svg"; 

export function Home (props: {openFormCB: () => void}) {
    return( 
        <div className = "flex flex-col justify-center">
         <div className="flex">
    
            <img className = "h-48" src={logo}/>
            <div className = " flex-1  flex items-center justify-center h-48">
                <p>Welcome to the Home Page</p>
            </div>
    
        </div>
            <button
            className="border-2 border-blue-500 rounded-lg p-2 m-2 w bottom-full "
            onClick={props.openFormCB}
            >
            Open Form
            </button>
        </div>
       )
}
