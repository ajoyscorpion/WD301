import React, { useState } from "react";
import LabelledInput from "../LabelledInput";


const formFields = [
    { id: 1, label: "First Name", type:"text", value:""},
    { id: 2, label: "Last Name", type:"text", value:""},
    { id: 3, label: "Email",type:"email", value:""},
    { id: 4, label: "Date of Birth",type:"date",value:""},
    { id: 5, label: "Phone number",type:"number",value:""},
  ];

export function Form( props: {closeFormCB: () => void,}) {
    
    const[state,setState] = useState(formFields);
    const[newField,setnewField] = useState("");
    const addField = () => {
        setState([
            ...state,
            {
                id: Number(new Date()), 
                label:newField, 
                type:"text",
                value:"",
            },
        ]);
        setnewField("New value");
    };

    const removeField = (id: number) => {
        setState(
            state.filter(field => field.id !== id)
        )
    }

    const fieldValueAdd = (id:number,value:string) => {
        setState(state.filter(field => field.id !== id)
        )    
    }

    return (
        <div className="flex flex-col gap-2 p-4 divide-y-2 divide-dotted">
            <div>
            {state.map(field => (
                <LabelledInput 
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    type = {field.type}
                    value={field.value}
                    removeFieldCB={removeField}
                    fieldValueAddCB={fieldValueAdd}
            />
                  
            ))}
            </div>

            <div className= "flex gap-2">
            <input 
                type="text" 
                className = "border-2 border-gray-200 rounded-lg p-2 m-2 flex-1"
                value={newField}
                onChange={e=> {
                    setnewField(e.target.value);

                }}  
            />
            <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-lg' 
                onClick={addField}
            >
                Add Field
            </button>
            </div>
            <div className="flex gap-4">
                <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-lg'>
                  Submit
                </button>
               
                <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-lg' 
                onClick={props.closeFormCB}
            >
                Close Form
            </button>
            
          </div>
        </div>  
    )
}