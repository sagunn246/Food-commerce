const OrangeButton = ({ title, ...props }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="
          bg-orange-600
          text-white
          font-semibold
          py-3 px-6
          rounded-xl
          shadow-lg
          hover:bg-orange-700
          hover:shadow-xl
          active:bg-orange-800
          active:shadow-md
          focus:outline-none
          focus:ring-4
          focus:ring-orange-300
          focus:ring-opacity-75
          transition-all
          duration-300
          ease-in-out
          transform
          hover:-translate-y-0.5
        "
        {...props}
      >
        {title}
      </button>
    </div>
  );
};

export default OrangeButton;
