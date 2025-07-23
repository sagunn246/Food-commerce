import React from "react";

const icons = [
  { name: "All", src: "./Icons/pizza.png" },
  { name: "Lunch", src: "./Icons/hamburger.png" },
  { name: "Snack", src: "./Icons/ice-cream.png" },
  { name: "Appetizer", src: "./Icons/noodle.png" },
  { name: "Dinner", src: "./Icons/drink.png" },
];

const Categories = ({ setProductData, MainData }) => {

  const setCatagories = (catagory) => {
    if (catagory == "All") {
      setProductData(MainData)
    } else {
      let tempArray = MainData.filter((item) => item.mealType[0] == catagory);
      setProductData(tempArray)
    }
  }
  return (
    <div className="my-4 mx-3 md:mx-8">
      <div className="text-black font-bold md:text-3xl">Categories</div>
      <div className="w-fit flex gap-7 md:gap-16 lg:gap-28 mx-auto my-4 ">
        {icons.map((item) => (
          <div
            className="flex flex-col items-center gap-2 cursor-pointer text-gray-700 font-medium hover:text-black"
            key={item.name}
            onClick={() => setCatagories(item.name)}
          >
            <div className="bg-gray-300 border-gray-300 rounded-full p-1 hover:border-gray-700 hover:bg-gray-700 transition-all duration-300">
              <img src={item.src} alt="" className="h-7 w-7 md:h-11 md:w-11 " />
            </div>
            <p className="p-0 m-0 text-xs sm:text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
