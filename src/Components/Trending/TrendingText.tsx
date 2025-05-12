type PopularTextProps = {
  setSelectedType: React.Dispatch<React.SetStateAction<"day" | "week">>;
  selectedType: "day" | "week";
};
const TrendingText = ({ setSelectedType, selectedType }: PopularTextProps) => {
  return (
    <div className="bg-black py-5 ">
      <div className="flex mx-2 bg-black text-white justify-start items-center">
        <div className="bg-blue-500 w-[4px] h-[40px] ml-2"></div>
        <h1 className="font-bold text-md sm:text-2xl ml-2">Trending</h1>
        <div className=" flex mx-2 mt-1 ">
          <div
            className={`"w-[60px] border border-white" ${
              selectedType == "day"
                ? "bg-white text-sky-500"
                : "bg-black text-white"
            } `}
            onClick={() => setSelectedType("day")}
          >
            <h3 className="mx-2 text-md sm:text-lg cursor-pointer">Today</h3>
          </div>
          <div
            className={`"w-[65px] border border-white" ${
              selectedType == "week"
                ? "bg-white text-sky-500"
                : "bg-black text-white"
            } `}
            onClick={() => setSelectedType("week")}
          >
            <h3 className="mx-2 text-md sm:text-lg cursor-pointer">Thisweek</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingText;
