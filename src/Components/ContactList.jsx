import React from "react";

export const ContactList = ({ contact }) => {
  console.log(contact, "from contactList");

  return (
    <>
      <div className="contactsHeader">
      {contact.map((val) => {
        const { name, email, mobile } = val;
        return (
          <>
            <div key={email} className="contacts">
              <div>{name}</div>
              <div>{email}</div>
              <div>{mobile}</div>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
};
