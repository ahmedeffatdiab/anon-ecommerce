import React from 'react';
import TestimontailOne from "../../assets/images/testimonial-1.jpg"
import quotes from "../../assets/images/icons/quotes.svg"
import CtaBanner from "../../assets/images/cta-banner.jpg"
export default function Testimontails() {
  return (
    <div>
            <div class="container">
          <div class="testimonials-box">
            <div class="testimonial">
  
              <h2 class="title">testimonial</h2>
  
              <div class="testimonial-card">
  
                <img src={TestimontailOne} alt="alan doe" class="testimonial-banner" width="80" height="80"/>
  
                <p class="testimonial-name">Alan Doe</p>
  
                <p class="testimonial-title">CEO & Founder Invision</p>
  
                <img src={quotes} alt="quotation" class="quotation-img" width="26"/>
  
                <p class="testimonial-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum
                  dolor dolor sit amet.
                </p>
  
              </div>
  
            </div>
            <div class="cta-container">
  
              <img src={CtaBanner} alt="summer collection" class="cta-banner"/>
  
              <a href="#" class="cta-content">
  
                <p class="discount">25% Discount</p>
  
                <h2 class="cta-title">Summer collection</h2>
  
                <p class="cta-text">Starting @ $10</p>
  
                <button class="cta-btn">Shop now</button>
  
              </a>
  
            </div>
            <div class="service">
              <h2 class="title">Our Services</h2>
              <div class="service-container">
                <a href="#" class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-sailboat"></i>
                  </div>
                  <div class="service-content">
                    <h3 class="service-title">Worldwide Delivery</h3>
                    <p class="service-desc">For Order Over $100</p>
                  </div>
                </a>
                <a href="#" class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-rocket"></i>
                  </div>
                  <div class="service-content">
                    <h3 class="service-title">Next Day delivery</h3>
                    <p class="service-desc">UK Orders Only</p>
                  </div>
                </a>
                <a href="#" class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div class="service-content">
                    <h3 class="service-title">Best Online Support</h3>
                    <p class="service-desc">Hours: 8AM - 11PM</p>
                  </div>
                </a>
                <a href="#" class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-rotate-left"></i>
                  </div>
                  <div class="service-content">
                    <h3 class="service-title">Return Policy</h3>
                    <p class="service-desc">Easy & Free Return</p>
                  </div>
                </a>
                <a href="#" class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-ticket"></i>
                  </div>
                  <div class="service-content">
                    <h3 class="service-title">30% money back</h3>
                    <p class="service-desc">For Order Over $100</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
