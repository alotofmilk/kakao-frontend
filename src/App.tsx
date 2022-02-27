import React, { KeyboardEvent } from "react";
import logo from "./logo.svg";
import "./App.css";

import "./App.css";
import Button from "./Button";
import Title from "./Title";
import Adult from "./Adult";
import Photo from "./Photo";
import Counter from "./Counter";
import Adder from "./Adder";
import WelcomeName from "./WelcomeName";
import ConditionalText from "./ConditionalText";
import HiddenName from "./HiddenName";
import TODO from "./TODO";

const App = () => {
  const headline = "Title!";
  const subline = "";
  const sample_address = "https://t1.daumcdn.net/cfile/blog/253D733E5607868905";
  const sample_description = "아기 강강쥬! ^0^/";
  const defaultCount = 0;

  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "h") {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div className="App">
      <>
        <Title title={headline} />
        <Photo address={sample_address} description={sample_description} />
        <input type="text" onKeyDown={preventKeyDown} />
        <Counter defaultCount={defaultCount} />
        <Adder></Adder>
        <WelcomeName></WelcomeName>
        <ConditionalText></ConditionalText>
        <HiddenName></HiddenName>
        <TODO></TODO>
      </>
    </div>
  );
};

export default App;
