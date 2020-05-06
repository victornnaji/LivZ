import React from 'react'
import styled from 'styled-components';
import { OutlineButton } from '../../Atom/Button';

const CTA = () => {
    return (
        <CTAStyle>
            <div className="container">
            <div className="cta-inner-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="cta-content">
                                <span className="title-small-text">Ready to check it out?</span>
                                <h2>Try our free software!</h2>
                                <p>Test out the power of Twilo and socket.io</p>
                                <div className="cta-btn">
                                <OutlineButton to="/remote">
                                    Start Sharing
                                </OutlineButton>
                                    <p className="extra-info-text mt-4">No login required</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CTAStyle>
    )
}

const CTAStyle = styled.div`
  .cta-inner-wrapper {
    background-color: #192f48;
    position: relative;
    border-radius: 4px;
    padding-top: 61px;
    padding-bottom: 36px;
  }

  @media (min-width: 992px) {
    .cta-inner-wrapper {
      padding-top: 115px;
      padding-bottom: 115px;
    }
  }

  .cta-inner-wrapper:before {
    border-radius: 4px;
    position: absolute;
    width: 100%;
    content: "";
    left: 0;
    top: 0;
    background: #258aff;
    height: 100%;
  }

  @media (min-width: 576px) {
    .cta-inner-wrapper:before {
      -webkit-transform: rotate(-4deg);
      transform: rotate(-4deg);
    }
  }

  .cta-content {
    text-align: center;
    padding: 0 20px;
  }

  @media (min-width: 480px) {
    .cta-content {
      padding: 0;
    }
  }

  .cta-content .title-small-text {
    color: #ecf2fa;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2.63px;
    text-transform: uppercase;
    margin-bottom: 33px;
  }

  .cta-content h2 {
    color: #fff;
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    margin-bottom: 27px;
    font-size: 40px;
    line-height: 48px;
  }

  @media (min-width: 576px) {
    .cta-content h2 {
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 27px;
    }
  }

  @media (min-width: 768px) {
    .cta-content h2 {
      font-size: 60px;
      font-weight: 700;
      line-height: 48px;
      margin-bottom: 27px;
    }
  }

  @media (min-width: 992px) {
    .cta-content h2 {
      letter-spacing: -2.53px;
    }
  }

  .cta-content p {
    color: #ecf2fa;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.4px;
    line-height: 32px;
    padding: 0px 15px;
  }

  @media (min-width: 576px) {
    .cta-content p {
      padding: 0px 30px;
    }
  }

  @media (min-width: 768px) {
    .cta-content p {
      padding: 0 45px;
    }
  }

  @media (min-width: 992px) {
    .cta-content p {
      padding: 0 30px;
    }
  }

  .cta-content .cta-btn {
    padding-top: 11px;
  }

  .cta-content .cta-btn .btn {
    width: 226px;
    height: 60px;
    border-radius: 3px;
    border: 2px solid #ffffff;
    background-color: #258aff;
  }

  .cta-content .cta-btn .btn i {
    font-size: 18px;
    margin-right: 15px;
  }

  .cta-content .cta-btn .btn:hover {
    background: #fff;
    color: #258aff;
  }

  .cta-content .cta-btn .extra-info-text {
    color: #ecf2fa;
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
  }
`;

export default CTA;
