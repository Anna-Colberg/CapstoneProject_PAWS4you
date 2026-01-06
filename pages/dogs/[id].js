import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Detail from "@/components/Detail/detail";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [dog, setDog] = useState(null);
  const [error, setError] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!id) return;

    async function fetchDog() {
      const response = await fetch(`/api/portraits/${id}`);

      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json();
      setDog(data);
      setNote(data.note || "");
    }
    fetchDog();
  }, [id]);

  if (error) return <p> Hunderasse nicht gefunden !</p>;
  if (!dog) return <p>Lade...</p>;

  return (
    <>
      <button onClick={() => router.back()}> BACK</button>
      <Detail dog={dog} />
      <form>
        <h3>Kommentare/Notizen</h3>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={10}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}
