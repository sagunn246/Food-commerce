import React, { useRef, useState } from "react";
import TextInput from "../../../InputFields/TextInput";
import OrangeButton from "../../../Button/OrangeButton";

const AddressUser = ({ userDetail, setUserDetail, setStage }) => {
  const cityRef = useRef();
  const streetRef = useRef();
  const deliveryDescriptionRef = useRef();

  const [errorType, setErrorType] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNext = () => {
    if (
      !cityRef.current.value.trim() ||
      cityRef.current.value.trim().length < 2
    ) {
      setErrorType(1);
      setErrorMessage(
        "Please enter a valid city name (at least 2 characters)."
      );
    } else if (!streetRef.current.value.trim()) {
      setErrorType(2);
      setErrorMessage("Please enter a valid street address.");
    } else if (!deliveryDescriptionRef.current.value.trim()) {
      setErrorType(3);
      setErrorMessage("Please provide a delivery description.");
    } else {
      setErrorType(0);
      setErrorMessage("");
      setUserDetail((prevDetails) => ({
        ...prevDetails,
        city: cityRef.current.value.trim(),
        street: streetRef.current.value.trim(),
        deliveryDescription: deliveryDescriptionRef.current.value.trim(),
      }));
      setStage(3);
    }
  };

  return (
    <div className="flex flex-col gap-5 p-4">
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Delivery Address
      </h3>
      <TextInput
        label="City"
        placeholder="e.g., Pokhara"
        errormessage={errorType === 1 ? errorMessage : ""}
        ref={cityRef}
        error={errorType === 1}
      />
      <TextInput
        label="Street"
        placeholder="e.g., Lakeside Road"
        errormessage={errorType === 2 ? errorMessage : ""}
        ref={streetRef}
        error={errorType === 2}
      />
      <TextInput
        label="Delivery Description (Optional)"
        placeholder="e.g., Near ABC Mart, 3rd floor"
        errormessage={errorType === 3 ? errorMessage : ""}
        ref={deliveryDescriptionRef}
        error={errorType === 3}
      />
      <div className="w-full mt-4">
        <OrangeButton title="Proceed" onClick={handleNext} />
      </div>
    </div>
  );
};

export default AddressUser;
