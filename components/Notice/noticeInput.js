import { useState } from "react";
import { FormNotice, Input, SendButton, TitelNotice, VerticalStroke } from "./styledNotice";

export default function NoticeInputForm({ onAddNotice, dogId }) {
  const [notices, setNotices] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddNotice({
      id: `${dogId}-${crypto.randomUUID()}`,
      dogId: dogId,
      text: notices,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    setNotices("");
  }

  function handleChange(event) {
    setNotices(event.target.value);
  }

  return (
    <FormNotice>
      <VerticalStroke />
      <TitelNotice>New Notice</TitelNotice>
      <label htmlFor="notice"></label>
      <Input
        type="text"
        value={notices}
        placeholder="Add Notice here ..."
        onChange={handleChange}
      ></Input>
      <SendButton onClick={handleSubmit} type="submit">
        Send
      </SendButton>
      <VerticalStroke />
    </FormNotice>
  );
}
