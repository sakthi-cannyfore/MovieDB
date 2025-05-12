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

const Cast = () => {
  const dispatch = useDispatch<Appdispatch>();
  const { movieId } = useParams<{ movieId: string }>();
  const { crew } = useSelector(
    (state: RootState) => state.castCrew
  );

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (movieId) {
      dispatch(FetchingcrewCast(Number(movieId)));
    }
  }, [dispatch, movieId]);

  const visibleCrew = showAll ? crew : crew.slice(0, 15);

  return (
    <div className="mt-8 text-center">
      <CastText crewlength={crew.length} />
      <div className="flex flex-shrink flex-wrap gap-4 justify-start">
        {visibleCrew.map((member, index) => (
          <Link to={`/person/${member.id}`} key={`${member.id}-${index}`}>
            <div className="bg-white flex flex-col items-center shadow-lg rounded-lg overflow-hidden w-[140px] sm:w-[150px]">
              <div className="w-full h-[180px] sm:h-[200px]">
                <img
                  src={
                    member.profile_path
                      ? `${image_base_url}/${member.profile_path}`
                      : noimage
                  }
                  alt={member.original_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full text-center bg-white p-2">
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800 truncate">
                  {member.original_name}
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-600">
                  {member.department || "Not Available"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {crew.length > 10 && (
        <div className="flex justify-end mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-4 py-2 text-white rounded "
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                Show More <ChevronDown size={18} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cast;
