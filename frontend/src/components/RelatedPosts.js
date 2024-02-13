import React from "react";
import { Link } from "react-router-dom";
import { LuClock } from "react-icons/lu";
import { IoIosCalendar } from "react-icons/io";



const RelatedPosts = () => {

    return (
    <div className="single-post-similer">
        <div className="row justify-content-center">
            <div className="col-lg-12">
            <div className="text-center">
                <h2 className="section-title">
                <span>Related Posts</span>
                </h2>
            </div>
            <div className="row gy-5 gx-4 g-xl-5">
                <div className="col-lg-6">
                <article className="card post-card h-100 border-0 bg-transparent">
                    <div className="card-body">
                    <Link
                        className="d-block href"
                        to="/blog-single.html"
                        title="Everything you wanted to know about the metaverse"
                    >
                        <div className="post-image position-relative">
                        <img
                            className="w-100 h-auto rounded"
                            src="/assets/images/blog/04.jpg"
                            alt="Everything you wanted to know about the metaverse"
                            width={970}
                            height={500}
                        />
                        </div>
                    </Link>
                    <ul className="card-meta list-inline mb-3">
                        <li className="list-inline-item mt-2" style={{ display: 'inline-flex', alignItems: 'center',gap: '8px' }}>
                        <IoIosCalendar />
                        <span>16 Nov, 2021</span>
                        </li>
                        <li className="list-inline-item mt-2">—</li>
                        <li className="list-inline-item mt-2" style={{ display: 'inline-flex', alignItems: 'center',gap: '8px' }}>
                        <LuClock />
                        <span>01 min read</span>
                        </li>
                    </ul>
                    <Link
                        className="d-block href"
                        href="blog-single.html"
                        title="Everything you wanted to know about the metaverse"
                    >
                        <h3 className="mb-3 post-title">
                        Everything you wanted to know about the metaverse
                        </h3>
                    </Link>
                    <p>
                        In the wake of Facebook rebranding as Meta, reflecting its
                        focus on the “metaverse”, Microsoft has now announced it,
                        too, will launch into this space. …
                    </p>
                    </div>
                    <div className="card-footer border-top-0 bg-transparent p-0">
                    <ul className="card-meta list-inline">
                        <li className="list-inline-item mt-2">
                        <Link
                            className="card-meta-author href"
                            href="author-single.html"
                            title="Read all posts by - Emma Hazel"
                        >
                            <img
                            className="w-auto"
                            src="/assets/images/author/emma-hazel.jpg"
                            alt="Emma Hazel"
                            width={26}
                            height={26}
                            />{" "}
                            by <span>Emma</span>
                        </Link>
                        </li>
                        <li className="list-inline-item mt-2">•</li>
                        <li className="list-inline-item mt-2">
                        <ul className="card-meta-tag list-inline">
                            <li className="list-inline-item small">
                            <Link to="tag-single.html" className='href'>Life</Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </article>
                </div>
                <div className="col-lg-6">
                <article className="card post-card h-100 border-0 bg-transparent">
                    <div className="card-body">
                    <Link
                        className="d-block"
                        href="blog-single.html"
                        title="The AGI hype train is running out of steam"
                    >
                        <div className="post-image position-relative">
                        <img
                            className="w-100 h-auto rounded"
                            src="/assets/images/blog/02.jpg"
                            alt="The AGI hype train is running out of steam"
                            width={970}
                            height={500}
                        />
                        </div>
                    </Link>
                    <ul className="card-meta list-inline mb-3">
                        <li className="list-inline-item mt-2">
                        <i className="ti ti-calendar-event" />
                        <span>05 Dec, 2021</span>
                        </li>
                        <li className="list-inline-item mt-2">—</li>
                        <li className="list-inline-item mt-2">
                        <i className="ti ti-clock" />
                        <span>02 min read</span>
                        </li>
                    </ul>
                    <Link
                        className="d-block"
                        href="blog-single.html"
                        title="The AGI hype train is running out of steam"
                    >
                        <h3 className="mb-3 post-title">
                        The AGI hype train is running out of steam
                        </h3>
                    </Link>
                    <p>
                        The AGI hype train has hit some heavy traffic. While
                        futurists and fundraisers used to make bullish predictions
                        about artificial general intelligence, …
                    </p>
                    </div>
                    <div className="card-footer border-top-0 bg-transparent p-0">
                    <ul className="card-meta list-inline">
                        <li className="list-inline-item mt-2">
                        <Link
                            className="card-meta-author"
                            href="author-single.html"
                            title="Read all posts by - Thomas Macaulay"
                        >
                            <img
                            className="w-auto"
                            src="/assets/images/author/thomas-macaulay.jpg"
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
                            <li className="list-inline-item small">
                            <Link href="tag-single.html">Machine</Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </article>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}


export default RelatedPosts