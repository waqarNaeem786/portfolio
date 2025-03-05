import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Footbar from '../component/Footbar';
function Blogs() {
  const navigate = useNavigate();

  const goToIndoPak = () => {
    navigate('/IndoPak');
  };

  return (
    <div className="blogsContainer" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* SEO Meta Tags */}
      <head>
        <title>Blogs - WN Portfolio</title>
        <meta name="description" content="Explore insightful articles by WN on regional security, technology, and more." />
        <meta name="keywords" content="WN Blogs, Regional Security, Software Development, Security Research" />
        <meta name="author" content="WN" />
        <meta property="og:title" content="WN Blogs" />
        <meta property="og:description" content="Thesis-based articles and insights from WN." />
        <meta property="og:image" content="/path-to-blog-thumbnail.png" />
        <meta property="og:url" content="https://fire-app-34df0.web.app/blogs" />
      </head>

      <Header />
      <br />
      <br />

      <h2 style={{ fontSize: '2rem' }}>Articles</h2>
      <hr/>
      <br />
      <br />
      <br />


      <div className="recentArticles">
        <div className="articleHeader" onClick={goToIndoPak} style={{ cursor: 'pointer' }}>
          <h2 className="title">India China Border Dispute: A Threat to Regional Security</h2>
          <p>Published on 22 August 2023</p>
          <span style={{fontSize: "1.25rem"}}>
            Thesis based on the topic of how the India-China border dispute will harm the regional security of South Asia.
          </span>
        </div>
     
      </div>
        <br/>
              <br/>
              <hr/>
              <Footbar />
    </div>
  );
}

export default Blogs;
