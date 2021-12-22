import "./styles.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Link to="/posts">Ver todos os posts </Link>
      <br/>
      <Link to="/novoPost">criar uma postagem nova. </Link>
      
    </div>
  );
}
