import React from "react";
// Import icons (you'll need to install react-icons or similar)
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa"; // Example: npm install react-icons

const TextInput = React.forwardRef(
  ({ label, placeholder, errormessage, error, icon, ...props }, ref) => {
    const getIcon = () => {
      switch (icon) {
        case "user":
          return <FaUser className="text-gray-400" />;
        case "envelope":
          return <FaEnvelope className="text-gray-400" />;
        case "phone":
          return <FaPhone className="text-gray-400" />;
        default:
          return null;
      }
    };

    return (
      <div className="w-full mb-3">
        <label
          htmlFor={label}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-3 text-gray-400 pointer-events-none z-10">
              {getIcon()}
            </div>
          )}
          <input
            type="text"
            id={label}
            placeholder={placeholder}
            ref={ref}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-200
              ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-orange-500"
              }
              ${icon ? "pl-10" : "pl-4"} // Adjust padding if icon is present
            `}
            {...props}
          />
        </div>
        {error && (
          <p className="text-red-500 text-xs mt-1 transition-all duration-300 animate-fade-in-down">
            {errormessage}
          </p>
        )}
      </div>
    );
  }
);

export default TextInput;
