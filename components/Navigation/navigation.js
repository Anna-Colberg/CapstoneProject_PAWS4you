import {
  NavigationLink,
  NavigationWrapper,
  NavigationList,
} from "./styledNavigation";
import { useRouter } from "next/router";



export default function Navigation() {
  const router = useRouter();
  return (
    <NavigationWrapper>
      <NavigationList>

       
          <NavigationLink
            href="/" $highlighted={router.pathname === "/"}>
            <img src="/icons/home.svg" alt="Home" />
          </NavigationLink>
      


      
          <NavigationLink href="/" $highlighted={router.pathname === "/"}>
            {<img src="/icons/favorite.svg" alt="Favorite" />}
          </NavigationLink>
     


          <NavigationLink href="/" $highlighted={router.pathname === "/"}>
            {<img src="/icons/lexikon.svg" alt="Lexikon" />}
          </NavigationLink>
 


    
          <NavigationLink
            href="/" $highlighted={router.pathname === "/"}>
            {<img src="/icons/profil.svg" alt="Profil" />}
          </NavigationLink>
  

      </NavigationList>
    </NavigationWrapper>
  );
}
