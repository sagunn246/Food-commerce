const productDataApi = async (setProductDta, setMainData) => {
  const request = await fetch("https://dummyjson.com/recipes");
  const response = await request.json();
  if (request.status == 200) {
    setMainData(response.recipes);
    setProductDta(response.recipes);
  }
};
export default productDataApi;
