import {
  NoNoticePart,
  NoticeTitle,
  OutputSection,
  VerticalStroke,
  DeleteButton,
} from "./styledNotice";

export default function NoticeOutputForm({ notices, onDeleteNotice }) {
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
          <DeleteButton onClick={() => onDeleteNotice(notice.id)}>
            Delete
          </DeleteButton>
        </OutputSection>
      ))}
    </>
  );
}
