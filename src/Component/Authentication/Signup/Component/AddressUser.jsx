import React from "react";
import TextInput from "../../../InputFields/TextInput";
import OrangeButton from "../../../Button/OrangeButton";
import { useState } from "react";
import { useRef } from "react";

const AddressUser = ({ userDetail, setUserDetail, setStage }) => {
  const cityRef = useRef();
  const streetRef = useRef();
  const [error, setError] = useState(0);
  const deliveryDescriptionRef = useRef();
  const errorMessageRef = useRef();
  const handleNext = () => {
    if (cityRef.current.value == "" || cityRef.current.value.length < 2) {
      errorMessageRef.current = "Name should be provided Correctly";
      setError(1);
    } else if (streetRef.current.value == "") {
      errorMessageRef.current = "Provide Valid State";
      setError(2);
    } else if (deliveryDescriptionRef.current.value == "") {
      errorMessageRef.current = "Provide Valid description";
      setError(3);
    } else {
      setError(0);
      errorMessageRef.current = null;
      let username = userDetail.username;
      let contactNumber = userDetail.contactNumber;
      let email = userDetail.email;
      setUserDetail({
        username: username,
        contactNumber: contactNumber,
        email: email,
        city: cityRef.current.value,
        street: streetRef.current.value,
        deliveryDescription: deliveryDescriptionRef.current.value,
      });
      setStage(3);
    }
  };
  return (
    <div>
      <TextInput
        error={error == 1 && true}
        label={"city"}
        placeholder={"Enter city"}
        ref={cityRef}
        errormessage={"errormessageRef"}
      />
      <TextInput
        error={error == 2 && true}
        label={"Street"}
        placeholder={"Enter street"}
        ref={streetRef}
        errormessage={"errormessageRef"}
      />
      <TextInput
        error={error == 3 && true}
        label={"Delivery Description"}
        placeholder={"Enter Delivery Description"}
        ref={deliveryDescriptionRef}
        errormessage={"errormessageRef"}
      />
      <div>
        <OrangeButton title={"Proceed"} onClick={() => handleNext()} />
      </div>
    </div>
  );
};

export default AddressUser;
