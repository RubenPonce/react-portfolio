import React, {useEffect, useMemo, useState} from "react";

const usePhraseLogic = (phrases) => {
    const maxPhraseLength = phrases.length - 1;
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayGoal, setDisplayGoal] = useState(false);

    useEffect(() => {
        const interval = setTimeout(() => {
            if (phraseIndex >= maxPhraseLength) {
                setTimeout(() => {
                    setDisplayGoal(true);
                    clearInterval(interval);
                }, 300);
                return;
            }
            setPhraseIndex(phraseIndex + 1);
        }, phraseIndex === 0 ? 1000 : 1200);

        return () => clearInterval(interval);
    }, [phraseIndex, maxPhraseLength]);

    return {phraseIndex, displayGoal};
};
export default function Introduction() {
    const iBuild = ['websites', 'mobile apps', 'your solutions'];
    const {phraseIndex, displayGoal} = usePhraseLogic(iBuild);

    const endingPhrase = useMemo(() => (
        <h1 className="cta-intro">
            Ruben Ponce is a Frontend Developer with 4+ years experience in developing, testing, and troubleshooting web applications and
            websites, proficient in modern technologies to build your next project.
            {' '}
            <a className="cta-link" href="https://calendly.com/rubenponce/have-a-conversation"
               className="cta-intro-link">Let's schedule a discovery call!</a>
        </h1>
    ), []);

    const renderIBuild = () => (
        <h1 className="introduction-h1">
            I build{' '}
            <span className="highlight">
        {iBuild[phraseIndex]}
      </span>
            .
        </h1>
    );

    return (
        <div className="introduction">
            <h1>
                I'm Ruben Ponce, <span className="emphasis">your</span>{' '}
                web developer.
            </h1>
            {!displayGoal ? renderIBuild() : endingPhrase}
        </div>
    );
}
