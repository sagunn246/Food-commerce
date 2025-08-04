import SecureFetch from "../Auth/apiConfiguration";

const changeuserPassword = async (updatedData) => {
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
    } else {
      console.log("Pass no change");
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default changeuserPassword;
