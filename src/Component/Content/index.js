import React from 'react'
import styled from 'styled-components';

const Content = () => {
    return (
        <ContentStyle>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-sm-10 col-md-6 col-10 order-md-2 offset-xl-1 d-none d-md-block">
                        <div className="content-image">
                            <img src="/assets/card.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-sm-12 col-md-6 order-md-1">
                        <div className="content-text content-left-content">
                            <h2>Completely Free for Everyone.</h2>
                            <div className="content-small-card">
                                <div className="card-icon">
                                    <i className="icon icon-users-mm-2"></i>
                                </div>
                                <div className="card-content">
                                    <h5>Built for real users</h5>
                                    <p>
                                        Screen sharing and code sharing made easy for real user to play around with.
                                    </p>
                                </div>
                            </div>
                            <div className="content-small-card">
                                <div className="card-icon">
                                    <i className="icon icon-settings"></i>
                                </div>
                                <div className="card-content">
                                    <h5>Easy setup process</h5>
                                    <p>
                                        No configuration required. Just share link and begin inviting colleagues.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentStyle>
    )
};

const ContentStyle = styled.div`
  padding-bottom: 42px;
  margin-top: 50px;

  @media (min-width: 992px) {
    padding-bottom: 112.5px;
    margin-top: 100px;
  }
  .content-image {
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    .content-image {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 100%;
      margin-bottom: 0;
    }
  }

  @media (min-width: 992px) {
    .content-image {
      display: block;
    }
  }

  .content-text {
    text-align: left;
  }

  @media (min-width: 1200px) {
    .content-text {
      padding-right: 30px;
    }
  }

  .content-text h2 {
    padding-bottom: 25px;
    font-family: "Gothic A1", sans-serif;
    font-weight: 800;
  }

  @media (min-width: 576px) {
    .content-text h2 {
      font-size: 30px;
      line-height: 36px;
    }
  }

  @media (min-width: 768px) {
    .content-text h2 {
      font-size: 40px;
      line-height: 55px;
    }
  }

  @media (min-width: 992px) {
    .content-text h2 {
      font-size: 48px;
      letter-spacing: -2.53px;
      line-height: 64px;
    }
  }

  .content-text .content-small-card {
    margin-bottom: 10px;
  }

  .content-small-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    border-radius: 5px;
    padding-right: 30px;
    border: 1px solid #e5e5e5;
    background: #fff;
  }

  .content-small-card .card-icon {
    font-size: 32px;
    width: 100px;
    color: #258aff;
    text-align: center;
    margin-top: 4px;
  }

  .content-small-card .card-icon i {
    font-weight: 400;
  }

  .content-small-card .card-content {
    -webkit-box-flex: calc(100% - 100px);
    -ms-flex: calc(100% - 100px);
    flex: calc(100% - 100px);
    max-width: calc(100% - 100px);
  }

  .content-small-card .card-content h5 {
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 32px;
  }

  .content-small-card .card-content p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: #666666;
    margin-bottom: 0;
    padding-top: 7px;
  }
`;

export default Content;
