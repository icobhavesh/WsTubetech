import React, { useState } from "react";

const Toggle = () => {
  const [Toogle, setToggle] = useState({
    color: "green",
    backgroundColor: "yellow",
  });
  function changeColor() {
    if ((Toogle.color == "green", Toogle.backgroundColor == "yellow")) {
      setToggle({
        color: "white",
        backgroundColor: "black",
      });
      {
        return Toggle;
      }
    }
  }
  console.log(Toogle);
  return (
    <>
      <div style={{ Toggle }}>
        <h1 style={Toogle}>hello i am a tooogle </h1>
        <button onClick={changeColor}>btn</button>
      </div>
    </>
  );
};

export default Toggle;
