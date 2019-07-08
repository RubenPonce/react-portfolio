import React from "react";
import styled from "styled-components";
const Intro = styled.div`
      padding-top: 10em;
`
export default function Introduction() {
  return (
    <Intro className="introduction">
      <h1>
        I'm Ruben Ponce, a full stack{" "}
        <a
          href="https://github.com/RubenPonce"
          target="_blank"
          rel="noopener noreferrer"
        >
          developer
        </a>
        .
      </h1>
      <div />
    </Intro>
  );
}
