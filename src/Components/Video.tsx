// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { api_key } from "./Utils";

// interface VideoResult {
//   id: string;
//   name: string;
//   key: string;
//   site: string;
//   type: string;
// }

// const Videos = () => {
// //   const { movieId } = useParams<{ movieId: string }>();
// const movieId = 1197306
//   const [videos, setVideos] = useState<VideoResult[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const res = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`
//         );
//         setVideos(res.data.results);
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to fetch videos", error);
//         setLoading(false);
//       }
//     };

//     if (movieId) {
//       fetchVideos();
//     }
//   }, [movieId]);

//   if (loading) return <p className="text-center">Loading videos...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Videos</h2>
//       <div className="grid gap-4 md:grid-cols-2">
//         {videos
//           .filter((video) => video.site === "YouTube")
//           .map((video) => (
//             <div key={video.id} className="border rounded-md p-2 shadow-md">
//               <h3 className="font-semibold mb-2">{video.name}</h3>
//               <iframe
//                 className="w-full aspect-video"
//                 src={`https://www.youtube.com/embed/${video.key}`}
//                 title={video.name}
//                 allowFullScreen
//               ></iframe>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Videos;
