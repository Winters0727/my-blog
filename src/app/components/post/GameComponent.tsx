"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import _ from "lodash";
import dayjs from "dayjs";

import ImageMagnifier from "@/app/components/post/ImageMagnifier";

import { getGameData } from "@/app/services/post.service";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  GameDataWrapper,
  GameDataText,
  GameTopWrapper,
  GameTitle,
  ReleaseWrapper,
  ReleaseText,
  ReleaseDate,
  GameDataContainer,
  GameMiddleWrapper,
  GameBottomWrapper,
  GameImageContainer,
  GameImageThumb,
  RatingWrapper,
  RatingContainer,
  RatingText,
  RatingTagWrapper,
  RatingTag,
  YoutubeIframe,
} from "@/app/styles/post.style";

import type { FC } from "react";
import type { GameData } from "@/app/types/post.type";

interface PostContentProps {
  id: number;
  title: string;
}

const GameContent: FC<PostContentProps> = ({ id, title }) => {
  const THROTTLE_TIME = 1500;

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

  const handleClickImage = useCallback(
    _.throttle((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      setImageUrl((e.target as HTMLImageElement).src);

      if (!showImage) document.body.style.overflow = "hidden";

      setShowImage(true);
    }, THROTTLE_TIME),
    []
  );

  const handleCloseImage = useCallback(
    _.throttle((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (showImage) document.body.style.overflow = "auto";

      setShowImage(false);
    }, THROTTLE_TIME),
    []
  );

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const { data } = await getGameData(id);

        const storedData = { ...data };

        if (data.artworks && data.artworks.length > 6)
          storedData.artworks = data.artworks.slice(0, 6);
        if (data.screenshots && data.screenshots.length > 6)
          storedData.screenshots = data.screenshots.slice(0, 6);

        setData(storedData);
      } catch (err: any) {}
    };

    fetchGameData();
  }, [id]);

  return (
    data && (
      <GameDataWrapper className={theme && theme.mode}>
        <GameTopWrapper>
          <GameTitle>{title}</GameTitle>
          <ReleaseWrapper>
            <ReleaseText>출시일</ReleaseText>
            <ReleaseDate>
              {dayjs(data.first_release_date).format("YYYY/MM/DD")}
            </ReleaseDate>
          </ReleaseWrapper>
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
          <RatingWrapper>
            <RatingContainer>
              <RatingText>평점</RatingText>
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
          </RatingWrapper>
        </GameMiddleWrapper>
        <GameBottomWrapper>
          {data.cover && (
            <GameDataContainer>
              <GameDataText>커버 이미지</GameDataText>
              <GameImageContainer>
                <GameImageThumb
                  src={data.cover.url}
                  alt={data.cover.image_id}
                  onClick={handleClickImage}
                />
              </GameImageContainer>
            </GameDataContainer>
          )}
          {data.artworks && (
            <GameDataContainer>
              <GameDataText>아트워크</GameDataText>
              <GameImageContainer>
                {data.artworks.map((artwork) => (
                  <GameImageThumb
                    key={artwork.image_id}
                    src={artwork.url}
                    alt={artwork.image_id}
                    onClick={handleClickImage}
                  />
                ))}
              </GameImageContainer>
            </GameDataContainer>
          )}
          {data.screenshots && (
            <GameDataContainer>
              <GameDataText>스크린샷</GameDataText>
              <GameImageContainer>
                {data.screenshots.map((screenshot) => (
                  <GameImageThumb
                    key={screenshot.image_id}
                    src={screenshot.url}
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
