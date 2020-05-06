import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Button = ({type, children, to, ...props}) => {
    return (
        <ButtonStyle {...props} to={to}>
            {children}
        </ButtonStyle>
    )
};

export const BigButton = ({children, to,}) => {
    return (
        <BigButtonStyle to={to}>
            {children}
            <span className="cursor-arrow"></span>
        </BigButtonStyle>
    )
};

const BigButtonStyle = styled(Link)`
    font-family: inherit;
    text-decoration: none;
    text-shadow: none;
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    border-radius: 4px;
    flex-shrink: 0;
    min-width: min-content;
    backface-visibility: hidden;
    font-size: 2rem;
    line-height: 1.65;
    color: #fff;
    background-color: #008CFF;
    box-shadow: 0 8px 48px 4px rgba(86,91,115,0.15);
    will-change: background-color, transform, box-shadow;
    transition-property: background-color, transform, box-shadow;
    transition-duration: 200ms;
    transition-property: all;
    transition-duration: 200ms;
    position: relative;

    .cursor-arrow{
        @media(min-width: 929px){
          margin-left: 2ch;
          margin-top: 5px;
       }
      &::before{
        content: '';
        border: solid white;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 4px;
        transform: rotate(-45deg) translateY(-1px);
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
      }

      &::after{
        content: '';
        display: inline-block;
        background-color: white;
        height: 2px;
        width: 14px;
        margin-left: 0.25em;
        animation: blink 1.1s infinite;
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
      }
    }

    @media(max-width: 768px){
     .cursor-arrow::before{
           transform: rotate(-45deg) translateY(17px) translateX(12px);
      }
      .cursor-arrow::after{
        width: 17px;
        animation: none;
      }
    }

    &:hover{
        transform: translateY(-2px);
        box-shadow: 0 16px 60px 0 rgba(86,91,115,0.2);
        .cursor-arrow::before{
            transform: rotate(-45deg) translateY(17px) translateX(12px);
        }

        .cursor-arrow::after{
            animation: none;
            width: 17px;
        }

        .cursor-arrow{
            margin-left: 0ch;
            margin-top: 0px;
        }
        color: #fff;
    }

`;

const ButtonStyle = styled(Link)`
    background: ${props => props.primary ? "#258aff" : "white"};
    color: ${props => props.primary ? "#fff" : "#000"};
    width: 137px;
    height: 40px;
    border-radius: 3px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        background: #135cb1;
        color: ${props => props.primary ? "#fff" : "#000"};
    }

    @media(max-width: 769.5px){
        width: 90px;
        height: 30px;
        font-size: 12px;
    }
`;

export default Button;
