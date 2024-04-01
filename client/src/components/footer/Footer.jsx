import React from "react";
import "./Footer.scss";
const footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Technology</span>
            <span>Health and wellness</span>
            <span>Sustainability</span>
            <span>Consumer products</span>
            <span>Education</span>
            <span>Finance</span>
            <span>Transportation and logistics</span>
            <span>Real estate</span>
            <span>Industrial</span>
            <span>Gaming</span>
            <span>Agriculture and food</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Investing on Laderr</span>
            <span>Posting on Laderr</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Investment Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Investor</span>
            <span>Community Standards</span>
          </div>
          {/* <div className="item">
            <h2>More From Fiverr</h2>
            <span>Laderr Business</span>
            <span>Laderr Pro</span>
            <span>Laderr Logo Maker</span>
            <span>Laderr Guides</span>
            <span>Get Inspired</span>
            <span>Laderr Select</span>
            <span>ClearVoice</span>
            <span>Laderr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div> */}
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Laderr</h2>
            <span>© Laderr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            {/* <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div> */}
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
