import {
  NavigationLink,
  NavigationWrapper,
  NavigationList,
} from "./styledNavigation";
import { useRouter } from "next/router";
import { HandHeart } from "lucide-react";
import { Birdhouse } from "lucide-react";
import { Dog } from "lucide-react";
import { PawPrint } from "lucide-react";

export default function Navigation() {
  const router = useRouter();
  return (
    <NavigationWrapper>
      <NavigationList>
          <NavigationLink
            href="/" $active={router.pathname === "/"}>
            <Birdhouse width={30} height={30} />
          </NavigationLink>
      
          <NavigationLink href="/favorite" $active={router.pathname === "/favorite"}>
            <HandHeart width={30} height={30} />
          </NavigationLink>

          <NavigationLink href="/lexikon"$active={router.pathname === "/lexikon"} >
            <Dog width={30} height={30} />
          </NavigationLink>
    
          <NavigationLink
            href="/profil" $active={router.pathname === "/profil"}>
            <PawPrint width={30} height={30} />
          </NavigationLink>
      </NavigationList>
    </NavigationWrapper>
  );
}
