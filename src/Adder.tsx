import { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";

const Adder = () => {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);

  const changeOperand1 = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.length > 0) {
      const inputNumber = Number.parseInt(inputValue);
      setOperand1(inputNumber);
    } else {
      setOperand1(0);
    }
  };

  const changeOperand2 = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.length > 0) {
      const inputNumber = Number.parseInt(inputValue);
      setOperand2(inputNumber);
    } else {
      setOperand2(0);
    }
  };

  return (
    <section>
      <input type="text" onChange={changeOperand1} />
      <input type="text" onChange={changeOperand2} />
      {operand1 + operand2}
    </section>
  );
};

export default Adder;
