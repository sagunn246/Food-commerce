import SecureFetch from "./ApiConfiguration";

const signApi = async (userDetail) => {
  const request = await SecureFetch(
    "http://localhost:3000/auth/signup",
    "Post",
    {
      "cpntent-type": "Application/json",
    },
    userDetail
  );
  const response = await request.json();
  if (request.status == 200) {
    localStorage.setItem("token");
    localStorage.setItem("userDetails", JSON.stringify(response.user));
  }
};

export default signApi;
