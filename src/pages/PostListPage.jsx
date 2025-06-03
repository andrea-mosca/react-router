import axios from "axios";
import { useState, useEffect } from "react";

export default function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data.data);
      setPosts(res.data.data);
    });
  }, []);
  return (
    <div className="container mt-4">
      <div className="row row-cols-3">
        {posts.map((post) => (
          <div className="col g-3" key={post.id}>
            <div className="card">
              <div className="card-header fw-bolder fs-4">{post.title}</div>
              <img
                src={`http://localhost:3000/` + post.image}
                alt={post.title}
              />
              <div className="card-body">
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
