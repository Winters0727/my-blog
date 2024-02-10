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
import Footer from "./components/Footer";

import { PageWrapper } from "./styles/index.style";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Winters의 블로그에 어서오세요 :)",
  description: "FE 개발자 Winters의 블로그입니다.",
  icons: {
    icon: "/images/icons/icon.png",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const TITLE = "Winters의 잡동사니 창고";

  dayjs.locale("ko");
  return (
    <html lang="ko">
      <body className={inter.className}>
        <GlobalProvider>
          <ThemeProvider>
            <PageWrapper>
              <Header />
              <Title title={TITLE} />
              {children}
              <Footer />
            </PageWrapper>
          </ThemeProvider>
        </GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
