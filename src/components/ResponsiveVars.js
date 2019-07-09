import styled from "styled-components";

export const mobileView = 770;
export const tabletView =  1061;
export const desktopView = 1500;

export const Overlay = (orientation)=>{
    return styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: flex-end;
    background: linear-gradient(${orientation}deg,hsla(0,0%,100%,0) 30%,#f0f0f0 0);
    width: 100%;
`};

export const humbleBlack ='rgb(47, 50, 52)';
export const slightTechBlue = 'rgb(215, 221, 226)';