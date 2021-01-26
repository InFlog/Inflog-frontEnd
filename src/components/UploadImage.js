import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';

const UploadImage = (props) => {

    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const postDetails = () => {
        const data = new FormData;
        data.append("file", image);
        data.append("upload_preset", "inflog");
        data.append("cloud_name", "davidwalzer");
        fetch("https://api.cloudinary.com/v1_1/davidwalzer/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
                props.controller.setImageUrl(data.url)

            })
            .catch(err => {
                console.log(err);
            })




    }

    return (
        <div>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={(e) => setImage(e.target.files[0])} type="file" placeholder="" />
            </Form.Group>

            <Button variant="primary" onClick={postDetails}>
                Upload Image
        </Button>
        </div>

    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);