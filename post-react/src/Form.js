import { getDefaultNormalizer } from "@testing-library/react";
import React, {useEffect, useState} from "react";
import { Button, Modal } from 'react-bootstrap';

const Form = ({titleText,setTitleText,descText,setDescText,posts,setPosts}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const titleTextHandler = (e) => {
    console.log(e.target.value);
    setTitleText = e.target.value;
  };

  const descTextHandler = (e) => {
    console.log(e.target.value);
    setDescText = e.target.value;
  };
  
  useEffect ( () => {
    getData();
  },[] );

  const getData = async()=>{
    await fetch("http://localhost:4000/api/listPosts").
    then(response => response.json()).
    then(receivedData => setPosts(receivedData));
    //   try{
  //   const url = 'http://localhost:4000/api/listPosts';
  //   const result = await fetch(url);
  //   const getResult = await result.json();
  //   setPosts(getResult);
  // }
  // catch(err)
  // {}
}

  return (
    <>
    <input type="text" placeholder="Find Posts"/>
    <button type="submit"><i className="fa fa-search" onClick={getData}></i></button>
      <Button onClick={handleShow}>
        Add New Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <label>title</label> <br/>
            <input value = {titleText} onChange={titleTextHandler} type="text" /> <br/>
            <label>description</label> <br/>
            <input value = {descText} onChange={descTextHandler} type="text" /> <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="App">
        {posts.map(record => (
          <div key = {record.id}>{record.title}{record.description}</div>
        ))}

      </div>
    </>
  );
}
export default Form;