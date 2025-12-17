import DogList from "@/components/DogList";
import useSWR from "swr";

export default function Listhandler() {
    const { data: dogs, isLoading, error } = useSWR("/api/portraits");
    
      if (isLoading) return <p>Load...</p>;
      if (error) return <p>Failed to load.</p>;
      if (!dogs || dogs.length === 0) return <p>No Dogs found.</p>;
  return (
    <div>
      <DogList dogs={dogs} />
    </div>
  );
}
