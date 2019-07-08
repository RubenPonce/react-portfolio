import React from "react";
import styled from "styled-components";
const Intro = styled.div`
    padding-top: 10em;
    margin-bottom: 5em;
    h1 {
      color: rgba(250, 250, 250, 0.995);
      font-size: 2.5rem;
      line-height: 1.5;
       }
    a {
      color: #efefef;
      text-decoration: underline;
    }
`;
export default function Introduction() {
  return (
    <Intro >
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
