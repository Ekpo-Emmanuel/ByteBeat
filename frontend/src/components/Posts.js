import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GalleryVerticalEnd } from 'lucide-react';
import { CiClock2 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
// import postList from './blogList';
import axios from 'axios';

const Posts = () => {
  const truncateLongWords = (sentence, maxLength) => {
    if (sentence.length > maxLength) {
      return sentence.slice(0, maxLength) + '...';
    }
    return sentence;
  }

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/')
      .then((response) => {
        setPostList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  
  return (
  <section>
    <div className="container">
      {/* <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">
            <span>Recent posts</span>
          </h2>
        </div>
      </div> */}
      <div className="row gy-5 gx-4 g-xl-5">
      {postList.map((post, index) => (
        <div className="col-lg-6" key={index}>
          <article className="card post-card h-100 border-0 bg-transparent">
            <div className="card-body">
              <Link
                className="d-block href"
                to={"/post/"+post.id}
                title={post.title}
              >
                <div className="post-image position-relative">
                {post.image && (
                    <img
                      className="w-100 h-auto rounded"
                      src={`assets/images/blog/${post.image}`}
                      alt={post.title}
                      width={970}
                      height={500}
                    />
                  )}
                </div>
              </Link>
              <ul className="card-meta list-inline mb-3">
                <li className="list-inline-item mt-2" style={{display: "inline-flex", alignItems: "center", gap: "5px"}}>
                  <CiCalendar />
                  <span>{post.date}</span>
                </li>
                <li className="list-inline-item mt-2">—</li>
                <li className="list-inline-item mt-2" style={{display: "inline-flex", alignItems: "center", gap: "5px"}}>
                  <CiClock2 />
                  <span>{Math.round(post.read)} min read</span>
                </li>
              </ul>
              <Link
                className="href"
                to={"/post/"+ post.id}
                title={post.title}
              >
                <h3 className="mb-3 post-title">
                  {post.title}
                </h3>
              </Link>
              <p>
                {truncateLongWords(post.content, 140)}
              </p>
            </div>
            <div className="card-footer border-top-0 bg-transparent p-0">
              <ul className="card-meta list-inline">
                <li className="list-inline-item mt-2">
                  <Link
                    className="card-meta-author href"
                    to="#"
                    title="Read all posts by - Emmanuel Ekpo"
                  >
                  <img
                      className="w-auto"
                      src="assets/images/author/emma.jpg"
                      alt="Emmanuel Ekpo"
                      width={26}
                      height={26}
                    />{" "}
                    by <span>Emmanuel</span>
                  </Link>
                </li>
                <li className="list-inline-item mt-2">•</li>
                <li className="list-inline-item mt-2">
                  <ul className="card-meta-tag list-inline">
                      {post.tags.map((tag, index) => (
                      <li className="list-inline-item small" key={index}> 
                          <Link to="/" className="href">{tag}</Link>
                      </li>
                      ))}
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </div>        
        ))}
        {/* {postList.map((post, index) => (
        <div className="col-lg-6" key={index}>
          <article className="card post-card h-100 border-0 bg-transparent">
            <div className="card-body">
              <Link
                className="d-block href"
                to={"/post/"+post.id}
                title={post.title}
              >
                <div className="post-image position-relative">
                  <img
                    className="w-100 h-auto rounded"
                    src={`assets/images/blog/${post.image}`}
                    alt={post.title}
                    width={970}
                    height={500}
                  />
                </div>
              </Link>
              <ul className="card-meta list-inline mb-3">
                <li className="list-inline-item mt-2" style={{display: "inline-flex", alignItems: "center", gap: "5px"}}>
                  <CiCalendar />
                  <span>{post.date}</span>
                </li>
                <li className="list-inline-item mt-2">—</li>
                <li className="list-inline-item mt-2" style={{display: "inline-flex", alignItems: "center", gap: "5px"}}>
                  <CiClock2 />
                  <span>{post.read}</span>
                </li>
              </ul>
              <Link
                className="href"
                to={"/post/"+ post.id}
                title={post.title}
              >
                <h3 className="mb-3 post-title">
                  {post.title}
                </h3>
              </Link>
              <p>
                {truncateLongWords(post.content, 140)}
              </p>
            </div>
            <div className="card-footer border-top-0 bg-transparent p-0">
              <ul className="card-meta list-inline">
                <li className="list-inline-item mt-2">
                  <Link
                    className="card-meta-author href"
                    to="#"
                    title="Read all posts by - Thomas Macaulay"
                  >
                    <img
                      className="w-auto"
                      src="assets/images/author/thomas-macaulay.jpg"
                      alt="Thomas Macaulay"
                      width={26}
                      height={26}
                    />{" "}
                    by <span>Thomas</span>
                  </Link>
                </li>
                <li className="list-inline-item mt-2">•</li>
                <li className="list-inline-item mt-2">
                  <ul className="card-meta-tag list-inline">
                      {post.tags.map((tag, index) => (
                      <li className="list-inline-item small" key={index}> 
                          <Link to="/" className="href">{tag}</Link>
                      </li>
                      ))}
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </div>        
        ))} */}
      {/* <div className="col-12 text-center">
        <Link
          aria-label="View all posts"
          className="btn btn-primary mt-5 d-inline-flex align-items-center"
          to="/blog.html"
        >
          <GalleryVerticalEnd size={16} strokeWidth={1.5} style={{ marginRight: '8px' }} />
          <span style={{ marginLeft: '8px' }}>View all posts</span>
        </Link>
      </div> */}
      </div>
    </div>
  </section>
  )
}

export default Posts
