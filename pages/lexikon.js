import {
  LexikonStyledContainer,
  Title,
  Subtitle,
  TitleWrapper,
  CardWrapper,
} from "./styledLexikon";
import BreedList from "@/components/List/BreedList";
import { useMemo } from "react";
import useSWR from "swr";

export default function Listhandler() {
  const { data: dogs, isLoading, error } = useSWR("/api/portraits");

  const sortedDogs = useMemo(() => {
    if (!dogs) return [];
    return dogs.slice().sort((a, b) => a.name.localeCompare(b.name));
  }, [dogs]);

  if (isLoading) return <p>Load...</p>;
  if (error) return <p>Failed to load.</p>;
  if (!dogs || dogs.length === 0) return <p>No Dogs found.</p>;

  return (
    <LexikonStyledContainer>
      <Title>Lexikon</Title>
      <Subtitle>find your DOG</Subtitle>
      <BreedList dogs={sortedDogs} />
    </LexikonStyledContainer>
  );
}

//mit sortedDogs werden die Hunderassen nach dem Namen sortiert
//React-Hook useMemo(für Berechnungen/ Sortieren = Berechnen)
//merkt sich dies und ändert sich nur, wenn Dogs neu gerendert wird.

//.slice = Kopieren / .sort = Sortieren, Array wird neu dargestellt
//.localeCompare = Alphabetisches sortieren
