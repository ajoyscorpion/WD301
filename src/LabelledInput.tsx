import React from "react";

export default function LabelledInput(props: {
  id: number;
  label: string;
  type: string;
  value: string;
  onChangeCB: (id: number, value: string) => void;
  removeFieldCB: (id: number) => void;
}) {
  return (
    <>
      <label>{props.label}</label>
      <div className="flex gap-2">
        dd
        <input
          className="border-2 border-gray-200 rounded-lg p-2 my-2 flex-1"
          type={props.type}
        />
        <input
          type="text"
          value={props.value}
          onChange={(e) => {
            props.onChangeCB(props.id, e.target.value);
          }}
        />
        <button
          className="border-2 border-blue-500 rounded-lg p-2 m-2 w bottom-full "
          onClick={(_) => props.removeFieldCB(props.id)}
        >
          Remove
        </button>
      </div>
    </>
  );
}
