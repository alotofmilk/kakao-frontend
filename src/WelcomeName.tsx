import { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";

const WelcomeName = () => {
  const [name, setName] = useState<string>();

  const getName = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.currentTarget.value;
    setName(inputName);
  };

  return (
    <>
      <section>
        <input type="text" onChange={getName} />
      </section>
      <article>반갑습니다. {name} 님.</article>
    </>
  );
};

export default WelcomeName;
