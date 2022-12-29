import React, { useState } from "react";
import LabelledInput from "../LabelledInput";

const formFields = [
  { id: 1, label: "First Name", type: "text", value: "" },
  { id: 2, label: "Last Name", type: "text", value: "" },
  { id: 3, label: "Email", type: "email", value: "" },
  { id: 4, label: "Date of Birth", type: "date", value: "" },
  { id: 5, label: "Phone number", type: "number", value: "" },
];

export function Form(props: { closeFormCB: () => void }) {
  const [state, setState] = useState(formFields);
  const [newField, setNewField] = useState("");
  const addField = () => {
    setState([
      ...state,
      {
        id: Number(new Date()),
        label: newField,
        type: "text",
        value: " ",
      },
    ]);
    setNewField("");
  };

  const removeField = (id: number) => {
    setState(state.filter((field) => field.id !== id));
  };

  const onChange = (fieldId: number, newValue: string) => {
    // const arr = [1,2,3]
    // const newArr = arr.map((item) => {
    //   if(item === 3)
    //     return 4
    //   else
    //     return item
    // })
    // console.log(newArr)
    // [1,2,4]
    const newState = state.map((field) => {
      if (field.id === fieldId)
        return {
          ...field,
          value: newValue,
        };
      else return field;
    });
    setState(newState);
  };

  // All Form Data will be cleared
  // How should you modify the state to achieve this?
  // set `value = ""` on all the fields
  const clearForm = () => {
    const newState = state.map((field) => {
      return {
        ...field,
        value: "",
      };
    });
    setState(newState);
  };

  return (
    <div className="flex flex-col p-4 divide-y divide divide-dotted">
      <div>
        {state.map((field) => (
          <LabelledInput
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            value={field.value}
            onChangeCB={onChange}
            removeFieldCB={removeField}
          />
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="border-2 border-gray-200 rounded-lg p-2 my-2 flex-1"
          value={newField}
          onChange={(e) => {
            setNewField(e.target.value);
          }}
        />

        <button
          className="border-2 border-blue-500 rounded-lg p-2 m-2 w bottom-full "
          onClick={addField}
        >
          Add Field
        </button>
      </div>

      <div className="flex gap-4">
        <button className="border-2 border-blue-500 rounded-lg p-2 m-2 w bottom-full ">
          Submit
        </button>
        <button
          className="border-2 border-blue-500 rounded-lg p-2 m-2 w bottom-full "
          onClick={props.closeFormCB}
        >
          Close Form
        </button>

        <button
          className="border-2 border-blue-500 rounded-lg p-2 m-2 w bottom-full "
          onClick={clearForm}
        >
          Clear the Form
        </button>
      </div>
    </div>
  );
}

/*<div>
                        <input type=" " value = " " onChange={e =>{ 
                            setNewField(e.target.value)
                        }}/>
                    </div>*/
