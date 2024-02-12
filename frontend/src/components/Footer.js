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
                <p className="mb-0 copyright-text content">©2022 Qurno. All rights reserved.</p>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-inline footer-menu">
                  <li className="list-inline-item m-0"><Link href="/">Privacy Policy</Link></li>
                  <li className="list-inline-item m-0"><Link href="/">404 Page</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer