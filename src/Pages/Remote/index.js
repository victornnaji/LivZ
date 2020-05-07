import React from 'react'
import styled from 'styled-components';
import {ClickButton } from '../../Atom/Button';

const Remote = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log("hello");
    }
    return (
        <RemoteStyle>
           <div className="form-holder">
                <div class="container">
                    <div class="row input-container">
                        <div class="styled-input wide">
                            <input type="text" required />
                            <label>Display Name</label> 
                        </div>
                            
                        <div class="styled-input wide">
                            <input type="text" required />
                            <label>Room Name</label> 
                        </div>
                    </div>

                    <ClickButton to="/host" primary="true" onClick={handleClick}>
                            Continue
                    </ClickButton>

                </div>
            </div>
        </RemoteStyle>
    )
}

const RemoteStyle = styled.div`

    .form-holder{
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    height: 80vh;
    input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
    font-size: 0.75em;
    color: #999;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
}

.styled-input {
    float: left;
    width: 293px;
    margin: 1rem 0;
    position: relative;
    border-radius: 4px;
}

@media only screen and (max-width: 768px){
    .styled-input {
        width:100%;
    }
}

.styled-input label {
    color: #999;
    padding: 1.3rem 30px 1rem 30px;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
}

.styled-input.wide { 
    width: 100%;
}

input {
    padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #fff;
    border: 2px solid #258aff;
    color: black;
    border-radius: 4px;
}

.input-container {
    max-width: 100%;
    margin: 20px auto 25px auto;
}

`;

export default Remote;
