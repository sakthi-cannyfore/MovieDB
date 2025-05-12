 type propType = {
    crewlength: number;
 }
 
 const CastText = ({crewlength}:propType) => {
    return (
      <div className=" py-5">
        <div className="flex text-white justify-start items-center">
          <div className="bg-blue-500 w-[4px] h-[40px] ml-2"></div>
          <h1 className="font-bold text-2xl ml-2">Crew {crewlength}</h1>
        </div>
      </div>
    );
  };
  
  export default CastText;
  