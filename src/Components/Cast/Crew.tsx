import noimage from "../../assets/no-photo-male.svg";
import "./Cast.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Appdispatch, RootState } from "../Redux/store/Store";
import { FetchingcrewCast } from "../Redux/features/CastandCrewDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image_base_url } from "../Utils";
import CastText from "../CastCrew/Cast";
import { Link } from "react-router-dom";

const Crew = () => {
  const dispatch = useDispatch<Appdispatch>();
  const { movieId } = useParams<{ movieId: string }>();
  const { cast } = useSelector(
    (state: RootState) => state.castCrew
  );

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (movieId) {
      dispatch(FetchingcrewCast(Number(movieId)));
    }
  }, [dispatch, movieId]);

  const visibleCrew = showAll ? cast : cast.slice(0, 16);

  return (
    <div className="mt-8 text-center">
      <CastText crewlength={cast.length} />
      <div className="flex flex-wrap gap-4 justify-center">
        {visibleCrew.map((member, index) => (
          <Link to={`/person/${member.id}`} key={`${member.id}-${index}`}>
            <div
              key={member.id}
              className="bg-white flex flex-col items-center shadow-lg rounded-lg overflow-hidden max-w-[150px]"
            >
              <div className="w-full h-[200px]">
                <img
                  src={
                    member.profile_path
                      ? `${image_base_url}/${member.profile_path}`
                      : noimage
                  }
                  alt={member.original_name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="w-full h-full p-2 text-center bg-white">
                <p className="font-semibold text-sm text-gray-600">
                  <h4 className="font-semibold text-md text-gray-800">
                    {member.original_name}
                  </h4>
                  {member.character || "test"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {cast.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="relative left-[1100px] flex mt-6  py-2 items-center text-white rounded "
        >
          {showAll ? (
            <>
              Show Less <ChevronUp size={18} />
            </>
          ) : (
            <>
              Show More <ChevronDown size={18} />
            </>
          )}{" "}
        </button>
      )}
    </div>
  );
};

export default Crew;
