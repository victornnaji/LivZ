import React from 'react'
import styled from 'styled-components';
import { Brand } from '../NavBar';
import { Link } from 'react-router-dom';

const NavLinks = [
    {
        to: "#",
        name: "About"
    },
    {
        to: "#",
        name: "Features"
    },
    {
        to: "#",
        name: "Contact"
    },
    {
        to: "#",
        name: "Works"
    },
];

const Socials = [
    {
        icon:"icon-logo-fb-simple",
        link: "#",
    }, 
    {
        icon:"icon-logo-twitter",
        link: "#",
    },
    {
       icon: "icon-google",
       link: "#",
    }
]

const Footer = () => {
    return (
        <FooterStyle>
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-lg-2 col-md-3 ">
                        <div className="footer-logo">
                          <Brand to="/">LivZ</Brand>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6  offset-lg-1">
                        <ul className="nav footer-nav">
                            {NavLinks.map(navlink => (
                                <li className="nav-item" key={navlink.name}>
                                  <Link className="nav-link" to={navlink.to}>{navlink.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="col-lg-2 col-md-3 offset-lg-1">
                        <ul className="footer-social-list">
                            {Socials.map(social => (
                                <li key={social.icon}>
                                <Link to={social.link} >
                                    <i className={`icon ${social.icon}`} ></i>
                                </Link>
                               </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
               <p>©{new Date().getFullYear()} Built by Nnaji Victor. </p>
            </div>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    @media(min-width: 991px){
        margin-top: 50px;
       margin-bottom: 20px;
    }

    .footer-nav{
        -webkit-box-pack: center;
        -ms-flex-pack: center;
          justify-content: center;

          .nav-item{
            font-size: 15px;
            font-weight: 600;
            letter-spacing: -0.69px;
            position: relative;
          }
    }

    .footer-nav .nav-item a {
  padding: 0 7px;
}

@media (min-width: 992px) {
  .footer-nav .nav-item a {
    padding: 0 17px;
  }
}

.footer-nav .nav-item:after {
  position: absolute;
  content: '';
  background-color: #0d41e9;
  left: 0;
  width: 45px;
  height: 2px;
  bottom: 0;
  opacity: 0;
  margin-left: 6px;
  margin-top: 2px;
  -webkit-transition: .4s;
  transition: .4s;
}

@media (min-width: 768px) {
  .footer-nav .nav-item:after {
    margin-left: 6px;
  }
}

@media (min-width: 992px) {
  .footer-nav .nav-item:after {
    margin-left: 16px;
  }
}

.footer-nav .nav-item:hover a {
  color: #000;
}

.footer-nav .nav-item:hover:after {
  opacity: 1;
}

.footer-social-list {
  margin-top: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

@media (min-width: 768px) {
  .footer-social-list {
    margin-top: 0;
  }
}

.footer-social-list li {
  margin-right: 18px;
}

.copyright {
  text-align: center;
  margin-top: 15px;
}

.copyright p {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.6px;
  line-height: 28px;
  color: #666666;
}
`;

export default Footer;
