import { SessionProvider } from "next-auth/react";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useLocalStorageState from "use-local-storage-state";


const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [favoriteDogIds, setFavoriteDogIds] = useLocalStorageState(
    "favoriteDogIds",
    { defaultValue: [], }
  );

  function toggleFavorite(_id) {
    setFavoriteDogIds((prev) =>
      prev.includes(_id)
        ? prev.filter((id) => id !== _id)
        : [...prev, _id]
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
