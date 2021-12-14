import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useCrud from "../hooks/useCrud";

export default function Post(props) {
  const params = useParams();
  const postid = params.postid;


  
  const crud = useCrud("https://jsonplaceholder.typicode.com");
  
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  function carregarPost() {
    crud.get("/posts/" + postid).then((resPost) => {
      setPost(resPost);
      crud.get("/posts/" + postid + '/comments').then((resComment) => {
        setComments(resComment);        
      });
    });
  }

  useEffect(carregarPost,[]);

  const tratarOnchange = (event) => {
    post.body = event.target.value;
    setPost({...post});
  };
  
  function salvarPost() {
    setPost(null);
    crud.put("/posts/" + post.id, post).then((res) => {
      setPost(res);
    });
  }
  
  return <> 
  {post?<> 
    <h1>{post.title}</h1>
    <h2>{post.id}</h2>
    <textarea 
      value={post.body} 
      style={{margin:"0px", width: '586px', height: '98px'}}
      onChange={tratarOnchange}
     />   
     <br/>
     {comments?<ul>
       {comments.map( (umComment) => <li key={umComment.id} > {umComment.email + '/' +umComment.name}</li>)}
     </ul>:<>Carregando</>}
     <button onClick={salvarPost}>Salvar</button> 
     
  </>
   : "Carregando o post id=" + postid}
   </>;
}
