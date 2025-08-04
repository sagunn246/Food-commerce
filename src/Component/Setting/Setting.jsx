import React from "react";
import NavBar from "../NavBar/NavBar";
import General from "./components/General";
import Location from "./Components/Location";
import Password from "./Components/Password";
import DeleteAccount from "./components/DeleteAccount";

const Setting = () => {
  return (
    <div className="p-20 flex flex-col h-[100vh]">
      <NavBar />
      <div className=" flex flex-col my-4 gap-4">
        <General />
        <Location />
        <Password />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Setting;
