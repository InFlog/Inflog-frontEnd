import React, {Component} from 'react'
import "../components/style.css"
import { Form} from 'react-bootstrap'; 
import { Button} from 'react-bootstrap'; 
import { DropdownButton } from 'react-bootstrap'; 
import { Dropdown } from 'react-bootstrap'; 
import axios from 'axios';
import imge from "../loginImg.png";

class RegisterFormInfluencer extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: "",
            category: "",
            description: "",
            followers: 0,
            password: "",
            services: [],
            posts: [],
            reviews: [],
            portfolio: ""
        }
    }

    inputUserName = (e) => {
        const newUserName = e.target.value;
        this.setState({
            username: newUserName
        })
    }

    inputFollowers = (e) => {
        const newFollowers = e.target.value;
        this.setState({
            followers: newFollowers
        })
    }

    inputPassword = (e) => {
        const newPassword = e.target.value;
        this.setState({
            password: newPassword
        })
    }

    // inputUserName = (e) => {
    //     const newUserName = e.target.value;
    //     this.setState({
    //         username: newUserName
    //     })
    // }
    // influencerName: { type: String, required: true },
    // description: { type: String },
    // password: { type: String, required: true },
    // followers: { type: Number },
    // posts: [],
    // services: [],
    // reviews: [],
    // category: { type: String }


    register = async () =>  {
        setTimeout(async () => {
            this.setState({
                username: this.state.username,
                followers: this.state.followers,
                password: this.state.password,
                category: this.state.category
                
            })
            const influencer = {
                influencerName: this.state.username,
                description: this.state.description,
                password: this.state.password,
                followers: this.state.followers,
                posts: this.state.posts,
                services: this.state.services,
                reviews: this.state.reviews,
                category: this.state.category
            }
            try {
                const response = await axios.post('http://localhost:1000/influencer/add', influencer);
                console.log(response.data);
            } catch (err) {
                console.log('Error: ' + err)
            }
        }, 100)

    }

    render(){
        return (
            <div className="container">
                <div className="left">
                    <div className="inner">
    
                        <div className="logo">Register as an Influencer</div>
    
                        
    
                        <Form className="form-elem">
    
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value= {this.state.username} onChange = {this.inputUserName}type="username" placeholder="username" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Instagram Followers</Form.Label>
                            <Form.Control value= {this.state.followers} onChange = {this.inputFollowers}type="instagramFollowers" placeholder="instagramFollowers" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicUsername">
                        <Form.Label>choose category</Form.Label>
                        <Form.Control
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            value = {this.state.category}
                        >
                            <option value="0">Choose...</option>
                            <option value="1">Digital marketing</option>
                            <option value="2">Makeup</option>
                            <option value="3">Videography</option>
                            <option value="3">Cuisine</option>
                            <option value="3">Interior Design</option>
                            <option value="3">Graphic Design</option>
                            
                        </Form.Control>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password} onChange={this.inputPassword} placeholder="Password" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="save password" />
                        </Form.Group>
    
                        <Button className="btn" variant="primary" type="register" onClick= {this.register}>
                            Register
                        </Button>
    
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

export default RegisterFormInfluencer
