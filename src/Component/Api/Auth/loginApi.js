import SecureFetch from "./ApiConfiguration";

const loginApi = async (userDetail, setUser) => {
  try {
    const response = await SecureFetch(
      "http://localhost:3000/auth/login",
      "POST",
      {
        "Content-Type": "application/json",
      },
      userDetail
    );

    console.log("Full Login Response:", response);
    console.log("Response data:", response.data);

    const token = response?.data?.token || null;
    const user = response?.data?.user || null;

    if (token && user) {
      localStorage.setItem("token", token);
      localStorage.setItem("userDetails", JSON.stringify(user));

      if (setUser) setUser({ token, ...user });

      window.location.href = "/";
    } else {
      console.error("Login failed: Invalid token or user data.", response);
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};

export default loginApi;
