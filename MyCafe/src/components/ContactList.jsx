import React from "react";

const ContactList = ({title, contact}) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center
      md:flex-row">
      <p className="text-2xl">{title}</p>
      <p className="text-2xl underline">{contact}</p>
    </div>
  );
};

export default ContactList;
