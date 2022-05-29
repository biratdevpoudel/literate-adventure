import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join BookMyTravel newsletter to receive our best vacation deals.
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Your name.'
                        className='footer-input'
                    />
                    <Button
                    buttonStyle='btn--outine'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonial</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/www.instagram.com'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Twitter</Link>
                    <Link to='/'>Youtube</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='social-logo'>
                    <Link to='/'className='social-logo'>
                     BMT. <i className='fab fa-typo3'/>
                    </Link>
                </div>
                <small className='website-rights'>BMT <i className='fas fa-copyright'/> 2020</small>
                <div className='social-icons'>
                    <Link className='social-icons-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook
                    '>
                       <i className='fab fa-facebook-f'/> 
                    </Link>
                    <Link className='social-icons-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram
                    '>
                       <i className='fab fa-instagram'/> 
                    </Link>
                    <Link className='social-icons-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter
                    '>
                       <i className='fab fa-twitter'/> 
                    </Link>
                    <Link className='social-icons-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube
                    '>
                       <i className='fab fa-youtube'/> 
                    </Link>
                </div>
            </div>
        
        </section>    
    </div>
  )
}

export default Footer