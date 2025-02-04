import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { AddContact } from "./Components/AddContact";
import { ContactList } from "./Components/ContactList";

function App() {
  const [contact, setContact] = useState([]);
  const addContact = (data) => {
    setContact([...contact, data]);
  };

  return (
    <>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} />
    </>
  );
}

export default App;
