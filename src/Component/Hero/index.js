import React from 'react';
import NavBar from '../../Component/NavBar'
import styled from 'styled-components';
import FloatShape from '../../Atom/FloatShape';
import { BigButton } from '../../Atom/Button';

const Hero = () => {
    return (
      <div>
        <NavBar/>
        <FloatShape />
        <HeroStyles>
          <div className="container">
           <div className="heading-image-section">
              <div className="text-content">
                <h1 className="hero-heading">
                    Free Online Code &amp; Screen Sharing. 
                </h1>
                <div className="button-holder">
                  <BigButton to="/remote" primary="true">
                    <span className="big-button-text">Start Sharing</span>
                  </BigButton>
                </div>
              </div>
              <div className="laptop-image">
                <img src="/assets/laptop-image.png" alt="laptop"/>
              </div>
           </div>
          </div>
        </HeroStyles>
      </div>
    )
}

const HeroStyles = styled.div`
  margin-top: 100px;

  .heading-image-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .laptop-image{
    @media(max-width: 768px){
      display: none;
    }
  }

  .button-holder{
    display: flex;
    justify-content: center;
    margin-top: 15px;
    position: relative;

    .big-button-text{
      font-size: 16px;
    }
    @media(min-width: 992px){
      margin-top: 20px;
      justify-content: flex-start;
    }
  }

  .hero-heading{
    font-family: 'Gothic A1', sans-serif;
    color: #1f1f1f;
    font-size: 38px;
    line-height: 60px;
    font-weight: 700;
    letter-spacing: -3px;
    text-align: center;

    @media(min-width: 576px){
      font-size: 48px;
      line-height: 76px;
    }

    @media (min-width: 768px) {
      font-size: 58px;
      line-height: 86px;
    }

    @media (min-width: 992px) {
        font-size: 65px;
        padding-right: 21px;
        text-align: left;
    }

    @media (min-width: 1200px) {
        font-size: 70px;
    }

  }
`;



export default Hero;
