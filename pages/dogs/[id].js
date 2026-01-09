import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Detail from "@/components/Detail/detail";
import { BackButton } from "@/components/Notice/styledNotice";
import NoticeInputForm from "@/components/Notice/noticeInput";
import NoticeOutputForm from "@/components/Notice/noticeOutput";
import useLocalStorageState from "use-local-storage-state";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [dog, setDog] = useState(null);
  const [error, setError] = useState(false);
  const [notices, setNotices] = useLocalStorageState(
    id ? `notices-${id}` : "notices-temp",
    {
      defaultValue: [],
    }
  );

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
    }

    fetchDog();
  }, [id]);

  const handleAddNotice = (newNotice) => {
    setNotices([...notices, newNotice]);
  };

  if (!router.isReady) {
    return null;
  }

  if (error) return <p> Hunderasse nicht gefunden !</p>;
  if (!dog) return <p>Lade...</p>;

  return (
    <>
      <BackButton onClick={() => router.back()}> BACK</BackButton>
      <Detail dog={dog} />
      <NoticeInputForm dogId={id} onAddNotice={handleAddNotice} />
      <NoticeOutputForm notices={notices} />
    </>
  );
}
