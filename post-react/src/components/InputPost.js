import React, { Fragment, useState } from "react";
import {Modal, Button} from 'react-bootstrap';

const InputPost = () => {
    const [postTitle, setPostTitle] = useState("");
    const [postDesc, setPostDesc] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{
            setPostDesc("desc");
            setPostTitle("tite");
            const body = {postTitle,postDesc};
            const response = await fetch("http://localhost:4000/api/createPost",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            //console.log(response);
            //window.location = "/";
        }
        catch(err){
            console.error(err.message);
        }
    };
    return(
        <Fragment>
            <form className="mt-5">
    <button onClick={handleShow} >Add New Post</button>{' '}
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
        <button onClick={onSubmitForm}>Save</button>
        </Modal.Footer>
      </Modal>
      </form>
        </Fragment>
    );
}

export default InputPost;