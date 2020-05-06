import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Button = ({type, children, to, ...props}) => {
    return (
        <ButtonStyle type={type} {...props} to={to}>
            {children}
        </ButtonStyle>
    )
};

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
