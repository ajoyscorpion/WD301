import React, {useState} from 'react';
import AppContainer from './AppContainer';
import { Form } from './components/Form';
import { Home } from './components/Home';
import Header from "./Header"



function App() {

  const [state,setState] = useState("HOME");

  const openForm =() => {
    setState("FORM");
  };

  const closeForm = () => {
    setState("HOME");
  };

  return (
    <AppContainer>
      <div className="p-4 mx-auto bg-white shadow-lg rounded-xl">
      <Header 
        title ={"Welcome to Lesson 5 of $react-typescript with #tailwindcss"}
      />
  
        {state === "HOME" ? (
            <Home openFormCB={openForm}/>

      ) : (
        <Form closeFormCB={closeForm}/>

        )}
     
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
