import SecureFetch from "./apiConfiguration";

const signApi = async (
  userDetail,
  setStage,
  setUserDetail,
  navigate,
  setError
) => {
  try {
    const { status, data } = await SecureFetch(
      "http://localhost:3000/auth/signup",
      "POST",
      {
        "Content-Type": "application/json",
      },
      userDetail
    );

    console.log("response", data);

    if (status === 200 || status === 201) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userDetails", JSON.stringify(data.user));
      window.location.href = "/";
    } else {
      throw new Error(`Signup failed: ${data.message}`);
    }
  } catch (error) {
    console.error("Signup Error:", error.message);
    setError(error.message);
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
  }
};

export default signApi;
