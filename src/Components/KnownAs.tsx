import { useState, useEffect } from "react";
import { base_Url, api_key, image_base_url } from "./Utils";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import noimage from "../../src/assets/no-photo-male.svg";

interface PropsTypesForRelatedMovies {
  id: Number;
  original_title: String;
  poster_path: String;
}

const KnownAs = () => {
  const [videos, setVideos] = useState<PropsTypesForRelatedMovies[]>([]);
  const [Loading, setLoading] = useState(true);
  const { id } = useParams<{ id: any }>();

  useEffect(() => {
    const fetchVideos = async () => {
      const url = `${base_Url}/person/${id}/movie_credits?api_key=${api_key}`;

      try {
        const res = await axios.get(url);
        setVideos(res.data.cast);
      } catch (err) {
        console.error("Failed to fetch related videos", err);
        setLoading(false);
      }
    };
    if (id) {
      fetchVideos();
    }
  }, [id]);
  if (Loading) {
    <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="font-bold  text-lg my-2">Known As</h1>

      <div className="overflow-x-auto whitespace-nowrap px-4 py-2">
        <div className="flex gap-4 ">
          {videos.map((item: any) => (
            <Link to={`/movie/${item.id}`} key={item.id}>
              <div
                key={item.id}
                className="flex-shrink-0 w-[160px] flex flex-col items-center cursor-pointer"
              >
                <img
                  src={
                    item.poster_path
                      ? `${image_base_url}/${item.poster_path}`
                      : noimage
                  }
                  alt=""
                  className="w-[150px] rounded-lg"
                />
                <p className="text-black mt-2 text-center w-[150px] text-wrap">
                  {item.original_title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default KnownAs;
