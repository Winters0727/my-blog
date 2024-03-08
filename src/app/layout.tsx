import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "./font.css";
import "./globals.css";

import { GlobalProvider } from "./context/GlobalContext";
import { ThemeProvider } from "./context/ThemeContext";

import Header from "@/app/components/Header";
import Title from "@/app/components/Title";
import Footer from "@/app/components/Footer";
import BlockContextMenu from "@/app/components/BlockContextMenu";

import { SITE_TITLE, SITE_DESCRIPTION, OPEN_GRAPH } from "./constant";

import { PageWrapper } from "./styles/index.style";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  dayjs.locale("ko");

  return (
    <html lang="ko">
      <body className={inter.className}>
        <GlobalProvider>
          <ThemeProvider>
            <PageWrapper>
              <Header />
              <Title />
              {children}
              <Footer />
              <BlockContextMenu />
            </PageWrapper>
          </ThemeProvider>
        </GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
