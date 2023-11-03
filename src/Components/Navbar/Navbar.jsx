import React from 'react'
import newsletter from '../../assets/images/newsletter.png';
import jewellery_1 from '../../assets/images/products/jewellery-1.jpg'
import wwwww from '../../assets/images/logo/logo.svg'
import HeaderLinks from '../HeaderLinks/HeaderLinks';
import '../../index.scss';
import { useRef } from 'react';
export default function Navbar({changeMode}) {
    const modelRef=useRef();
    const notificationlRef=useRef();

    const hideModel=()=>{
        modelRef.current.classList.toggle('hidemodel')
    }
    const hideNotification=()=>{
        notificationlRef.current.classList.toggle('hide')
        console.log(notificationlRef.current);
    }
    function test(){
        const Mode=document.getElementById('Mode');
        changeMode(Mode.value)
    }
    
  return (
    <div className='body'>
            <div className="model-section" ref={modelRef} >
                        <div className="overlay"  ></div>
                        <div className="model" >
                            <div className="model-content">
                                <div className="modal-close-btn" onClick={hideModel} >
                                <i className="fa-solid fa-xmark"></i>
                                </div>
                                <div className="newsletter-img">
                                    <img src={newsletter} alt="subscribe newsletter" width="400" height="400"/>
                                </div>
                                <div className="newsletter">
                                    <form action="#">
                                    <div className="newsletter-header">
                                        <h3 className="newsletter-title">Subscribe Newsletter.</h3>
                                        <p className="newsletter-desc">
                                        Subscribe the <b>Anon</b> to get latest products and discount update.
                                        </p>
                                    </div>
                                    <input type="email" name="email" className="email-field" placeholder="Email Address" required />
                                    <button type="submit" className="btn-newsletter">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
            <div class="notification-toast  "  ref={notificationlRef}  data-toest>
                <button class="toast-close-btn" onClick={hideNotification} data-toest-close>
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="toast-banner">
                    <img src={jewellery_1} alt="Rose Gold Earringd" width="80" height="70"/>
                </div>
                <div class="toast-details">
                    <p class="toast-message">Someone is now just bought</p>
                    <p class="toast-title">Rose Gold Earring</p>
                    <p class="toast-meta"><time datatime="PT2M">2 Minutes </time>age</p>
                </div>
            </div>
            <header>
                <div className="border-bottom">
                <div class="container">
            <div class="header-top">
                <ul class="header-social-container">
                    <li>
                    <a href="#" class="social-link">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="social-link">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="social-link">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="social-link">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    </li>
                </ul>
                <div class="header-alert-news">
                    <p>
                    <b>Free Shipping</b>
                    This Week Order Over - $55
                    </p>
                </div>
                <div class="header-top-actions">
                    <select name="currancy" >
                    <option value="usd">USD &#36;</option>
                    <option value="eur">EUR &euro;</option>
                    </select>
                    <select name="Mode" id="Mode" onChange={test} >
                    <option value="light" id="lightMode" >Light Mode</option>
                    <option value="dark" id='darkMode' >Dark Mode</option>
                    </select>
                </div>
                </div>
                </div>
                </div>
                <div className="border-bottom">
                <div class="container  ">
                    <div class="header-main">
                    <a href="#" class="header-logo">
                        <img
                        src={wwwww}
                        alt="header-logo"
                        width="120"
                        height="36"
                        />
                    </a>
                    <div class="header-search-container">
                        <input
                        type="search"
                        name="search"
                        class="search-field"
                        placeholder="Enter your product Name ..."
                        />
                        <button class="search-btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div class="header-user-action">
                        <button class="action-btn">
                        <i class="fa-regular fa-user"></i>
                        </button>
                        <button class="action-btn">
                        <i class="fa-regular fa-heart"></i>
                        <span class="count">0</span>
                        </button>
                        <button class="action-btn">
                        <i class="fa-sharp fa-solid fa-bag-shopping"></i>
                        <span class="count">0</span>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
                <HeaderLinks/>
            </header>
            
        </div>
  )
}
