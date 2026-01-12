import {
  NoNoticePart,
  NoticeTitle,
  OutputSection,
  VerticalStroke,
  DeleteButton,
  Time,
  NoticeText,
  FormNotice,
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
          <NoticeText>{notice.text}</NoticeText>
          <Time>{notice.date}</Time>
          <DeleteButton onClick={() => onDeleteNotice(notice.id)}>
            Delete
          </DeleteButton>
        </OutputSection>
      ))}
    </>
  );
}
