import React, {useState} from "react";
import "./App.css"
import Form from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Form from "src/components/Form.js";

function App() {
  const [titleText,setTitleText] = useState("");
  const [descText,setDescText] = useState("");
  const [posts,setPosts] = useState([]);
  return (
    <div className="App">
      {<Form titleText = {titleText}
      setTitleText={setTitleText}
      descText = {descText}
      setDescText = {setDescText}
      posts = {posts}
      setPosts = {setPosts}
      />}
    </div>
  );
}

export default App;
