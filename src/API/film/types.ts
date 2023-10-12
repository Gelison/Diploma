export type Movie = {
  Title: string;
  Year: number;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  // Ratings: [
  //     {
  //         "Source": "Internet Movie Database",
  //         "Value": "7.6/10"
  //     },
  //     {
  //         "Source": "Rotten Tomatoes",
  //         "Value": "85%"
  //     },
  //     {
  //         "Source": "Metacritic",
  //         "Value": "67/100"
  //     }
  // ],
  Metascore: number;
  imdbRating: number;
  imdbVotes: number;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: boolean;
};

export type Films = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};
