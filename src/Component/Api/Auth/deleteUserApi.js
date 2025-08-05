import SecureFetch from "./ApiConfiguration";

const deleteUserApi = async () => {
  try {
    const response = await SecureFetch("http://localhost:3000/auth", "DELETE", {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });

    if (response.ok) {
      console.log(response.data);
      localStorage.removeItem("token");
      localStorage.removeItem("userDetails");
      localStorage.removeItem("cart");
    } else {
      console.error("Update failed:", response.data);
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default deleteUserApi;
