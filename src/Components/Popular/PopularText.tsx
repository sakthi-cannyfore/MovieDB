type PopularTextProps = {
  setSelectedType: React.Dispatch<React.SetStateAction<"movie" | "tv">>;
  selectedType:"movie" | "tv"
};
const PopularText = ({setSelectedType,selectedType}:PopularTextProps) => {
  return (
    <div className="bg-black py-5">
      <div className="flex mx-2 bg-black text-white justify-start items-center">
        <div className="bg-blue-500 w-[4px] h-[40px] ml-2"></div>
        <h1 className="font-bold text-md sm:text-2xl ml-2">What's Popular</h1>
        <div className=" flex mx-2 mt-1 ">
          <div className={`"w-[60px]  border border-white" ${selectedType == "movie" ? 
             "bg-white text-sky-500" : "bg-black text-white"
          } `}onClick={()=>setSelectedType("movie")}>
            <h3 className="mx-2 text-md sm:text-lg cursor-pointer">Movie</h3>
          </div>
          <div className={`"w-[40px] border border-white" ${selectedType == "tv" ? 
             "bg-white text-sky-500" : "bg-black text-white"
          } `}onClick={()=>setSelectedType("tv")}>
            <h3 className="mx-2 text-md sm:text-lg cursor-pointer">TV</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularText;
