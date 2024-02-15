import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams from react-router-dom
import PostAuthor from '../components/PostAuthor';
import { LuClock } from "react-icons/lu";
import { IoIosCalendar } from "react-icons/io";
import axios from 'axios';
import PostShare from '../components/PostShare';
const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios
          .get(`http://localhost:5000/post/${id}`)
          .then((response) => {
            setPost(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }, [id]); 

    if (post === null) {
        return <div>Loading...</div>;
    }

  return (
    <div className='over-all'>
        <section className="section-sm pb-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="mb-5">
                            <h3 className="h1 mb-4 post-title">
                                {post.title}
                            </h3>
                            <ul className="card-meta list-inline mb-2">
                                <li className="list-inline-item mt-2">
                                    <Link
                                        className="card-meta-author href"
                                        to="/about"
                                    >
                                        <img
                                            className="w-auto"
                                            src="/assets/images/author/emma.jpg"
                                            alt="Emmanuel Ekpo"
                                            width={26}
                                            height={26}
                                        />{" "}
                                        by <span>Emmanuel Ekpo</span>
                                    </Link>
                                </li>
                                <li className="list-inline-item mt-2">—</li>
                                <li className="list-inline-item mt-2" style={{ display: 'inline-flex', alignItems: 'center',gap: '8px' }}>
                                    <LuClock />
                                    <span>{Math.round(post.read)} min read</span>
                                </li>
                                <li className="list-inline-item mt-2">—</li>
                                <li className="list-inline-item mt-2" style={{ display: 'inline-flex', alignItems: 'center',gap: '8px' }}>
                                <IoIosCalendar />
                                    <span>{post.date}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className="col-lg-12">
                    <div className="mb-5 text-center">
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
                </div>
                <div className="col-lg-2 post-share-block order-1 order-lg-0 mt-5 mt-lg-0">
                    <PostShare postTitle={post.title}  postUrl={`http://localhost:3000/post/${post._id}`}/>
                </div>
                <div className="col-lg-8 post-content-block order-0 order-lg-2">
                    <div className="content">
                        <p>{post.content}</p>
                    </div>
                    <ul className="post-meta-tag list-unstyled list-inline mt-5">
                        <li className="list-inline-item">Tags: </li>
                        {post.tags.map((tag, index) => (
                            <li className="list-inline-item" key={index}>
                                <Link className="bg-white href" to="#">
                                {tag}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
                <PostAuthor />
                {/* comments */}
                {/* <RelatedPosts /> */}
            </div>
        </section>
    </div>
  )
}

export default Post
