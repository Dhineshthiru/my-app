import { useState, useEffect } from "react";
import Header from "./API CALL/Header";
import "./App.css";
function App() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        {post ? (
          post.map((post) => {
            return (
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <a href="#button" className="btn btn-primary">
                    Go somewhere..
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <h3>Loading....</h3>
        )}
      </div>
    </div>
  );
}
export default App;
