import ReactGA from 'react-ga';

ReactGA.initialize('G-5CJJ76646H');
export const trackButtonClick = (projectName) => {
    ReactGA.event({
        category: 'Button',
        action: `Clicked on ${projectName} project demo button`
    });
};
export const trackProjectSourceCodeClick = (url) => {
    ReactGA.event({
        category: 'Project',
        action: `Clicked on ${url} project source code button`,
        label: url
    });
};