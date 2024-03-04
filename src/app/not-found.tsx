"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import CanvasApp from "@/app/canvas/app";

import {
  NotFoundWrapper,
  NotFoundTitle,
  NotFoundImage,
} from "@/app/styles/404.style";

const NotFound = () => {
  const [countdown, setCountdown] = useState(5);

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

    let countdownValue = 5;

    if (canvas && image1 && image2 && image3 && image4) {
      const app = new CanvasApp({
        canvas,
        width: 500,
        height: 500,
        frames: [image1, image2, image3, image4],
        times: [5, 1, 1, 5],
      });

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
      <NotFoundTitle>{countdown}초 후 메인페이지로 이동합니다.</NotFoundTitle>
      <canvas width={500} height={500} ref={canvasRef} />
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