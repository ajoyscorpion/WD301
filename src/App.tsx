import React from 'react';
import AppContainer from './AppContainer';
import Header from "./Header"


const formFields = [
  { id: 1, label: "First Name", type:"text"},
  { id: 2, label: "Last Name", type:"text"},
  { id: 3, label: "Email",type:"email"},
  { id: 4, label: "Date of Birth",type:"date"},
  { id: 5, label: "Phone number",type:"number"},
];

function App() {
  return (
    <AppContainer>
      <div className="p-4 mx-auto bg-white shadow-lg rounded-xl">
      <Header 
        title ={"Welcome to Lesson 5 of $react-typescript with #tailwindcss"}
      />
      
      {
        formFields.map(field => (
          
          <React.Fragment key={field.id}>
            <label>{field.label}</label>
            <label></label>
            <input className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full" type={field.type}  />
           
          </React.Fragment>
          
        ))
      }
      
      <div>
        <button color= "blue" className="border-2 border-blue-500 rounded-lg p-2 m-2 w bottom-full ">Submit</button>
      </div>
      
      </div>
    </AppContainer>
  );
}

export default App;





/*const formFields = [
  {id: 1, label:"First Name" }, 
  {id: 2, label:"Last Name" }, 
  {id: 3, label:"Email" },
  {id: 4, label:"Date of Birth"},
  {id: 5, label:"Phone Number"},
];


className="border-2 border-blue-500 rounded-lg p-2 m-2 w bottom-full "*/
