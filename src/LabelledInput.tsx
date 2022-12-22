import React from "react";

export default function LabelledInput(props: {
    id: number;
    label: string;
    type: string;
    value: string;
    removeFieldCB: (id:number) => void;
    fieldValueAddCB: (id:number, value:string) => void;
}) {
    return(
        <>
        <label >{props.label}</label>
        <div className="flex gap">
            <input 
                className ="border-2 border-gray-200 rounded-lg p-2 m-2 flex-1" 
                type={props.type} 
            />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-lg' 
                onClick={(_) => props.removeFieldCB(props.id)}
            >
                Remove
            </button>

            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-lg' 
                onClick={(_) => props.fieldValueAddCB(props.id,props.value)}
            >
                Clear Form
            </button>

        </div>
        </>
    );
}