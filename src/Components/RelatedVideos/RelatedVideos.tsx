import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { api_key } from "../Utils";
import VideoText from "../VideoText";

interface VideoResult {
  id: string;
  name: string;
  key: string;
  site: string;
  type: string;
}


const RelatedVideos = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [videos, setVideos] = useState<VideoResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`
        );
        setVideos(res.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch videos", error);
        setLoading(false);
      }
    };

    if (movieId) {
      fetchVideos();
    }
  }, [movieId]);

  if (loading) return <p className="text-center">Loading videos...</p>;

  return (
    <>
      <VideoText crewlength={videos.length} />
      <div className="overflow-x-auto whitespace-nowrap py-4 px-2 w-[100%]">
        <div className="flex gap-4">
          {videos
            .filter((video) => video.site === "YouTube")
            .map((video) => (
              <div className="flex flex-col">
                <div
                  key={video.id}
                  className="min-w-[250px] w-[250px] h-[150px] rounded-lg overflow-hidden"
                >
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <p
                  key={video.id}
                  className="text-white overflow-hidden text-ellipsis  w-[250px]"
                >
                  {video.name}
                </p>{" "}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RelatedVideos;
