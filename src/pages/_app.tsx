import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import ScrollToTop from "@/components/molecules/ScrollToTop.molecule";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  );
};

export default MyApp;
