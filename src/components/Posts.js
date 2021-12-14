import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCrud from "../hooks/useCrud";

export default function Posts(props) {
  const crud = useCrud("https://jsonplaceholder.typicode.com/posts");
  const [posts, setPosts] = useState(null);

  function carregarPosts() {
    crud.get().then((res) => {
      setPosts(res);
    });
  }

  useEffect(carregarPosts,[]);
  

  return (
  <>
  {
  posts?
    <>    
    <ul>
      {posts.map( (umPost) => <li key={umPost.id} > <Link to={'/post/' + umPost.id}> {umPost.id + '/' +umPost.title}</Link> </li>)}
    </ul> 
    </>
  : "Carregando"
  }
  </>);
}
