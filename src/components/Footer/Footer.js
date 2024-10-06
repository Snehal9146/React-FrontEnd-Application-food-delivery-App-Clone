import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>

    <div className='footer-content-left'>
    <img src={assets.logo}/>
    <p>lorem ipsun is simply dummy text of the pringting ans typesetting industry lorem ipsun is simply dummy text of the pringting ans typesetting industry lorem ipsun is simply dummy text of the pringting ans typesetting industry</p>
    <div className='footer-social-icons'>
    <img src={assets.facebook_icon}/>
    <img src={assets.twitter_icon}/>
    <img src={assets.linkedin_icon}/>
    </div>
    </div>
    <div className='footer-content-center'>
    <h2>COMPANY</h2>
    <ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
    </ul>
    </div>
    <div className='footer-content-right'>
    <h2>Get in touch</h2>
    <ul>
    <li>+1112131415</li>
    <li>contact@tomato.com</li>
    </ul>
    </div>

    </div>
    <hr />
    <p className='footer-copyright'>copyright 2024 0 tomato.cmo - All Right Reserved.</p>
    </div>
  )
}

export default Footer