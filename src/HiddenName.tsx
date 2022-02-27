import { ChangeEvent, useState } from "react";

const HiddenName = () => {
  const [text, setText] = useState<string>("");

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    const Text = event.currentTarget.value;
    if (Text.length >= 3) {
      const star = "*";
      const set =
        Text.charAt(0) + star.repeat(Text.length - 2) + Text.charAt(length);
      setText(set);
    } else {
      setText(Text);
    }
  };

  return (
    <>
      <section>
        <input type="text" onChange={updateText} />
      </section>
      <article>{text}</article>
    </>
  );
};

export default HiddenName;
