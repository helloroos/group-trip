import React from 'react';
import '../css/footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='footer-cont'>
        <p className='foot-desc'>
          Traveling with friends or family can be amazing. What’s not so fun? 
          Figuring out the travel logistics. Whether you’re planning a weekend 
          trip, bachelorette party or family reunion, Flux helps you get on 
          the same page using smart organizing and polling to plan the 
          perfect getaway.
        </p>
        <div className='teammates'>
          <p>Evan Leon</p>
          <p>Michelle Roos</p>
          <p>Jessica Uphoff</p>
          <p>Syldys Khomushku</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;