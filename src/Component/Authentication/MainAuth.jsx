import React from "react";
import Signup from "./Signup/Signup";

const MainAuth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <Signup />
      </div>
    </div>
  );
};

export default MainAuth;
