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

export interface Series {
  title: string;
  path: string;
}

export interface PostData {
  slug: string;
  views: number;
  likes: number;
  isLike: boolean;
}

interface BaseComment {
  _id: string;
  name: string;
  type: "text" | "image";
  content: string;
  ip: string;
  isDeleted: boolean;
  isSubComment: boolean;
  createdAt: string;
  updatedAt: string;
  deletedBy?: "Host" | "User";
  deletedAt?: Date;
}

export interface Comment extends BaseComment {
  subComments?: BaseComment[];
}

export interface CommentPayload {
  parentId?: string;
  name: string;
  type: "text" | "image";
  content: string;
  password: string;
}

export interface CommentIcon {
  name: string;
  fileName: string;
  path: string;
}
