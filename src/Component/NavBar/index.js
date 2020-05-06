import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../Atom/Button';

const NavBar = () => {
    return (
        <Header>
            <div className="container">
                <NavContainer>
                    <Brand to="/">LivZ</Brand>
                    <Menu>
                       <Button primary to="/remote">Start Sharing</Button>
                    </Menu>
                </NavContainer>
            </div>
       </Header>
    )
};

const Header = styled.header` 
    @media (min-width: 768px) {
        padding-top: 20px;
    }
    @media (min-width: 992px) {
        padding-top: 15px;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

export const Brand = styled(Link)`
    font-size: 30px;
    font-family: "Gothic A1", sans-serif;
    font-weight: 900;
    position: relative;

    &::after{
        content:"";
        position: absolute;
        height: 10px;
        width: 10px;
        border-radius: 100%;
        background-color: #f46f7c;
        bottom: 5px;
        right: -15px;
    }
`;

const Menu = styled.div`

`;

export default NavBar
