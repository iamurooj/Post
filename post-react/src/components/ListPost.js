import React, { Fragment, useEffect, useState } from "react";
import EditPost from "./EditPost";
import Search from './Search';

const ListPost = () => {

    const [posts, setPosts] = useState([]);
    //const [likes, setLikes] = useState("");
    //const [dislikes, setDislikes] = useState("");
    const deletePost = async(id) => {
        try{
            const response = await fetch(`http://localhost:4000/api/deletePost/${id}`,{
                method: "DELETE"
            });
            setPosts(posts.filter(post => post.id !== id));
        }
        catch(err){
            console.error(err.message);
        }
    }

    const getPosts = async() =>{
        try{
            const response = await fetch("http://localhost:4000/api/listPosts");
            const jsonData = await response.json();
            setPosts(jsonData);
        }
        catch (err){
            console.error(err.message);
        }
    };

    useEffect(() =>{
        getPosts();
    },[]);

    const updateLikes = async(postlikes) => {
       let num = parseInt(postlikes);
        console.log(num);
        num++;
        try{
            const body = {num}
            const response = await fetch(`http://localhost:4000/api/updateLikes/${posts.id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
           // window.location = "/";
        }
        catch(err){
            console.error(err.message);
        }
    }

    const updateDislikes = async(postdislikes) => {
        let num = parseInt(postdislikes);
        console.log(num);
        num++;
        try{
            const body = {num}
            const response = await fetch(`http://localhost:4000/api/updateDislikes/${posts.id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            //window.location = "/";
        }
        catch(err){
            console.error(err.message);
        }
    }

    return(
        <Fragment>
            <Search posts={posts} setPosts={setPosts}/>
            <div className="App mt-5">
                {posts.map(posts => (
                <div className="App-div" key = {posts.id}>{posts.title}
                <i className="fa fa-trash" onClick={() => deletePost(posts.id)}></i>
                <EditPost posts = {posts} />
                <br/>{posts.description} <br/>
                <i onClick={() => updateLikes(posts.likes)} className="fa fa-thumbs-up"></i>
                {posts.likes > 0 ? posts.likes : null}
                <i onClick={() => updateDislikes(posts.dislikes)} className="fa fa-thumbs-down"></i>
                {posts.dislikes > 0 ? posts.dislikes : null}
                </div>
                ))}
            </div>
        </Fragment>
    );
}

export default ListPost;