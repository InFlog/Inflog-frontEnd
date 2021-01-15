import React, {Component} from 'react'
import "../components/style.css"
import { Form} from 'react-bootstrap'; 
import { Button} from 'react-bootstrap'; 
import axios from 'axios';
import imge from "../brandImg.png";
import  {Link} from "react-router-dom";

class RegisterFormBrand extends Component{
//connect input to the backend with te schema
    constructor(props){
        super(props)
        this.state = {
            username: "",
            category: "",
            description: "",
            password: "",
            services: [],
            posts: [],
            reviews: [],
            pastProjects:[]
        }
    }
    inputUserName = (e) => {
        const newUserName = e.target.value;
        this.setState({
            username: newUserName
        })
    }
    inputDescription = (e) => {
        const newDescription = e.target.value;
        this.setState({
            description: newDescription
        })
    }
    inputCategory = (e) => {
        const newCategory = e.target.value;
        this.setState({
            
            category: newCategory
            
        })
        console.log(newCategory);
    }
    inputPassword = (e) => {
        const newPassword = e.target.value;
        this.setState({
            password: newPassword
        })
    }
    register = async () =>  {
        setTimeout(async () => {
            this.setState({
                username: this.state.username,
                description: this.state.description,
                password: this.state.password,
                category: this.state.category
                
            })
            const brand = {
                brandName: this.state.username,
                description: this.state.description,
                password: this.state.password,
                posts: this.state.posts,
                services: this.state.services,
                reviews: this.state.reviews,
                category: this.state.category
            }
            try {
                const response = await axios.post('http://localhost:1000/brand/add', brand);
                console.log(response.data);
            } catch (err) {
                console.log('Error: ' + err)
            }
        }, 100)
    }
    //render frontend components
    render(){
        return (
            <div className="container">
                <div className="left">
                    <div className="inner">
    
                        <div className="logo">I'm a Brand</div>
    
                        
    
                        <Form className="form-elem">
    
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value= {this.state.username} onChange = {this.inputUserName}type="username" placeholder="" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicCategory">
                        <Form.Label>choose category</Form.Label>
                        <Form.Control
                            as="select"
                            value = {this.state.category}
                            onChange = {this.inputCategory}
                        >
                            <option value='please select a category'>please select category</option>
                            <option value="Tech">Tech</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Makeup">Makeup</option>
                            <option value="Videography">Videography</option>
                            <option value="Cuisine">Cuisine</option>
                            <option value="Interior Design">Interior Design</option>
                            <option value="Graphic Design">Graphic Design</option>
                            
                        </Form.Control>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password} onChange={this.inputPassword} placeholder="" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="save password" />
                        </Form.Group>
    
                        <Link to="/profile">
                            <Button className="btn" variant="primary" type="register" onClick= {this.register}>
                                Register
                            </Button>
                        </Link> 
    
                        </Form>
                        </div>
              
                </div>
    
            <div className="right">
            
            <img src={imge} className="imge" alt=""/>
            </div>
           
            </div>
        )
    }
    
}
export default RegisterFormBrand