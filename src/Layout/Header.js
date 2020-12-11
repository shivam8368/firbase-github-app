import React from 'react'
import header_img from "../Media/header.jpg";
import { Parallax, Background } from 'react-parallax';
import {
  Row,
  Container,
  Col,
  Input,
  Button,
} from "reactstrap";
import NavBar from './NavBar';
import Body from './Body';
import Footer from './Footer';





const Header = () => {
    return (
        <div>
         <div className = "parallex-div">
      <Parallax bgImage={header_img} className = "inlineStyle" style={{height:700}} >
          
        <NavBar/>

        <Container className=" header-style" >
            <h3>Hey There... </h3>
            <h1>Welcome !</h1>
            <h4>Hope you will find something amazing here.. </h4>
        </Container>
        </Parallax>
        </div>
        <Body/>
        <Footer/>

    
        </div>
    )
};


export default  Header;
