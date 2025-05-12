type propType = {
  crewlength: number;
};

const VideoText = ({ crewlength }: propType) => {
  return (
    <div className=" py-5">
      <div className="flex text-white justify-start items-center">
        <div className="bg-blue-500 w-[4px] h-[40px] mr-2"></div>
        <h1 className="font-bold text-2xl ">Videos {crewlength}</h1>
      </div>
    </div>
  );
};

export default VideoText;
