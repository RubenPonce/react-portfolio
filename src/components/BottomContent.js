import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
const ContentContainer = styled.div`
  max-width: 800px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin: 2em auto;
  h2{
    line-height: 1.5;
  }
  a{
    color: #fff;
    :hover{
      color: #000;
    }
  }

`
export default function BottomContent() {
  return (
    <ContentContainer>
    <h2>Looking for a full stack developer? <Link to="/contact" >Get in touch. </Link></h2>
    </ContentContainer>
  )
}
