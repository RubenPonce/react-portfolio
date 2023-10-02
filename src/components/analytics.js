import ReactGA from 'react-ga';

ReactGA.initialize('G-5CJJ76646H');
export const trackButtonClick = (event) => {
    const projectName = event.target.parentElement.parentElement.firstChild.innerText;
    ReactGA.event({
        category: 'Button',
        action:    `Clicked on ${projectName} project demo button`
    });
};