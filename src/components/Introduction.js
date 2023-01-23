import React, { useEffect, useMemo, useState } from "react";
import Fade from "reactstrap/lib/Fade";

export default function Introduction() {
  const iBuild = ["mobile apps", " discord bots", "web apps", "software"];
  const maxPhraseLength = iBuild.length - 1;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayGoal, setDisplayGoal] = useState(false);

  useEffect(() => {
    const interval = setTimeout(
      () => {
        if (phraseIndex >= maxPhraseLength) {
          setTimeout(() => {
            setDisplayGoal(true);
            clearInterval(interval);
          }, 600);
          return;
        }
        setPhraseIndex(phraseIndex + 1);
      },
      phraseIndex === 0 ? 1700 : 2200
    );
  }, [phraseIndex, maxPhraseLength]);

  const endingPhrase = useMemo(() => {
    return (
      <Fade in={displayGoal}>
        {" "}
        <h1 className="cta-intro">
          {phraseIndex === maxPhraseLength &&
            "Software Engineer with 3+ years experience in developing, testing, and troubleshooting web applications with JavaScript frameworks such as Vuejs and React. I am ready to contribute to your project."}
        </h1>
      </Fade>
    );
  }, [phraseIndex, displayGoal, maxPhraseLength]);
  return (
    <div className="introduction">
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

      {!displayGoal ? (
        <h1
          style={{
            backfaceVisibility: "hidden",
            height: "96px",
            marginTop: "1.5rem",
          }}
        >
          I build{" "}
          <span
            style={{
              fontWeight: 800,
              color: "#660066",
              backfaceVisibility: "hidden",
            }}
          >
            {iBuild[phraseIndex]}
          </span>
          .{" "}
        </h1>
      ) : (
        endingPhrase
      )}
    </div>
  );
}
