import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryVerticalEnd } from 'lucide-react';

const Posts = () => {
  const truncateLongWords = (sentence, maxLength) => {
    if (sentence.length > maxLength) {
      return sentence.slice(0, maxLength) + '...';
    }
    return sentence;
  }
  

  const postList = [
    {
      id: 1,
      title: 'The AGI hype train is running out of steam',
      image: 'assets/images/blog/01.jpg',
      date: 'March 9, 2022',
      read: '2 min read',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['AGI', 'Technology', 'Gaming']
    },
    {
      id: 1,
      title: 'The AGI hype train is running out of steam',
      image: 'assets/images/blog/01.jpg',
      date: 'March 9, 2022',
      read: '2 min read',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['AGI', 'Technology', 'Gaming']
    },
    {
      id: 1,
      title: 'The AGI hype train is running out of steam',
      image: 'assets/images/blog/01.jpg',
      date: 'March 9, 2022',
      read: '2 min read',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['AGI', 'Technology', 'Gaming']
    },

    {
      id: 1,
      title: 'The AGI hype train is running out of steam',
      image: 'assets/images/blog/01.jpg',
      date: 'March 9, 2022',
      read: '2 min read',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['AGI', 'Technology', 'Gaming']
    },
    {
      id: 1,
      title: 'The AGI hype train is running out of steam',
      image: 'assets/images/blog/01.jpg',
      date: 'March 9, 2022',
      read: '2 min read',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['AGI', 'Technology', 'Gaming']
    },
    {
      id: 1,
      title: 'The AGI hype train is running out of steam',
      image: 'assets/images/blog/01.jpg',
      date: 'March 9, 2022',
      read: '2 min read',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['AGI', 'Technology', 'Gaming']
    },
    {
      id: 1,
      title: 'The AGI hype train is running out of steam',
      image: 'assets/images/blog/01.jpg',
      date: 'March 9, 2022',
      read: '2 min read',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['AGI', 'Technology', 'Gaming']
    },
  ]
    
  return (
<section>
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h2 className="section-title">
          <span>Recent posts</span>
        </h2>
      </div>
    </div>
    <div className="row gy-5 gx-4 g-xl-5">
      {postList.map((post, index) => (
      <div className="col-lg-6" key={index}>
        <article className="card post-card h-100 border-0 bg-transparent">
          <div className="card-body">
            <a
              className="d-block"
              href="blog-single.html"
              title={post.title}
            >
              <div className="post-image position-relative">
                <img
                  className="w-100 h-auto rounded"
                  src={post.image}
                  alt={post.title}
                  width={970}
                  height={500}
                />
              </div>
            </a>
            <ul className="card-meta list-inline mb-3">
              <li className="list-inline-item mt-2">
                <i className="ti ti-calendar-event" />
                <span>{post.date}</span>
              </li>
              <li className="list-inline-item mt-2">—</li>
              <li className="list-inline-item mt-2">
                <i className="ti ti-clock" />
                <span>{post.read}</span>
              </li>
            </ul>
            <a
              className="d-block"
              href="blog-single.html"
              title="The AGI hype train is running out of steam"
            >
              <h3 className="mb-3 post-title">
                {post.title}
              </h3>
            </a>
            <p>
              {truncateLongWords(post.content, 140)}
            </p>
          </div>
          <div className="card-footer border-top-0 bg-transparent p-0">
            <ul className="card-meta list-inline">
              <li className="list-inline-item mt-2">
                <a
                  className="card-meta-author"
                  href="author-single.html"
                  title="Read all posts by - Thomas Macaulay"
                >
                  <img
                    className="w-auto"
                    src="assets/images/author/thomas-macaulay.jpg"
                    alt="Thomas Macaulay"
                    width={26}
                    height={26}
                  />{" "}
                  by <span>Thomas</span>
                </a>
              </li>
              <li className="list-inline-item mt-2">•</li>
              <li className="list-inline-item mt-2">
                <ul className="card-meta-tag list-inline">
                    {post.tags.map((tag, index) => (
                    <li className="list-inline-item small">
                        <Link to="/">{tag}</Link>
                    </li>
                    ))}
                </ul>
              </li>
            </ul>
          </div>
        </article>
      </div>        
      ))}
     <div className="col-12 text-center">
      <Link
        aria-label="View all posts"
        className="btn btn-primary mt-5 d-inline-flex align-items-center"
        to="/blog.html"
      >
        <GalleryVerticalEnd size={16} strokeWidth={1.5} style={{ marginRight: '8px' }} />
        <span style={{ marginLeft: '8px' }}>View all posts</span>
      </Link>
    </div>
    </div>
  </div>
</section>
  )
}

export default Posts
