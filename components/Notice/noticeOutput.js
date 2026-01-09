import {
  NoNoticePart,
  NoticeTitle,
  OutputSection,
  VerticalStroke,
} from "./styledNotice";

export default function NoticeOutputForm({ notices }) {
  if (!notices || notices.length === 0) {
    return <NoNoticePart>No Notice yet.</NoNoticePart>;
  }

  return (
    <>
      <VerticalStroke></VerticalStroke>
      <NoticeTitle>Notice ({notices.length})</NoticeTitle>
      {notices.map((notice) => (
        <OutputSection key={notice.id}>
          <p>{notice.text}</p>
          <p>{notice.time}</p>
        </OutputSection>
      ))}
    </>
  );
}
