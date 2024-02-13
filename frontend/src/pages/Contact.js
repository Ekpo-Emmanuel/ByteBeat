import React from 'react';
import { LuMailPlus } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { Link } from 'react-router-dom';
import { VscSend } from "react-icons/vsc";

const Contact = () => {
    return (
        <div className='over-all'>
            <section className="page-header section-sm">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h1 className="section-title h2 mb-3">
                        <span>Contact</span>
                    </h1>
                    <ul className="list-inline breadcrumb-menu mb-3"  style={{ display: 'inline-flex', alignItems: 'center'}}>
                        <li className="list-inline-item">
                            <Link to="/" className='href'  style={{ display: 'inline-flex', alignItems: 'center',gap: '8px' }}>
                                <GoHome /> <span>Home</span>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            • &nbsp;{" "}
                            <Link to="/contact"  className='href'>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <div className="container">
                <div className="row gy-5 justify-content-center">
                    <div className="col-lg-5 col-md-10 ms-lg-auto me-lg-0 me-auto">
                    <div className="mb-5">
                        <h2 className="h3 mb-3">Reach Me</h2>
                        <p className="mb-0">
                        I’m here to help and answer any question you might have. I look
                        forward to hearing from you
                        </p>
                    </div>
                    <div>
                        <h2 className="h4 mb-3">
                        Hate forms? <br /> Write an email or make a call
                        </h2>
                        <p className="mb-2">
                            <Link to="mailto:ekpoemmanuelsg@gmail.com" className='href' target='_blank'  style={{ display: 'inline-flex', alignItems: 'center',gap: '8px' }}><LuMailPlus />  ekpoemmanuelsg@gmail.com</Link>
                        </p>
                        <p className="mb-0 "  style={{ display: 'inline-flex', alignItems: 'center',gap: '8px' }}>
                            <IoCallOutline /> +1 236 335 5823
                        </p>
                    </div>
                    </div>
                    <div className="col-lg-5 me-lg-auto ms-lg-0 ms-auto">
                    <h2 className="h3 mb-4">Contact form</h2>
                    <form className="row g-4" action="#!" method="post">
                        <div className="col-md-12">
                        <textarea
                            className="form-control"
                            placeholder="Ask question or just say Hi"
                            rows={4}
                            name="message"
                            required=""
                            defaultValue={""}
                        />
                        </div>
                        <div className="col-md-12">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                            name="email"
                            required=""
                        />
                        </div>
                        <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your name here"
                            name="name"
                            required=""
                        />
                        </div>
                        <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            aria-label="Send Message"
                        >
                            Send <VscSend />
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Contact