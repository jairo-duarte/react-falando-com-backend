import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Post from "./components/Post";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="posts" element={<Posts />} />
        <Route path="post" element={<Post />}>
          <Route path=":postid" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
