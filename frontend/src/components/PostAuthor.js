import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowUpRight } from "react-icons/lu";

const PostAuthor = () => {
  return (
    <div className="single-post-author">
        <div className="row justify-content-center">
            <div className="col-lg-10">
            <div className="d-block d-md-flex">
                <Link href="author-single.html">
                <img
                    className="rounded mr-4"
                    src="/assets/images/author/emma.jpg"
                    alt="Emmanuel Ekpo"
                    width={155}
                    height={155}
                />
                </Link>
                <div className="ms-0 ms-md-4 ps-0 ps-md-3 mt-4 mt-md-0">
                <h3 className="h4 mb-3">
                    <Link className="text-dark href" to="/about">
                    Emmanuel Ekpo
                    </Link>
                </h3>
                <p>
                    I am a writer based in New York City. He's interested
                    in all things tech, science, and photography related, and likes
                    to yo-yo in his free time. …
                </p>
                <div className="content">
                    <Link to="/about" className="href">
                    See More{" "}
                    <LuArrowUpRight />
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PostAuthor
