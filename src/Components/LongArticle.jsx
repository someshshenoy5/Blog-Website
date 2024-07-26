import React, { useEffect, useContext, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../AppContext";

const LongArticle = () => {

  const { id } = useParams();
  const { getBlogById, selectedBlog, isError } = useContext(AppContext);
  const prevIdRef = useRef()

  useEffect(() => {
    if (prevIdRef.current !== id) {
      getBlogById(id);
      prevIdRef.current = id;
    }
  }, [id, getBlogById]);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }
  if (!selectedBlog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="long-article">
      <div className="Article-Heading">
        <h1 className="poppin-Heading">{selectedBlog.blogTitle} </h1>
        <h4 className="category"> {selectedBlog.category}</h4>
      </div>
      <p className="playwrite-mx-para">{selectedBlog.content}</p>
      <p className="article-author poppin-text">By {selectedBlog.authorName}</p>
      <div className="updatedeletesection">
        <Link to={`/updateBlog/${id}`}>
          <button className="updatebutton"> EDIT</button>
        </Link>
          <button className="deletebutton">DELETE </button>
      </div>
    </div>
  );
};

export default LongArticle;
