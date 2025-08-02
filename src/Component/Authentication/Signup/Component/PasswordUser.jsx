import OrangeButton from "../../../Button/OrangeButton";
import { useRef, useState } from "react";
import TextInput from "../../../InputFields/TextInput";
import signApi from "../../../Api/Auth/signApi";
import { useNavigate } from "react-router-dom";

const PasswordUser = ({ userDetail, setUserDetail, setStage }) => {
  const navigate = useNavigate();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleProceed = () => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!password || password.length < 2) {
      setError(1);
      setErrorMessage("Password should be at least 2 characters long");
      return;
    }

    if (confirmPassword !== password) {
      setError(2);
      setErrorMessage("Password and Confirm Password don't match");
      return;
    }

    setError(null);
    setErrorMessage("");

    const updatedDetails = {
      ...userDetail,
      password: password,
    };

    setUserDetail(updatedDetails);

    // ✅ Pass setStage correctly
    signApi(updatedDetails, setStage, setUserDetail, navigate);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center relative top-5">
      <TextInput
        label="Password"
        placeholder="Enter your password"
        ref={passwordRef}
        error={error === 1}
        errorMessage={error === 1 ? errorMessage : ""}
      />
      <TextInput
        label="Confirm Password"
        placeholder="Confirm your password"
        ref={confirmPasswordRef}
        error={error === 2}
        errorMessage={error === 2 ? errorMessage : ""}
      />
      <OrangeButton title="Proceed" onClick={handleProceed} />
    </div>
  );
};

export default PasswordUser;
