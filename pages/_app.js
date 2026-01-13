import { SessionProvider } from "next-auth/react";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import TopRightLogin from "@/components/Login/topRightLogin";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <TopRightLogin />
        <Component {...pageProps} />
      </SWRConfig>
    </SessionProvider>
  );
}
