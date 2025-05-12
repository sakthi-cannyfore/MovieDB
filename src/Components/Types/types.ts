export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  adult?: boolean;
  name?: string;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string | undefined;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  genres?: Genre[];
  runtime?: number;
  tagline?: string;
  department?: string;
}

export interface CastMember {
  adult?: boolean;
  gender?: number;
  id: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  cast_id?: number;
  department?: string;
  character?: string;
  credit_id?: string;
  order?: number;
}

export interface PersonDetails {
  adult?: boolean;
  also_known_as?: string[];
  biography?: string;
  birthday?: string;
  deathday?: string;
  gender?: number;
  homepage?: string;
  id: number;
  imdb_id?: string;
  known_for_department?: string;
  name?: string;
  place_of_birth?: string;
  popularity?: number;
  profile_path?: string;
}
