import React, { useEffect } from "react";
import ContactList from "../components/ContactList";

const Contact = () => {
  useEffect(()=>{
      document.title = "Contact | MyCafe";
    },[]);

  return (
    <div className="my-10 font-roboto animate-fade">
      <h1 className="text-4xl font-bold text-center">
        <i>We Would Love to Hear From You</i>
      </h1>
      <div className="flex flex-col gap-5 mt-5">
        <ContactList title={"Contact us by phone:"} contact={"123456789"} />
        <ContactList title={"Contact us by mail:"} contact={"test@mail.com"} />
        <ContactList title={"For Chef/Owner John doe:"} contact={"@Johndoe"} />
        <ContactList title={"For General Inquiries:"} contact={"test@test.com"} />
      </div>
    </div>
  );
};

export default Contact;
