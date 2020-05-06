import React from 'react'
import styled from 'styled-components';
import IconText from '../../Atom/IconText';

const Texts = [
    {
        icon: "icon-edit-72",
        h5: "ChalkBoard Available",
        p: "Whether it is a small diagram or rough work, chalkboard is available to use."
    },
    {
        icon: "icon-tablet-mobile",
        h5: "100% Responsive",
        p: "Whether it’s a small phone or a large desktop, LivZ can be used and accessible"
    },
    {
        icon: "icon-webpage",
        h5: "Rich IDE",
        p: "Quickly share code blocks live and easily among peers. Contribute in real time."
    },
    {
        icon: "icon-l-settings",
        h5: "Quick Setup",
        p: "No sign up required. Just start sharing videos immediately."
    },
    
]
const Feature = () => {
    return (
        <FeatureStyle>
            <div className="container">
                <div className="section-title">
                    <h2>One Software: Screen, Chalkboard, IDE</h2>
                    <p>Share screen, entire desktop, write on a virtual board, share code all for free..</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row mb-d-30">
                            {Texts.map(text => (
                                <IconText key={text.icon} icon={text.icon} h5={text.h5} p={text.p}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </FeatureStyle>
    )
}

const FeatureStyle = styled.div`
    padding: 53px 0;
    background: #192f48;
    color: #fff;
    margin-top: 50px;

    @media (min-width: 992px) {
       padding: 120px 0;
       margin-top: 150px;
    }

    .section-title{
        text-align: center;
        margin-bottom: 50px; 
        
        h2{
            font-family: "Gothic A1", sans-serif;
            font-weight: 700;
            margin-bottom: 20px;
            font-size: 40px;
            line-height: 55px;
            color: #fff;

            @media (min-width: 768px) {
                font-size: 50px;
                line-height: 64px;
            }

            @media (min-width: 992px) {
                letter-spacing: -2.53px;
            }

        }

        p{
            font-size: 19px;
            font-weight: 400;
            line-height: 32px;
            color: rgba(255, 255, 255, 0.9);

            @media (min-width: 768px) {
                padding: 0 25px;
                font-size: 21px;
            }

        }
    }

    .feature-widget {
        text-align: center;

        @media (min-width: 768px) {
            text-align: left;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
        }

        .widget-icon{
            width: 67px;
            height: 67px;
            border-radius: 5px;
            background: #258aff;
            margin: 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            margin-bottom: 25px;
            font-size: 28px;
            color: #fff;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .widget-icon i {
            -webkit-transition: -webkit-transform .4s;
            transition: -webkit-transform .4s;
            transition: transform .4s;
            transition: transform .4s, -webkit-transform .4s;
        }
    }

        @media (min-width: 768px) {
            .feature-widget .widget-icon {
                margin-bottom: 0;
                margin-right: 25px;
                margin-left: 0;
            }
        }

        .feature-widget .widget-icon {
            width: 67px;
            height: 67px;
            border-radius: 5px;
            background: #258aff;
            margin: 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            margin-bottom: 25px;
            font-size: 28px;
            color: #fff;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .feature-widget .widget-icon i {
            -webkit-transition: -webkit-transform .4s;
            transition: -webkit-transform .4s;
            transition: transform .4s;
            transition: transform .4s, -webkit-transform .4s;
        }

        @media (min-width: 768px) {
            .feature-widget .widget-icon {
                margin-bottom: 0;
                margin-right: 25px;
                margin-left: 0;
            }
        }

        @media (min-width: 768px) {
            .feature-widget .content {
                -webkit-box-flex: calc(100% - 100px);
                    -ms-flex: calc(100% - 100px);
                        flex: calc(100% - 100px);
            }
       }

        .feature-widget .content h5 {
            font-size: 21px;
            font-weight: 600;
            letter-spacing: -1px;
            line-height: 32px;
            margin-bottom: 15px;
            color: #fff;
        }

        .feature-widget .content p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 16px;
            line-height: 28px;
            letter-spacing: -0.4px;
        }

        .feature-widget:hover .widget-icon {
            background: #fff;
            color: #258aff;
        }

        .feature-widget:hover .widget-icon i {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
        }

`;

export default Feature;
