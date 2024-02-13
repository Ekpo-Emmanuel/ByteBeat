import React from 'react'
import { useParams } from 'react-router-dom'
import postList from '../components/blogList'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReddit, FaPinterest } from "react-icons/fa";
import RelatedPosts from '../components/RelatedPosts';
import PostAuthor from '../components/PostAuthor';
import { LuClock } from "react-icons/lu";
import { IoIosCalendar } from "react-icons/io";



const Post = () => {
    const { id } = useParams()
    const post = postList.find(post => post.id === parseInt(id));

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
                                        to="author-single.html"
                                    >
                                        <img
                                            className="w-auto"
                                            src="/assets/images/author/thomas-macaulay.jpg"
                                            alt="Thomas Macaulay"
                                            width={26}
                                            height={26}
                                        />{" "}
                                        by <span>Thomas Macaulay</span>
                                    </Link>
                                </li>
                                <li className="list-inline-item mt-2">—</li>
                                <li className="list-inline-item mt-2" style={{ display: 'inline-flex', alignItems: 'center',gap: '8px' }}>
                                    <LuClock />
                                    <span>{post.read}</span>
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
                    <img
                        className="w-100 h-auto rounded"
                        src={`/assets/images/blog/${post.image}`}
                        alt={post.title}
                        width={970}
                        height={500}
                    />
                    </div>
                </div>
                <div className="col-lg-2 post-share-block order-1 order-lg-0 mt-5 mt-lg-0">
                    <div className="position-sticky" style={{ top: 150 }}>
                    <span className="d-inline-block mb-3 small">SHARE</span>
                    <ul className="social-share icon-box">
                        <li
                        className="d-inline-block d-lg-block me-2 mb-2"
                        onclick="return tbs_click()"
                        >
                        <FaTwitter />
                        </li>
                        <li
                        className="d-inline-block d-lg-block me-2 mb-2"
                        onclick="return fbs_click()"
                        >
                        <FaFacebookF />
                        </li>
                        <li
                        className="d-inline-block d-lg-block me-2 mb-2"
                        onclick="return ins_click()"
                        >
                        <FaLinkedinIn />
                        </li>
                        <li
                        className="d-inline-block d-lg-block me-2 mb-2"
                        onclick="return red_click()"
                        >
                        <FaReddit  />
                        </li>
                        <li
                        className="d-inline-block d-lg-block me-2 mb-2"
                        onclick="return pin_click()"
                        >
                        <FaPinterest  />
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-8 post-content-block order-0 order-lg-2">
                    <div className="content">
                        <p>
                            Light is fast. In fact, it is the fastest thing that exists, and a
                            law of the universe is that nothing can move faster than light.
                            Light travels at 186,000 miles per second (300,000 kilometers per
                            second) and can go from the Earth to the Moon in just over a second.
                            Light can streak from Los Angeles to New York in less than the blink
                            of an eye.
                        </p>
                        <p>
                            While 1% of anything doesn’t sound like much, with light, that’s
                            still really fast – close to 7 million miles per hour! At 1% the
                            speed of light, it would take a little over a second to get from Los
                            Angeles to New York. This is more than 10,000 times faster than a
                            commercial jet.
                        </p>
                        <h3 id="why-even-1-of-light-speed-is-hard">
                            Why even 1% of light speed is hard
                        </h3>
                        <p>
                            What’s holding humanity back from reaching 1% of the speed of light?
                            In a word, energy. Any object that’s moving has energy due to its
                            motion. Physicists call this kinetic energy. To go faster, you need
                            to increase kinetic energy. The problem is that it takes a lot of
                            kinetic energy to increase speed. To make something go twice as fast
                            takes four times the energy. Making something go three times as fast
                            requires nine times the energy, and so on.
                        </p>
                        <p>
                            <img
                            src="../../images.theconversation.com/files/429627/original/file-20211101-25-c3f9c93c0b.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=754&h=522&fit=crop&dpr=2"
                            alt="The Parker Solar Probe"
                            title="The Parker Solar Probe"
                            />
                        </p>
                        <p>
                            For example, to get a teenager who weighs 110 pounds (50 kilograms)
                            to 1% of the speed of light would cost 200 trillion Joules (a
                            measurement of energy). That’s roughly the same amount of energy
                            that 2 million people in the U.S. use in a day.
                        </p>
                        <h3 id="how-fast-can-we-go">How fast can we go?</h3>
                        <p>
                            It’s possible to get something to 1% the speed of light, but it
                            would just take an enormous amount of energy. Could humans make
                            something go even faster?
                        </p>
                        <p>
                            Yes! But engineers need to figure out new ways to make things move
                            in space. All rockets, even the sleek new rockets used by SpaceX and
                            Blue Origins, burn rocket fuel that isn’t very different from
                            gasoline in a car. The problem is that burning fuel is very
                            inefficient.
                        </p>
                        <p>
                            Other methods for pushing a spacecraft involve using electric or
                            magnetic forces. Nuclear fusion, the process that powers the Sun, is
                            also much more efficient than chemical fuel.
                        </p>
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
                <RelatedPosts />
            </div>
        </section>
    </div>
  )
}

export default Post
