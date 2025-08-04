import SecureFetch from "../Auth/apiConfiguration";

const updateduserData = async (updatedData) => {
  try {
    const response = await SecureFetch(
      "http://localhost:3000/auth/userDetails",
      "PATCH",
      {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      updatedData
    );

    if (response.ok) {
      console.log(response.data);
      localStorage.setItem("userDetails", JSON.stringify(response.data.user));
    } else {
      console.error("Update failed:", response.data);
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default updateduserData;
