import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import { Parallax } from 'react-parallax';

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../Components/UserFile";
import Repos from "../Components/Repos";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import Header from '../Layout/Header';
import { Redirect } from "react-router-dom";

import '../App.css';


//parallex_image
const parrlax_image = "https://images.pexels.com/photos/1125272/pexels-photo-1125272.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";


const Home = () => {

    const context = useContext(UserContext); 
    const [quary ,setQuary] = useState('');
    const [user, setUser] = useState(null);



    const fetchDetails = async () => {
        try {
            const {data} = await Axios.get(`https://api.github.com/users/${quary}`);
            setUser(data)

        } catch (eror) {
            toast("Not able to locate the user", {type : "error"})
        }
    }

if (user){
     <Redirect to="/UserPage" />
   }

   
    return (
    <div fluid>
      <Parallax bgImage = {parrlax_image} className = "inlineStyle" style={{height:550}} >
        <Header/>

      <Container >
        
          <InputGroup className="centered">
            <Input
              type="text"
              value={quary}
              onChange ={e => setQuary(e.target.value)}
              placeholder="Please provide the username"
             
            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetails} color="primary">Fetch User</Button>
            </InputGroupAddon>
          </InputGroup>
         
      </Container>
      </Parallax>

      <Row className = "mt-3">
        <Col md="4" className= "ml-6">{user ? <UserCard user={user}/> : null}</Col> 
        <Col md="6" className = "mt-3 mb-3 ml-6">{user ? <Repos repos_url={user.repos_url}/> :null}</Col>
      </Row>
    </div>
  );
}

export default Home;