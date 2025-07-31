import React, { useRef, useState } from "react";
import TextInput from "../../../InputFields/TextInput";
import OrangeButton from "../../../Button/OrangeButton";
const ContactUser = ({ userDetail, setUserDetail, setStage }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const errorRef = useRef();

  const [error, setError] = useState(0);
  const handleClick = () => {
    if (nameRef.current.value == "") {
      setError(1);
      errorRef.current = "Please enter your name";
    } else if (contactRef.current.value == "") {
      setError(2);
    } else if (emailRef.current.value == "") {
      setError(3);
    } else {
      setError(0);
      setUserDetail({
        username: nameRef.current.value,
        email: emailRef.current.value,
        contactNumber: contactRef.current.value,
      });
      setStage(2);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center relative top-5">
      <TextInput
        label={"Name"}
        placeholder={"Enter your Name"}
        errormessage={errorRef.current}
        ref={nameRef}
        error={error == 1 && true}
      />
      <TextInput
        label={"Email"}
        placeholder={"Enter your email"}
        ref={emailRef}
        error={error == 2 && true}
      />
      <TextInput
        label={"Contact Number"}
        placeholder={"Enter your contact"}
        ref={contactRef}
        error={error == 3 && true}
      />
      <OrangeButton title={"Proceed"} onClick={() => handleClick()} />
    </div>
  );
};

export default ContactUser;
