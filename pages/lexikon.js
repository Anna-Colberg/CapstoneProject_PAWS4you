import BreedList from "@/components/List/BreedList";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { StyledContainer, Title, Subtitle } from "@/components/styledPages";
import Navigation from "@/components/Navigation/navigation";
import Searchbar from "@/components/Searchbar/filter";

export default function Listhandler() {
  const { data: dogs, isLoading, error } = useSWR("/api/portraits");
  const [search, setSearch] = useState("");

  const filteredAndSortedDogs = useMemo(() => {
    if (!dogs) return [];

    const searchLower = search.toLowerCase();

    return dogs
      .filter((dog) => {
        const name = dog.name?.toLowerCase() || "";
        const high = dog.high?.toLowerCase() || "";

        return name.includes(searchLower) || high.includes(searchLower);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [dogs, search]);

  if (isLoading) return <p>Load...</p>;
  if (error) return <p>Failed to load.</p>;
  if (!dogs || dogs.length === 0) return <p>No Dogs found.</p>;

  return (
    <>
      <StyledContainer>
        <Title>Lexikon</Title>
        <Subtitle>find your DOG</Subtitle>
        <Searchbar search={search} setSearch={setSearch} />
        <BreedList dogs={filteredAndSortedDogs} />
      </StyledContainer>
      <Navigation />
    </>
  );
}

//mit sortedDogs werden die Hunderassen nach dem Namen sortiert
//React-Hook useMemo(für Berechnungen/ Sortieren = Berechnen)
//merkt sich dies und ändert sich nur, wenn Dogs neu gerendert wird.

//.slice = Kopieren / .sort = Sortieren, Array wird neu dargestellt
//.localeCompare = Alphabetisches sortieren
