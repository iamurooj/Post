import React, {useState} from "react";
import { Button, Modal } from 'react-bootstrap';

const Form = () => {
        const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <input type="text" placeholder="Find Posts"/>
    <button type="submit"><i class="fa fa-search"></i></button>
      <Button onClick={handleShow}>
        Add New Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <label>title</label> <br/>
            <input type="text" /> <br/>
            <label>description</label> <br/>
            <input type="text" /> <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Form;