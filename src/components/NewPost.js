import useCrud from "../hooks/useCrud";
import { useState } from "react";

export default function NewPost(props) {
    const crud = useCrud("/posts");
    const [post, setPost] = useState({title:"",body:""});

    function tratarOnchange(event) {
        if(event.target.name == "title") {
            post.title = event.target.value;
        } else {
            post.body = event.target.value;
        }
        setPost({...post});        
    }

    function salvarPost(event) {
        crud.post("", post).then((res) => {
            setPost(res);
        });
        event.preventDefault();
    }


return(
<>
    <h1>Novo Post</h1>
    <form onSubmit={salvarPost}>
        <label>Título:</label>
        <input type="text" name="title" value={post.title} onChange={tratarOnchange} />
        <br/>
        <br/>
        <label>Corpo:</label>
        <textarea name="body" value={post.body} onChange={tratarOnchange}/>
        <br/>
        <br/>
        <input type="submit" value="Salvar" />        
    </form>
</>)
}