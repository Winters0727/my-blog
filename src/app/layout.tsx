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

import { METADATA } from "./constant";

import { PageWrapper } from "./styles/index.style";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { ...METADATA };

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
