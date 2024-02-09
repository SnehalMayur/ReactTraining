import React from "react";

const Home = () => {
  return (
    <div>
       <section className="blog-container">
      <div className="card-container">
        <div className="card-image">
          <img src="https://cdn.educba.com/academy/wp-content/uploads/2020/05/CSS-tricks-1.jpg" alt="img1" />
        </div>
        <div className="card-body">
          <span className="card-badge card-badge-blue">CSS</span>
          <h1>CSS Tricks</h1>
          <p className="card-subtitle">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="card-author">
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="author avatar" />
            <div className="author-info">
              <p className="author-name">John Doe</p>
              <p className="post-timestamp">2h ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-image">
          <img src="https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/d6d6377b-8574-47b4-a3a5-33b963bc4a70/blog.png" alt="a landscape view full of baloons" />
        </div>
        <div className="card-body">
          <span className="card-badge card-badge-pink">Programming</span>
          <h1>Better Programming</h1>
          <p className="card-subtitle">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="card-author">
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="author avatar" />
            <div className="author-info">
              <p className="author-name">John Doe</p>
              <p className="post-timestamp">5days ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-image">
          <img src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/06/Top-10-Programming-Languages-1.jpg" alt="a city full of buildings" />
        </div>
        <div className="card-body">
          <span className="card-badge card-badge-pink">Programming</span>
          <h1>My Programming Blog</h1>
          <p className="card-subtitle">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="card-author">
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="author avatar" />
            <div className="author-info">
              <p>John Doe</p>
              <p>2days ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;