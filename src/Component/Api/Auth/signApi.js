import SecureFetch from "./ApiConfiguration";

const signApi = async (userDetail, setStage, setUserDetail, navigate) => {
  try {
    const request = await SecureFetch(
      "http://localhost:3000/auth/signup",
      "POST", // Ensure method is uppercase
      {
        "Content-Type": "application/json", // Proper casing
      },
      userDetail
    );

    const response = await request.json();

    if (request.status === 200) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("userDetails", JSON.stringify(response));
      navigate("/");
    } else {
      throw new Error("Signup failed");
    }
  } catch (error) {
    setUserDetail({
      username: "",
      contactNumber: "",
      email: "",
      password: "",
      city: "",
      street: "",
      deliveryDescription: "",
    });
    setStage(0);
    console.error("Signup Error:", error.message);
  }
};

export default signApi;
