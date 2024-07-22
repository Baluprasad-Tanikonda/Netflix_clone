import React from 'react';
import './Footer.css';
import youtube_icon from '../../Assets/youtube_icon.png';
import twitter_icon from "../../Assets/twitter_icon.png";
import instagram_icon from "../../Assets/instagram_icon.png";
import  facebook_icon from "../../Assets/facebook_icon.png";

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-icons">
          <img src={facebook_icon} alt="" />
          <img src={instagram_icon} alt="" />
          <img src={twitter_icon} alt="" />
          <img src={youtube_icon} alt="" />
        </div>
        <ul>
          <li>Audio Description </li>
          <li>Help Center </li>
          <li>Giftcards </li>
          <li>Media center</li>
          <li>Investor relations</li>
          <li>jobs</li>
          <li>Terms to use</li>
          <li>privacy</li>
          <li>Legal notices</li>
          <li>Coookie Preferences</li>
          <li>Corporate Information </li>
          <li>contat us </li>
        </ul>
        <p className='copyright-text'>@1445 - 2023 Netflix , Inc. </p>
      </div>
    );
};

export default Footer;