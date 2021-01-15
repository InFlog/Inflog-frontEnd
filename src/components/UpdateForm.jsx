import React, {Component} from 'react'
import "../components/style.css"
import { Form} from 'react-bootstrap'; 
import { Button} from 'react-bootstrap';  
import axios from 'axios';
import imge from "../updateImg.png";
import  {Link} from "react-router-dom";

class UpdateForm extends Component{
 //connect input to the backend with te schema
    constructor(props){
        super(props)
        this.state = {
            newusername: "",
            newcategory: "",
            newdescription: "",
            followers: null,
            services: [],
            
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
    inputCategory = (e) => {
        const newCategory = e.target.value;
        this.setState({
            
            category: newCategory
            
        })
        console.log(newCategory);
    }
    inputDescription = (e) => {
        const newDescription = e.target.value;
        this.setState({
            
            description: newDescription
            
        })
        console.log(newDescription);
    }
    inputServices = (e) => {
        const newServices = e.target.value;
        this.setState({
            services: newServices
        })
    }
    update = async () =>  {
        setTimeout(async () => {
            this.setState({
                username: this.state.username,
                followers: this.state.followers,
                services: this.state.services,
                category: this.state.newcategory
                
            })
            const influencer = {
                influencerName: this.state.newusername,
                description: this.state.newdescription,
                followers: this.state.newfollowers,
                services: this.state.newservices,
                category: this.state.newcategory
            }
            try {
                const response = await axios.post('http://localhost:1000/influencer/update', influencer);
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
    
                        <div className="logo">Update Profile</div>
    
                        
    
                        <Form className="form-elem">
    
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>New Username</Form.Label>
                            <Form.Control value= {this.state.username} onChange = {this.inputUserName}type="username" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value= {this.state.description} onChange = {this.inputDescription}type="current instagramFollowers" placeholder="" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Instagram Followers</Form.Label>
                            <Form.Control value= {this.state.followers} onChange = {this.inputFollowers}type="current instagramFollowers" placeholder="eg. 11.6k" />
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Services</Form.Label>
                            <Form.Control value= {this.state.services} onChange = {this.inputServices}type="" placeholder="" />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicUsername">
                        <Form.Label>choose category</Form.Label>
                        <Form.Control
                            as="select"
                            value = {this.state.category}
                            onChange = {this.inputCategory}
                        >
                            <option value='please select a category'>please select new category</option>
                            <option value="Tech">Tech</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Makeup">Makeup</option>
                            <option value="Videography">Videography</option>
                            <option value="Cuisine">Cuisine</option>
                            <option value="Interior Design">Interior Design</option>
                            <option value="Graphic Design">Graphic Design</option>
                            
                        </Form.Control>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="save changes" />
                        </Form.Group>
    
                        <Link to="/profile">
                        <Button className="btn" variant="primary" type="login"onClick= {this.update}>
                            Update
                        </Button>
                        </Link> 
                       
                        <div className="discardChanges">
                        <a href="/profile">discard changes</a>
                        </div>
    
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
export default UpdateForm;