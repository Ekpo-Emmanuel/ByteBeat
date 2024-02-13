import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    const currentPage = location.pathname;

    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        // { name: "Elements", link: "/elements" },
        { name: "Contact", link: "/contact" }
    ];

  return (
    <div>
        <div className="header-height-fix" />
        <header className="header-nav">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                <Link className="navbar-brand font-weight-bold mb-0" to="/" title="Qurno">
                    <img className="img-fluid" width={110} height={35} src="/assets/images/logo.png" alt="Qurno" />
                </Link>
                <button className="search-toggle d-inline-block d-lg-none ms-auto me-1 me-sm-3" data-toggle="search" aria-label="Search Toggle">
                    <span>Search</span>
                    <svg width={22} height={22} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 15.5L19 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navHeader" aria-controls="navHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="ti ti-menu-2 menu-open" />
                    <i className="ti ti-x menu-close" />
                </button>
                <div className="collapse navbar-collapse" id="navHeader">
                    <ul className="navbar-nav mx-auto">
                        {links.map((link, index) => (
                            <li 
                                key={index} 
                                className={`nav-item ${currentPage.toLowerCase() === link.link.toLowerCase() 
                                    ? 'active' 
                                    : `@@${link.name.toLowerCase()}`}`}
                            >
                                <Link className="nav-link" to={link.link}>{link.name}</Link>
                            </li>
                        ))}
                    {/* <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/author.html">Author</Link></li>
                        <li><Link className="dropdown-item" to="/author-single.html">Author Single</Link></li>
                        <li><Link className="dropdown-item" to="/tags.html">Tags</Link></li>
                        <li><Link className="dropdown-item" to="/tag-single.html">Tag Single</Link></li>
                        <li><Link className="dropdown-item" to="/categories.html">Categories</Link></li>
                        <li><Link className="dropdown-item" to="/categories-single.html">Category Single</Link></li>
                        <li><Link className="dropdown-item" to="/404-page.html">404 Page</Link></li>
                        <li><Link className="dropdown-item" to="/privacy.html">Privacy</Link></li>
                        </ul>
                    </li> */}
                    </ul>
                    <div className="navbar-right d-none d-lg-inline-block">
                    <ul className="social-links list-unstyled list-inline">
                        <li className="list-inline-item ms-4 d-none d-lg-inline-block">
                        <button className="search-toggle" data-toggle="search" aria-label="Search Toggle">
                            <span>Search</span>
                            <svg width={22} height={22} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 15.5L19 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
            </div>
        </div>
        </header>
        <div className="search-block">
        <div data-toggle="search-close">
            <span className="ti ti-x text-primary" />
        </div>
        <input type="text" id="js-search-input" placeholder="Type to search blog.." aria-label="search-query" />
        <div className="mt-4 card-meta">
            <p className="h4 mb-3">See posts by tags</p>
            <ul className="card-meta-tag list-inline">
            <li className="list-inline-item me-1 mb-2">
                <Link className="small" to="tag-single.html">Life</Link>
            </li>
            <li className="list-inline-item me-1 mb-2">
                <Link className="small" to="tag-single.html">Lifestyle</Link>
            </li>
            <li className="list-inline-item me-1 mb-2">
                <Link className="small" to="tag-single.html">Lighting</Link>
            </li>
            <li className="list-inline-item me-1 mb-2">
                <Link className="small" to="tag-single.html">Machine</Link>
            </li>
            <li className="list-inline-item me-1 mb-2">
                <Link className="small" to="tag-single.html">Startups</Link>
            </li>
            <li className="list-inline-item me-1 mb-2">
                <Link className="small" to="tag-single.html">Work</Link>
            </li>
            </ul>
        </div>
        <div className="mt-4 card-meta">
            <p className="h4 mb-3">See posts by categories</p>
            <ul className="card-meta-tag list-inline">
            <li className="list-inline-item me-1 mb-2">
                <Link className="small" to="categorie-single.html">AI</Link>
            </li>
            <li className="list-inline-item me-1 mb-2">
                <Link className="small" to="categorie-single.html">Earth</Link>
            </li>
            <li className="list-inline-item me-1 mb-2">
                <Link className="small" to="categorie-single.html">Tech</Link>
            </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar