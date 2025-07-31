import React, { useRef } from "react";

const TextInput = ({ label, placeholder, ref, error, errormessage }) => {
  const inputRef = useRef();
  const nameRef = useRef();
  const contactNumberRef = useRef();
  const emailRef = useRef();
  const errormessageref = useRef();
  const handleData = () => {
    if (nameRef.current?.value == "" || nameRef.current?.value.length < 3) {
      errormessageref.current = "Name must be at least 5 letters long";
      setError(1);
    } else if (
      contactNumberRef.current?.value == "" ||
      contactNumberRef.current?.value.length < 9
    ) {
    }
  };
  return (
    <div>
      <div>
        <div className="pt-3">
          <span className="font-bold">{label}</span>
          <div className="">
            <input
              ref={ref}
              type="text"
              placeholder={placeholder}
              className="outline-none text-sm w-full p-2 rounded-sm border border-gray-500"
            />
          </div>
          {error && (
            <span>
              {errormessage ? (
                <div className="text-red-600">{errormessage}</div>
              ) : (
                <div className="text-red-600">"Invalid details"</div>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
