import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { AddContact } from "./Components/AddContact";
import { ContactList } from "./Components/ContactList";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  const addContact = (data) => {
    setContact([...contact, { id: uuid4(), ...data }]);
  };

  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updatedList);
  };
  return (
    <>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
    </>
  );
}

export default App;
