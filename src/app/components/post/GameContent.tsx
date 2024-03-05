"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import _ from "lodash";
import dayjs from "dayjs";

import ImageMagnifier from "@/app/components/post/ImageMagnifier";

import { getGameData } from "@/app/services/post.service";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  GameDataWrapper,
  GameImageText,
  GameTopWrapper,
  GameTitle,
  ReleaseContainer,
  ReleaseText,
  ReleaseDateWrapper,
  ReleaseDate,
  GameDataContainer,
  GameMiddleWrapper,
  GameBottomWrapper,
  GameImageContainer,
  GameImageThumb,
  SubDataWrapper,
  RatingContainer,
  RatingText,
  RatingTagWrapper,
  RatingTag,
  YoutubeIframe,
  CoverImageContainer,
  CoverImage,
  TopSubWrapper,
} from "@/app/styles/post/game.style";

import type { FC } from "react";
import type { GameData, ImageSize } from "@/app/types/post.type";

interface GameContentProps {
  id: number;
  title: string;
}

const GameContent: FC<GameContentProps> = ({ id, title }) => {
  const THROTTLE_TIME = 1500;
  const IMAGE_MAX_COUNT = 5;

  const [data, setData] = useState<GameData | null>(null);

  const [imageUrl, setImageUrl] = useState("");
  const [showImage, setShowImage] = useState(false);

  const trailerUrl = useMemo(() => {
    if (data && data.videos) {
      const videos = data.videos.filter(
        (video) => video.name.toLowerCase() === "trailer"
      );

      if (videos.length > 0) {
        const video = videos[0];
        return `https://www.youtube-nocookie.com/embed/${video.video_id}`;
      }
    }

    return "";
  }, [data]);

  const theme = useThemeContext();

  const getRatingTagColor = (rating: number) =>
    rating >= 75 ? "good" : rating > 40 ? "normal" : "bad";

  const changeImageSize = (url: string, size: ImageSize) =>
    url.replace("t_1080p", `t_${size}`);

  const handleClickImage = useCallback(
    _.throttle((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      setImageUrl((e.target as HTMLImageElement).dataset.src || "");
      document.body.style.overflow = "hidden";
      setShowImage(true);
    }, THROTTLE_TIME),
    []
  );

  const handleCloseImage = useCallback(
    _.throttle((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      document.body.style.overflow = "auto";
      setShowImage(false);
    }, THROTTLE_TIME),
    []
  );

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const { data } = await getGameData(id);

        if (data) {
          const storedData = { ...data };

          if (data.artworks && data.artworks.length > IMAGE_MAX_COUNT)
            storedData.artworks = data.artworks.slice(0, IMAGE_MAX_COUNT);
          if (data.screenshots && data.screenshots.length > IMAGE_MAX_COUNT)
            storedData.screenshots = data.screenshots.slice(0, IMAGE_MAX_COUNT);

          setData(storedData);
        }
      } catch (err: any) {}
    };

    fetchGameData();
  }, [id]);

  return (
    data && (
      <GameDataWrapper className={theme?.mode}>
        <GameTopWrapper>
          <GameTitle>{title}</GameTitle>
          <TopSubWrapper>
            <CoverImageContainer>
              {data.cover && (
                <CoverImage
                  src={changeImageSize(data.cover.url, "cover_big")}
                  data-src={data.cover.url}
                  alt={data.cover.image_id}
                  onClick={handleClickImage}
                />
              )}
            </CoverImageContainer>
            <SubDataWrapper>
              <ReleaseContainer>
                <ReleaseText>출시일</ReleaseText>
                <ReleaseDateWrapper>
                  <ReleaseDate>
                    {dayjs(data.first_release_date).format("YYYY/MM/DD")}
                  </ReleaseDate>
                </ReleaseDateWrapper>
              </ReleaseContainer>
              <RatingContainer>
                <RatingText>IGDB 평점</RatingText>
                <RatingTagWrapper>
                  <RatingTag className={getRatingTagColor(data.rating)}>
                    {data.rating > 0 ? data.rating.toFixed(0) : "-"}
                  </RatingTag>
                </RatingTagWrapper>
              </RatingContainer>
              <RatingContainer>
                <RatingText>외부 평점</RatingText>
                <RatingTagWrapper>
                  <RatingTag
                    className={getRatingTagColor(data.aggregated_rating)}
                  >
                    {data.aggregated_rating > 0
                      ? data.aggregated_rating.toFixed(0)
                      : "-"}
                  </RatingTag>
                </RatingTagWrapper>
              </RatingContainer>
              <RatingContainer>
                <RatingText>전체 평점</RatingText>
                <RatingTagWrapper>
                  <RatingTag className={getRatingTagColor(data.total_rating)}>
                    {data.total_rating > 0 ? data.total_rating.toFixed(0) : "-"}
                  </RatingTag>
                </RatingTagWrapper>
              </RatingContainer>
            </SubDataWrapper>
          </TopSubWrapper>
        </GameTopWrapper>
        <GameMiddleWrapper>
          {trailerUrl && (
            <YoutubeIframe
              src={trailerUrl}
              title={`그랑블루 Trailer Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </GameMiddleWrapper>
        <GameBottomWrapper>
          {data.artworks && (
            <GameDataContainer>
              <GameImageText>아트워크</GameImageText>
              <GameImageContainer>
                {data.artworks.map((artwork) => (
                  <GameImageThumb
                    key={artwork.image_id}
                    src={changeImageSize(artwork.url, "thumb")}
                    data-src={artwork.url}
                    alt={artwork.image_id}
                    onClick={handleClickImage}
                  />
                ))}
              </GameImageContainer>
            </GameDataContainer>
          )}
          {data.screenshots && (
            <GameDataContainer>
              <GameImageText>스크린샷</GameImageText>
              <GameImageContainer>
                {data.screenshots.map((screenshot) => (
                  <GameImageThumb
                    key={screenshot.image_id}
                    src={changeImageSize(screenshot.url, "thumb")}
                    data-src={screenshot.url}
                    alt={screenshot.image_id}
                    onClick={handleClickImage}
                  />
                ))}
              </GameImageContainer>
            </GameDataContainer>
          )}
        </GameBottomWrapper>
        <ImageMagnifier
          className={showImage ? "show" : "hidden"}
          src={imageUrl}
          onClick={handleCloseImage}
        />
      </GameDataWrapper>
    )
  );
};

export default GameContent;
