import { Button, Container, Form, FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style/signin.css'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
const Signin=()=>{
    const[icon,setIcon]=useState(faEyeSlash);
    const[type,setType]=useState("password");
    const submit= async(e)=>{
        e.preventDefault()
        try{
         const request=await axios.get('http//:localhost/auth/login',{})
         console.log(request)
        }
        catch(error){
            console.log(error)
        }
        console.log('hi')
    }
    var condition = true;
    const icons=()=>{
        if(condition){
            setIcon(faEye);
            setType("text");
            condition=false;
        }
        else{
            setIcon(faEyeSlash);
            setType("password");
        }

    }
    return(
     <Container className="forms mt-5 col-md-6 col-sm-6 col-xs-7 col-lg-4">
        <Form className="col-10 offset-1" onSubmit={submit}>
            <FormGroup>
             <h1 className="offset-md-3 offset-sm-2 offset-xs-3 offset-lg-4 title">Signin</h1>
                <FormLabel className="mt-5 label">EMAIL:</FormLabel>
                <FormControl className="inputs1"></FormControl>
            </FormGroup>
            <FormGroup>
                <FormLabel className="mt-4 label">PASSWORD:</FormLabel>
                <InputGroup>
                  <FormControl className="inputs1" type={type}></FormControl>
                  <InputGroup.Text className="eye"><FontAwesomeIcon onClick={icons} icon={icon}></FontAwesomeIcon></InputGroup.Text>                
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Button className="mt-5 offset-md-3 offset-sm-2 offset-xs-3 offset-lg-3 buttons">LOGIN</Button>
                <Link to="/signup"><p className="mt-2 offset-md-4 offset-sm-3 offset-xs-3 offset-lg-4 "><u>Signup instead ?</u></p></Link>
            </FormGroup>
        </Form>
     </Container>
    );
}
export default Signin;