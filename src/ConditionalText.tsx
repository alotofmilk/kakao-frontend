import { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";

const ConditionalText = () => {
  const [name, setName] = useState<string>("");

  const getName = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.currentTarget.value;
    if (inputName.length > 5) {
      setName(inputName);
    } else {
      setName("");
    }
  };

  return (
    <>
      <section>
        <input type="text" onChange={getName} />
      </section>
      <article>{name}</article>
    </>
  );
};

export default ConditionalText;
