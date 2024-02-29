"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { MagnifiedImage, MagnifiedImageWrapper } from "@/app/styles/post.style";

import type { FC } from "react";

interface PostContentProps {
  className: string;
  src: string;
  onClick: (e: React.MouseEvent) => void;
}

const ImageMagnifier: FC<PostContentProps> = ({ className, src, onClick }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient &&
    createPortal(
      <MagnifiedImageWrapper
        className={className}
        style={{ top: window.scrollY }}
        onClick={onClick}
      >
        <MagnifiedImage src={src} onClick={onClick} />
      </MagnifiedImageWrapper>,
      document.body
    )
  );
};

export default ImageMagnifier;
