import React from "react";
import { useState } from "react";
import Signup from "./Signup/Signup";
import login from "./Login/login";
const MainAuth = () => {
  const [screen, setScreen] = useState();
  return (
    <div className="bg-white flex h-[100vh] justify-center items-center">
      <div className="w-110 border border-slate-100 rounded-xl shadow-lg shadow-black/50 bg-white h-110">
        {screen ? (
          <Signup setScreen={setScreen} />
        ) : (
          <login setScreen={setScreen} />
        )}
        <Signup />
        <login />
      </div>
    </div>
  );
};

export default MainAuth;
