import { Metadata } from "next";

export const METADATA_BASE_URL = new URL("https://blog.winters0727.kr");

export const SITE_TITLE = "Winters의 블로그에 어서오세요 :)";
export const SITE_DESCRIPTION = "FE 개발자 Winters의 블로그입니다.";

export const OPEN_GRAPH = {
  title: "Winters의 블로그에 어서오세요 :)",
  description: "FE 개발자 Winters의 블로그입니다.",
  url: "https://blog.winters0727.kr",
  siteName: "Winters의 잡동사니 창고",
  images: [
    {
      url: "/images/open-graph.jpeg",
      width: 200,
      height: 200,
    },
  ],
  locale: "ko_KR",
  type: "website",
};

export const TITLE = "Winters의 잡동사니 창고";

export const FOOTER_PRE_TEXT = "Copyright 2024. Winters0727.";
export const FOOTER_POST_TEXT = "All rights reserved.";

export const BACKGROUND_IMAGE = "";

export const PROFILE_IMAGE = "/images/profile.jpeg";

export const PROFILE_DEFAULT_IMAGE = "/images/default-profile.png";

export const PROFILE_NAME = "🕶️ Winters";

export const PROFILE_DESCRIPTION =
  "블로그에 오신걸 환영합니다!\n준비한건 많이 없지만\n편하게 구경하다 가세요. :)";

export const NOTFOUND_TITLE = "페이지를 찾지 못했습니다. :(";

export const NOTFOUND_MAX_COUNT = 3;

export const METADATA: Metadata = {
  metadataBase: METADATA_BASE_URL,
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: OPEN_GRAPH,
  other: {
    "naver-site-verification":
      process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
  },
};
