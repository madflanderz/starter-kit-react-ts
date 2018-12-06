import * as React from "react";

interface Props {
  name: string;
}

export default ({ name }: Props) => (
  <h1
    onClick={(e) => {
      console.log("Home");
    }}
  >
    Hello
    {name}!
  </h1>
);
