import OrangeButton from "../../../Button/OrangeButton";
import { useRef, useState } from "react";
import TextInput from "../../../InputFields/TextInput";
import signApi from "../../../Api/Auth/signApi";
import { useNavigate } from "react-router-dom";

const PasswordUser = ({ userDetail, setUserDetail, setStage }) => {
  const navigate = useNavigate();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [fieldError, setFieldError] = useState(null);
  const [fieldErrorMessage, setFieldErrorMessage] = useState("");
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!password || password.length < 2) {
      setFieldError(1);
      setFieldErrorMessage("Password should be at least 2 characters long");
      return;
    }

    if (confirmPassword !== password) {
      setFieldError(2);
      setFieldErrorMessage("Password and Confirm Password don't match");
      return;
    }

    setFieldError(null);
    setFieldErrorMessage("");
    setFormErrorMessage("");

    const updatedDetails = {
      ...userDetail,
      password,
    };

    setUserDetail(updatedDetails);

    signApi(
      updatedDetails,
      setStage,
      setUserDetail,
      navigate,
      setFormErrorMessage
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 justify-center items-center relative top-5 w-full max-w-sm"
    >
      {formErrorMessage && (
        <div className="text-red-500 text-sm mb-2 text-center">
          {formErrorMessage}
        </div>
      )}

      <TextInput
        label="Password"
        placeholder="Enter your password"
        ref={passwordRef}
        error={fieldError === 1}
        errorMessage={fieldError === 1 ? fieldErrorMessage : ""}
      />
      <TextInput
        label="Confirm Password"
        placeholder="Confirm your password"
        ref={confirmPasswordRef}
        error={fieldError === 2}
        errorMessage={fieldError === 2 ? fieldErrorMessage : ""}
      />
      <OrangeButton title="Proceed" type="submit" />
    </form>
  );
};

export default PasswordUser;
