import { SessionProvider } from "next-auth/react";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import TopRightLogin from "@/components/Login/topRightLogin";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [favoriteDogIds, setFavoriteDogIds] = useState([]);

  function toggleFavorite(_id) {
    setFavoriteDogIds((favoriteDogIds) =>
      favoriteDogIds.includes(_id)
        ? favoriteDogIds.filter((dog) => dog !== _id)
        : [...favoriteDogIds, _id]
    );
  }

  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          toggleFavorite={toggleFavorite}
          favoriteDogIds={favoriteDogIds}
        />
      </SWRConfig>
    </SessionProvider>
  );
}
