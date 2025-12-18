import BreedList from "@/components/BreedList";
import { useMemo, useState } from "react";
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
    <div>
      <h1>Lexikon</h1>
      <h2>find your DOG</h2>
      <BreedList dogs={sortedDogs} />
    </div>
  );
}
