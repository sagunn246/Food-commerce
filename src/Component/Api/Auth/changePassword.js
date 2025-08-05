import SecureFetch from "./ApiConfiguration";

const changeuserPassword = async (updatedData, setError) => {
  console.log(updatedData);

  try {
    const request = await SecureFetch(
      "http://localhost:3000/auth",
      "PATCH",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      updatedData
    );
    if (request.ok) {
      alert("pass Changed");
      console.log("Pass changed");
      setError("");
    } else if (request.status == 200) {
      setError("Password doesn't match");
    } else {
      console.log("Pass no change");
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default changeuserPassword;
