export type Category = "Develop" | "Game";

interface Artwork {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  game: number;
  width: number;
  height: number;
  image_id: string;
  url: string;
  checksum: string;
}

interface Cover {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  game: number;
  width: number;
  height: number;
  image_id: string;
  url: string;
  checksum: string;
}

interface Screenshot {
  id: number;
  game: number;
  width: number;
  height: number;
  image_id: string;
  url: string;
  checksum: string;
}

interface Video {
  id: number;
  game: number;
  name: string;
  video_id: string;
  checksum: string;
}

type ImageKeys = "width" | "height" | "image_id" | "url";

export type ImageSize =
  | "cover_small"
  | "scrennshot_med"
  | "cover_big"
  | "screenshot_big"
  | "screenshot_huge"
  | "thumb"
  | "micro"
  | "720p"
  | "1080p";

export interface GameData {
  id: number;
  aggregated_rating: number;
  artworks?: Pick<Artwork, ImageKeys>[];
  cover?: Pick<Cover, ImageKeys>;
  first_release_date: number;
  rating: number;
  screenshots?: Pick<Screenshot, ImageKeys>[];
  total_rating: number;
  videos?: ({ url: string } & Pick<Video, "name" | "video_id">)[];
}

export interface GameResponse {
  data: GameData;
}

export interface Series {
  title: string;
  path: string;
}
