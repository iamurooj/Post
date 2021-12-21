import React, { Fragment, useState} from "react";
import {Modal, Button} from 'react-bootstrap';

const EditPost = ({ posts }) => {
    //console.log(posts);
    const [postTitle, setPostTitle] = useState(posts.title);
    const [postDesc, setPostDesc] = useState(posts.description);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updatePost = async(e) => {
        e.preventDefault();
        try{
            const body = {postTitle,postDesc}
            const response = await fetch(`http://localhost:4000/api/updatePost/${posts.id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/";

        }
        catch(err){
            console.error(err.message);
        }
    }

    return(
        <Fragment>
           <i className="fa fa-edit" onClick={handleShow}></i>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <label>title</label> <br/>
            <input className="Modal-inputBox" value = {postTitle}  type="text" onChange={e => setPostTitle(e.target.value)} /> <br/>
            <label>description</label> <br/>
            <input className="Modal-inputBox" value = {postDesc} type="text" onChange={e => setPostDesc(e.target.value)} /> <br/>
        </Modal.Body>
        <Modal.Footer>
        <button onClick={e => updatePost(e)}>Update</button>
        </Modal.Footer>
      </Modal>
        </Fragment>
    );
}

export default EditPost;