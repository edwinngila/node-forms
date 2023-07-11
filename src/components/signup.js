import { Container,Form,FormGroup,FormLabel,FormControl,Button, InputGroup } from "react-bootstrap";
import '../style/signup.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import img from '../img/depositphotos_89930444-stock-illustration-student-with-laptop_3-transformed-removebg-preview (1).png'
import axios from "axios";
const Signup=()=>
{
    const[type,setType]=useState("password")
    const[icons,setIcon]=useState(faEyeSlash);
    const[type2,setType2]=useState("password")
    const[icons2,setIcon2]=useState(faEyeSlash);
    const[firstName,setFirstName]=useState('');
    const[secondName,setSecondName]=useState('');
    const[Email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[phoneNo,setPhoneNO]=useState('')
    var condition = true;
    const item=()=>{
        if(condition){
            setIcon(faEye);
            setType("text")
            condition=false;
            
        }
        else{
            setIcon(faEyeSlash);
            setType("password")

        }
    }
    const item2=()=>{
        if(condition){
            setIcon2(faEye);
            setType2("text")
            condition=false;
            
        }
        else{
            setIcon2(faEyeSlash);
            setType2("password")
        }
    }
    return(
<div className="row">
        <Container className="col-lg-6">
          <img src={img} alt="img" className="mt-5"></img>
       </Container>
        <Container className="col-lg-6 col-md-7 col-sm-6 col-xs-12 forms">        
               <Form className="col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-sm-1 inputs" onSubmit={async(e)=>{
                    e.preventDefault()
                    try{
                        const Response= await axios.post('http://localhost:4000/auth/register',{
                           firstName:firstName,
                           secondName:secondName,
                           phoneNo:phoneNo,
                           email:Email,
                           password:password
               
                        })
                         //handle the response from the saver
                         console.log(Response.data);
                         console.log('hi');
                       }
                       catch(error){
                           console.log(error)
                       }
                       
               }}>               
                   <div className="row">
                       <div className="row">
                          <div>
                             <h1 className="header offset-lg-4 offset-md-1 mt-4">SIGNUP FORM</h1>
                          </div>
                       </div>
                       <div className="col-lg-6 col-md-12">
                           <FormGroup>
                               <FormLabel className="lable mt-4">FIRST NAME:</FormLabel>
                               <FormControl className="inputs1" name="firstName" onChange={(e)=>{setFirstName(e.target.value)}}></FormControl>
                           </FormGroup>
                       </div>
                       <div className="col-lg-6 col-md-12">
                           <FormGroup>
                               <FormLabel className="lable mt-4">SECOND NAME:</FormLabel>
                               <FormControl className="inputs1" name="secondName" onChange={(e)=>{setSecondName(e.target.value)}}></FormControl>
                           </FormGroup>
                       </div>
                   </div>
                   <FormGroup>
                       <FormLabel className="mt-4 lable">USER EMAIL:</FormLabel>
                       <FormControl className="inputs1" name="email" onChange={(e)=>{setEmail(e.target.value)}}></FormControl>
                   </FormGroup>
                   <FormGroup>
                       <FormLabel className="mt-4 lable">USER PHONE.NO:</FormLabel>
                       <FormControl className="inputs1" name="number" onChange={(e)=>{setPhoneNO(e.target.value)}}></FormControl>
                   </FormGroup>
                   <FormGroup>
                       <FormLabel className="mt-4 lable">PASSWORD:</FormLabel>
                        <InputGroup>
                           <FormControl className="inputs1"name="password" type={type}></FormControl>
                           <InputGroup.Text className="eye" onClick={item}><FontAwesomeIcon icon={icons}></FontAwesomeIcon></InputGroup.Text>  
                        </InputGroup>
                   </FormGroup>
                   <FormGroup>
                       <FormLabel className="mt-3 lable">CONFIRM PASSWORD:</FormLabel>
                       <InputGroup>
                          <FormControl className="inputs1" name="password"  type={type2} onChange={(e)=>{setPassword(e.target.valueAsDate)}}></FormControl>  
                          <InputGroup.Text className="eye" onClick={item2}><FontAwesomeIcon icon={icons2}></FontAwesomeIcon></InputGroup.Text>                     
                       </InputGroup>
                   </FormGroup>
                   <FormGroup>
                       <Button className="button mt-3 offset-lg-4 offset-md-4" style={{width:'250px'}}type="submit">SUBMIT</Button>
                       <Link to="/"><p className="mt-1 offset-md-3 offset-sm-2 offset-xs-2 offset-lg-5 line"><u>Signin instead ?</u></p></Link>
                   </FormGroup>
               </Form>
     </Container>
</div>
    );
}
export default Signup;