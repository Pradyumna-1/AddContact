import React, { useState } from "react";

export const AddContact = ({ addContact }) => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else if (e.target.name === "email") {
      setContactData({ ...contactData, email: e.target.value });
    } else {
      setContactData({ ...contactData, mobile: e.target.value });
    }
  };

  const handleClick = () => {
    if (
      contactData.name === "" ||
      contactData.email === "" ||
      contactData.mobile === ""
    ) {
      alert("Fill all the  details");
      return;
    } else {
      addContact(contactData);
      setContactData({ name: "", email: "", mobile: "" });
    }
  };
  return (
    <div className="formHeader">
      <div className="add-contact">Add Contact</div>
      <form action="">
        <label htmlFor="">Name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Email:</label>
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Mobile:</label>
        <br />
        <input
          type="tel"
          placeholder="Enter your Mobile"
          name="mobile"
          value={contactData.mobile}
          onChange={handleChange}
        />
      </form>
      <button className="btn" onClick={handleClick}>
        Add Contact
      </button>
    </div>
  );
};

// export default AddContact;
