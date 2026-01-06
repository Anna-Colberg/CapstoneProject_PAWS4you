import {
  NavigationLink,
  NavigationWrapper,
  NavigationList,
} from "./styledNavigation";
import { useRouter } from "next/router";
import Home from "/public/icons/home.svg";
import Lexikon from "/public/icons/lexikon.svg";
import Favorite from "/public/icons/favorite.svg";
import Profil from "/public/icons/profil.svg";

export default function Navigation() {
  const router = useRouter();
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationLink
          href="/"
          $highlighted={router.pathname === "/" ? "active" : ""}
        >
          <Home width={30} height={30} />
        </NavigationLink>
        <NavigationLink
          href="/favorite"
          $highlighted={router.pathname === "/favorite" ? "active" : ""}
        >
          <Favorite width={30} height={30} />
        </NavigationLink>
        <NavigationLink
          href="/lexikon"
          $highlighted={router.pathname === "/lexikon" ? "active" : ""}
        >
          <Lexikon width={30} height={30} />
        </NavigationLink>
        <NavigationLink href="/" $highlighted={router.pathname === "/"}>
          <Profil width={30} height={30} />
        </NavigationLink>
      </NavigationList>
    </NavigationWrapper>
  );
}
