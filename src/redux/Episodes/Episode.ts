export interface Result {
  id: number;
  episodeName: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: Result[];
}
