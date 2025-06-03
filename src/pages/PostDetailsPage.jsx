import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostDetailsPage() {
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      setCurrentPost(res.data.data);
    });
  }, []);
  return (
    <div className="container mt-4">
      <div className="row row-cols-3">
        <div className="col g-3" key={currentPost.id}>
          <div className="card">
            <div className="card-header fw-bolder fs-4">
              {currentPost.title}
            </div>
            <img
              src={`http://localhost:3000/` + currentPost.image}
              alt={currentPost.title}
            />
            <div className="card-body">
              <p className="card-text">{currentPost.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
