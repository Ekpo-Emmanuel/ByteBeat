import React from 'react'
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div className="section">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
               <Newsletter />
              </div>
            </div>
          </div>
          <div className="pb-5">
            <div className="row g-2 g-lg-4 align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <p className="mb-0 copyright-text content">Let's connect on <Link to='https://www.linkedin.com/in/emmanuel-ekpo-a2973420b/' target={"_blank"} className='href' style={{textDecoration: "underline"}}>Linkedln</Link></p>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-inline footer-menu">
                  <li className="list-inline-item m-0"><Link to="https://emmanuel-ekpo.vercel.app/" target='_blank' className='href'>My Portfolio</Link></li>
                  <li className="list-inline-item m-0"><Link to="/404page" className='href'>404 Page</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer