import React from 'react';
import styled from "styled-components";
import ReactLoading from "react-loading";


const Loading = () => {
  return (
    <LoadingContainer>
      <ReactLoading type={'spinningBubbles'} color={'#19272D'}  />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Loading;