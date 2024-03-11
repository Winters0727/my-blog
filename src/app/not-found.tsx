"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import CanvasApp from "@/app/canvas/app";

import { METADATA, NOTFOUND_TITLE, NOTFOUND_MAX_COUNT } from "@/app/constant";

import {
  NotFoundWrapper,
  NotFoundTitle,
  NotFoundText,
  NotFoundCanvas,
  NotFoundImage,
} from "@/app/styles/404.style";

import type { Metadata } from "next";

export const metadata: Metadata = {
  ...METADATA,
  title: NOTFOUND_TITLE,
  openGraph: {
    ...METADATA.openGraph,
    title: NOTFOUND_TITLE,
  },
};

const NotFound = () => {
  const [countdown, setCountdown] = useState(NOTFOUND_MAX_COUNT);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef1 = useRef<HTMLImageElement | null>(null);
  const imageRef2 = useRef<HTMLImageElement | null>(null);
  const imageRef3 = useRef<HTMLImageElement | null>(null);
  const imageRef4 = useRef<HTMLImageElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current;
    const image1 = imageRef1.current;
    const image2 = imageRef2.current;
    const image3 = imageRef3.current;
    const image4 = imageRef4.current;

    let countdownValue = NOTFOUND_MAX_COUNT;

    if (canvas && image1 && image2 && image3 && image4) {
      const app = new CanvasApp({
        canvas,
        width: canvas.clientWidth,
        height: canvas.clientHeight,
        frames: [image1, image2, image3, image4],
        times: [5, 1, 1, 5],
      });

      app.init();
      app.render();
    }

    const callback = () => {
      if (countdownValue > 1) {
        countdownValue -= 1;
        setCountdown((prevValue) => prevValue - 1);
      } else {
        router.push("/");
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(callback, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <NotFoundWrapper>
      <NotFoundTitle>404 Not Found</NotFoundTitle>
      <NotFoundText>{countdown}초 후 메인페이지로 이동합니다.</NotFoundText>
      <NotFoundCanvas ref={canvasRef} />
      <NotFoundImage
        style={{ display: "none" }}
        ref={imageRef1}
        src="/images/404/image-1.png"
        alt="404 이미지 1"
      />
      <NotFoundImage
        style={{ display: "none" }}
        ref={imageRef2}
        src="/images/404/image-2.png"
        alt="404 이미지 2"
      />
      <NotFoundImage
        style={{ display: "none" }}
        ref={imageRef3}
        src="/images/404/image-3.png"
        alt="404 이미지 3"
      />
      <NotFoundImage
        style={{ display: "none" }}
        ref={imageRef4}
        src="/images/404/image-4.png"
        alt="404 이미지 4"
      />
    </NotFoundWrapper>
  );
};

export default NotFound;
