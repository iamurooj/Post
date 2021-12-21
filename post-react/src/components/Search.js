import React, { Fragment, useState } from "react";
import EditPost from "./EditPost";

const Search = ({posts, setPosts}) => {
    const [search,setSearch] = useState("");
  const searchPosts = (e) =>{
    setSearch(e.target.value);
    console.log(search)
    if(search !== "")
    {
    const filteredPosts = posts.filter(
        post => {
          return (
            post
            .title
            .toLowerCase().includes(search.toLowerCase())
          );
        }
      );
      setPosts(filteredPosts);
    }
  }

return(
    <Fragment>
     <input className="App-inputBox" type="text" placeholder="Find Posts" onChange={searchPosts}/>
     <button type="submit"><i className="fa fa-search" ></i></button>
     </Fragment>
);
}

export default Search;