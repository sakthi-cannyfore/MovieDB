import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPersonDetails } from "../Redux/features/FetchPersonDetails";
import { Appdispatch, RootState } from "../Redux/store/Store";
import { image_base_url } from "../Utils";
import KnownAs from "../KnownAs";

const PersonDetails = () => {
  const dispatch = useDispatch<Appdispatch>();
  const {person} = useSelector((state: RootState) => state.personDetails);
  const { id } = useParams<{ id: string }>();



  useEffect(() => {
    if (id) {
      dispatch(fetchPersonDetails(Number(id)));
    }
  }, [dispatch, id]);

  if (!person) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-gray-800">
      <div className="md:w-1/4 p-4">
        <div className="relative">
          <img
            src={`${image_base_url}${person?.profile_path}`}
            alt={person?.name}
            className="w-full h-auto rounded-t-lg shadow-md"
          />
        </div>

        <div className="bg-gray-400 rounded-b-lg p-4">
          <h1 className="text-2xl font-bold mb-4">Person Info</h1>

          <div className="mb-4">
            <h2 className="font-semibold">Known For</h2>
            <p>{person.known_for_department}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Gender</h2>
            <p>{person.gender === 1 ? "Female" : "Male"}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Birthday</h2>
            <p>{person.birthday}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Place of Birth</h2>
            <p>{person.place_of_birth}</p>
          </div>

          {person.also_known_as && person.also_known_as.length > 0 && (
            <div className="mb-4">
              <h2 className="font-semibold">Also Known As</h2>
              <ul className="list-disc list-inside">
                {person.also_known_as.map((alias: string, index: number) => (
                  <li key={index}>{alias}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="md:w-3/4 p-6 rounded-xl bg-white mt-4">
        <h1 className="text-3xl font-bold mb-4">{person.name}</h1>

        <h3 className="text-xl font-semibold mb-2">Biography</h3>
        <p className="text-justify leading-relaxed whitespace-pre-wrap">
          {person.biography || "No biography available."}
        </p>

        <KnownAs/>
      </div>
    </div>
  );
};

export default PersonDetails;
