import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export const ContactList = (props) => {
  const { contact, removeContact } = props;
  console.log(contact, "from contactList");

  return (
    <>
      <div className="contactsHeader">
        {contact.map((val) => {
          const { id, name, email, mobile } = val;
          return (
            <>
              <div className="contacts">
                <div>{name}</div>
                <div>{email}</div>
                <div>{mobile}</div>
                <span onClick={() => removeContact(id)}>
                  <DeleteIcon />
                </span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
