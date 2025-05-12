import React, { useEffect, useState } from "react";

interface TVShow {
  id: number;
  name: string;
  poster_path: string | null;
  vote_average: number;
  first_air_date: string;
}

const PopularTVShows: React.FC = () => {
  const [tvShows, setTvShows] = useState<TVShow[]>([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/tv/popular?api_key=0c2efce2a23fcafc5658862d35fc6291"
        );
        const data = await response.json();
        setTvShows(data.results);
      } catch (error) {
        console.error("Failed to fetch TV shows", error);
      }
    };

    fetchTVShows();
  }, []);

  return <>test</>;
};

export default PopularTVShows;
