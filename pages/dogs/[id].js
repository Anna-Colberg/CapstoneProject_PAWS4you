import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Detail from "@/components/Detail/detail";
import { BackButton } from "@/components/Notice/styledNotice";
import NoticeInputForm from "@/components/Notice/noticeInput";
import NoticeOutputForm from "@/components/Notice/noticeOutput";
import useLocalStorageState from "use-local-storage-state";
import { PageWrapper } from "@/components/styledPages";

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

  const handleDeleteNotice = (idToDelete) => {
    setNotices((prev) => prev.filter((notice) => notice.id !== idToDelete));
  };

  const handleAddNotice = (newNotice) => {
    setNotices([...notices, newNotice]);
  };

  if (!router.isReady) {
    return null;
  }

  if (error) return <p> Dog Breeds not found !</p>;
  if (!dog) return <p>Load...</p>;

  return (
    <PageWrapper>
      <BackButton onClick={() => router.back()}> BACK</BackButton>
      <Detail dog={dog} />

      <NoticeInputForm dogId={id} onAddNotice={handleAddNotice} />
      <NoticeOutputForm notices={notices} onDeleteNotice={handleDeleteNotice} />

      <form>
        <h3>Comments/Notice</h3>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={10}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </PageWrapper>
  );
}
