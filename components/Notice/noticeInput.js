import { useState } from "react";
import { FormNotice, Input, SendButton, TitelNotice, VerticalStroke } from "./styledNotice";

export default function NoticeInputForm({ onAddNotice, dogId }) {
  const [notices, setNotices] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

const now = new Date();
const date = now.toLocaleString([], {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});


    onAddNotice({
      id: `${dogId}-${crypto.randomUUID()}`,
      dogId: dogId,
      text: notices,
      date,
    });

    setNotices("");
  }

  function handleChange(event) {
    setNotices(event.target.value);
  }

  return (
    <FormNotice onSubmit={handleSubmit}>
      <VerticalStroke />
      <TitelNotice>New Notice</TitelNotice>
      <label htmlFor="notice"></label>
      <Input
        type="text"
        value={notices}
        placeholder="Add Notice here ..."
        onChange={handleChange}
      ></Input>
      <SendButton onClick={handleSubmit}>
        Send
      </SendButton>
      <VerticalStroke />
    </FormNotice>
  );
}
