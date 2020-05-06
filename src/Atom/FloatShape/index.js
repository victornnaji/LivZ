import React from 'react';
import styled from 'styled-components';

const FloatShape = () => {
    return (
        <FloatShapeStyle/>
    )
}

const FloatShapeStyle = styled.div`
    position: relative;

  &:before{
      position: absolute;
    content: url("/assets/rectangle.png");
    left: -16%;
    top: 0;
    -webkit-animation: rotation 9s infinite linear;
          animation: rotation 9s infinite linear;

          @media (min-width: 768px){
            left: 0px;
            top: -13px;
          }

          @media (min-width: 992px) {
            left: 34px;
            top: -10px;
          }

          @media(max-width: 767.5px){
          display: none;
        }
   }

   &:after{
    position: absolute;
    content: url("/assets/oval.png");
    right: 0;
    top: 414px;
    -webkit-animation: rotation 9s infinite linear;
          animation: rotation 9s infinite linear;

        @media (min-width: 768px) {
            right: 18px;
            top: 560px;
        }

        @media (min-width: 992px) {
            right: 25px;
            top: 414px;
        }

        @media(max-width: 767.5px){
          display: none;
        }
   }
`;

export default FloatShape;
