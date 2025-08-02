import { useState } from "react";
import ContactUser from "./Component/ContactUser";
import PasswordUser from "./Component/PasswordUser";
import AddressUser from "./Component/AddressUser";

const Signup = () => {
  const [userDetail, setUserDetail] = useState({
    username: "",
    contactNumber: "",
    email: "",
    password: "",
    city: "",
    street: "",
    deliveryDescription: "",
    role: "",
  });
  const [stage, setStage] = useState(1);
  console.log(userDetail);
  return (
    <div className="p-3">
      <div className="text-xl font-bold text-orange-500 text-center ">
        Signup
      </div>
      <div>
        {stage == 1 && (
          <ContactUser
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            setStage={setStage}
          />
        )}
        {stage == 2 && (
          <AddressUser
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            setStage={setStage}
          />
        )}{" "}
        {stage == 3 && (
          <PasswordUser
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            setStage={setStage}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
