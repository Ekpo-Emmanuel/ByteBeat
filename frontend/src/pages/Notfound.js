import React from 'react'
import { Link } from 'react-router-dom';


const Notfound = () => {
  return (
    <div className="over-all">
      <section className="section-sm pb-0">
      <div className="container">
          <div className="row">
          <div className="col-12">
              <div className="text-center">
              <h1 className="page-not-found-title">404</h1>
              <p className="mb-4">
                  Oops. The page you're looking for doesn't exist.
              </p>
              <Link className="btn btn-primary" to="/">
                  Back to home
              </Link>
              </div>
          </div>
          </div>
      </div>
      </section>
    </div>
  )
}

export default Notfound
