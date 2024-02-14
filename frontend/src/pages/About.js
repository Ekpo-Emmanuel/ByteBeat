import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
  <section className='over-all'>
    <div className="container">
        <section className="page-header section-sm">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="row g-4 g-lg-5 text-center text-lg-start justify-content-center justify-content-lg-start">
                    <div className="col-lg-3 col-md-4 col-sm-5 col-6">
                        <img
                        className="img-fluid rounded"
                        src="assets/images/author/emma.jpg"
                        alt="Emmanuel Ekpo"
                        width={250}
                        height={250}
                        />
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <p className="mb-2">
                        <span className="fw-bold text-black">03</span> Published posts
                        </p>
                        <h1 className="h3 text-dark mb-3">Emmanuel Ekpo</h1>
                        <div className="content">
                        <p>
                            Emmanuel Ekpo is a Software Engineer based in Vancouver City. He’s
                            interested in all things tech, science, and photography related,
                            and likes to yo-yo in his free time.
                        </p>
                        <p>
                            Follow him{" "}
                            <Link className='href' style={{textDecoration: "underline"}} target="_blank" href="https://twitter.com/thomas-macaulay">
                            on Twitter
                            </Link>
                            .
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <div className="content">
            <p>
              If ever a place existed where you could just go crazy creatively,
              it is definitely your about page. It’s your chance to show your
              readers who you really are. Pictures, quotes, inspirational
              graphics, whatever it is that drives you.. Display it here in a
              way that only you can.
            </p>
            <p>
              I’ve included a plugin in the setup of this theme that will make
              adding columns to your pages and posts a piece of cake. Let
              creativity take control, and forget about the technical end of
              things, I’ve got your six.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default About