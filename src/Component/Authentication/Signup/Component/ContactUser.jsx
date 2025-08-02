import React, { useRef, useState } from "react";
import TextInput from "../../../InputFields/TextInput";
import OrangeButton from "../../../Button/OrangeButton";

const ContactUser = ({ userDetail, setUserDetail, setStage }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();

  const [errorType, setErrorType] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    if (!nameRef.current.value.trim()) {
      setErrorType(1);
      setErrorMessage("Please enter your name.");
    } else if (!emailRef.current.value.trim()) {
      setErrorType(2);
      setErrorMessage("Please enter your email address.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)) {
      setErrorType(2);
      setErrorMessage("Please enter a valid email address.");
    } else if (!contactRef.current.value.trim()) {
      setErrorType(3);
      setErrorMessage("Please enter your contact number.");
    } else {
      setErrorType(0);
      setErrorMessage("");
      setUserDetail((prevDetails) => ({
        ...prevDetails,
        username: nameRef.current.value.trim(),
        email: emailRef.current.value.trim(),
        contactNumber: contactRef.current.value.trim(),
      }));
      setStage(2);
    }
  };

  return (
    <div className="flex flex-col gap-5 p-4">
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Contact Information
      </h3>
      <TextInput
        label="Name"
        placeholder="Your full name"
        errormessage={errorType === 1 ? errorMessage : ""}
        ref={nameRef}
        error={errorType === 1}
      />
      <TextInput
        label="Email"
        type="email"
        placeholder="your@example.com"
        errormessage={errorType === 2 ? errorMessage : ""}
        ref={emailRef}
        error={errorType === 2}
      />
      <TextInput
        label="Contact Number"
        type="tel"
        placeholder="e.g., 98XXXXXXXX"
        errormessage={errorType === 3 ? errorMessage : ""}
        ref={contactRef}
        error={errorType === 3}
      />
      <div className="w-full mt-4">
        <OrangeButton title="Proceed" onClick={handleClick} />
      </div>
    </div>
  );
};

export default ContactUser;
