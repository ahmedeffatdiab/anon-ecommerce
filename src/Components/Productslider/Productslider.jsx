import React, { useEffect } from 'react'
import dress from "../../assets/images/icons/dress.svg"
import shoes from "../../assets/images/icons/shoes.svg"
import jewelry from "../../assets/images/icons/jewelry.svg"
import perfume from "../../assets/images/icons/perfume.svg"
import cosmetics from "../../assets/images/icons/cosmetics.svg"
import glasses from "../../assets/images/icons/glasses.svg"
import bag from "../../assets/images/icons/bag.svg"
import productOne from "../../assets/images/products/1.jpg"
import productTwo from "../../assets/images/products/2.jpg"
import productThree from "../../assets/images/products/3.jpg"
import productFour from "../../assets/images/products/4.jpg"
import { useRef } from 'react'
import ProductBox from '../ProductBox/ProductBox'
export default function Productslider() {
    const slideBarRef=useRef();
    const XIconRef=useRef();
    const ShowSlideBar=()=>{
        slideBarRef.current.classList.add("active")
        XIconRef.current.classList.add("Xiconactive")
        const accordionBtn=document.querySelectorAll('[data-accordion-btn]')
        const accordion=document.querySelectorAll('[data-accordion]');
        for (let i = 0; i < accordionBtn.length; i++) {
            accordionBtn[i].addEventListener('click',function(){
                const clickBtn=this.nextElementSibling.classList.contains('active');
                for (let i = 0; i < accordion.length; i++) {
                    if(clickBtn) break;
        
                    if(accordion[i].classList.contains('active')){
                        accordion[i].classList.remove('active')
                        accordionBtn[i].classList.remove('active')
                    }
                }
                this.nextElementSibling.classList.toggle('active');
                this.classList.toggle('active')
            })
            
        }
        
    }
    // useEffect(()=>{
    //     test()
    // },[])
    function test(){
        const accordionBtn=document.querySelectorAll('[data-accordion-btn]')
        const accordion=document.querySelectorAll('[data-accordion]');
        for (let i = 0; i < accordionBtn.length; i++) {
            accordionBtn[i].addEventListener('click',function(){
                const clickBtn=this.nextElementSibling.classList.contains('active');
                for (let i = 0; i < accordion.length; i++) {
                    if(clickBtn) break;
        
                    if(accordion[i].classList.contains('active')){
                        accordion[i].classList.remove('active')
                        accordionBtn[i].classList.remove('active')
                    }
                }
                this.nextElementSibling.classList.toggle('active');
                this.classList.toggle('active')
            })
            
        }
    }
    const hideSlideBar=()=>{
        slideBarRef.current.classList.remove("active")
        XIconRef.current.classList.remove("Xiconactive")
    }
    
    
  return (
    <div>
        <div class="mobile-bottom-nevigation" >
                <button class="action-btn" data-mobile-menu-open-btn>
                <i class="fa-solid fa-bars"></i>
                </button>
                <button class="action-btn">
                <i class="fa-solid fa-bag-shopping"></i>
                <span class="count">0</span>
                </button>
                <button class="action-btn">
                <i class="fa-solid fa-house"></i>
                </button>
                <button class="action-btn">
                <i class="fa-regular fa-heart"></i>
                <span class="count">0</span>
                </button>
                <button class="action-btn" onClick={ShowSlideBar} data-mobile-menu-open-btn>
                <i class="fa-solid fa-border-all"></i>
                </button>
            </div>
        <div class="overlay3"  ref={XIconRef}  data-overlay></div>
        <div className="container">
            <div className="madeflex">
                <div className="">
                    <div class="sidebar  has-scrollbar" ref={slideBarRef} data-mobile-menu> 
                        <div class="sidebar-category">

                            <div class="sidebar-top">
                            <h2 class="sidebar-title">Category</h2>

                            <button onClick={hideSlideBar} class="sidebar-close-btn" data-mobile-menu-close-btn>
                            <i class="fa-solid fa-xmark"></i>
                            </button>
                            </div>

                            <ul class="sidebar-menu-category-list">

                            <li class="sidebar-menu-category">

                                <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <img src={dress} alt="clothes" width="20" height="20"
                                    class="menu-title-img"/>

                                    <p class="menu-title">Clothes</p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-plus add-icon"></i>
                                <i class="fa-solid fa-minus remove-icon"></i>
                                </div>

                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Shirt</p>
                                    <data value="300" class="stock" title="Available Stock">300</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">shorts & jeans</p>
                                    <data value="60" class="stock" title="Available Stock">60</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">jacket</p>
                                    <data value="50" class="stock" title="Available Stock">50</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">dress & frock</p>
                                    <data value="87" class="stock" title="Available Stock">87</data>
                                    </a>
                                </li>

                                </ul>

                            </li>

                            <li class="sidebar-menu-category">

                                <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <img src={shoes} alt="footwear" class="menu-title-img" width="20"
                                    height="20"/>

                                    <p class="menu-title">Footwear</p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-plus add-icon"></i>
                                <i class="fa-solid fa-minus remove-icon"></i>
                                </div>

                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Sports</p>
                                    <data value="45" class="stock" title="Available Stock">45</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Formal</p>
                                    <data value="75" class="stock" title="Available Stock">75</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Casual</p>
                                    <data value="35" class="stock" title="Available Stock">35</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Safety Shoes</p>
                                    <data value="26" class="stock" title="Available Stock">26</data>
                                    </a>
                                </li>

                                </ul>

                            </li>

                            <li class="sidebar-menu-category">

                                <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <img src={jewelry} alt="clothes" class="menu-title-img" width="20"
                                    height="20"/>

                                    <p class="menu-title">Jewelry</p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-plus add-icon"></i>
                                <i class="fa-solid fa-minus remove-icon"></i>
                                </div>

                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Earrings</p>
                                    <data value="46" class="stock" title="Available Stock">46</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Couple Rings</p>
                                    <data value="73" class="stock" title="Available Stock">73</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Necklace</p>
                                    <data value="61" class="stock" title="Available Stock">61</data>
                                    </a>
                                </li>

                                </ul>

                            </li>

                            <li class="sidebar-menu-category">

                                <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <img src={perfume} alt="perfume" class="menu-title-img" width="20"
                                    height="20"/>

                                    <p class="menu-title">Perfume</p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-plus add-icon"></i>
                                <i class="fa-solid fa-minus remove-icon"></i>
                                </div>

                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Clothes Perfume</p>
                                    <data value="12" class="stock" title="Available Stock">12 pcs</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Deodorant</p>
                                    <data value="60" class="stock" title="Available Stock">60 pcs</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">jacket</p>
                                    <data value="50" class="stock" title="Available Stock">50 pcs</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">dress & frock</p>
                                    <data value="87" class="stock" title="Available Stock">87 pcs</data>
                                    </a>
                                </li>

                                </ul>

                            </li>

                            <li class="sidebar-menu-category">

                                <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <img src={cosmetics} alt="cosmetics" class="menu-title-img" width="20"
                                    height="20"/>

                                    <p class="menu-title">Cosmetics</p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-plus add-icon"></i>
                                <i class="fa-solid fa-minus remove-icon"></i>
                                </div>

                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Shampoo</p>
                                    <data value="68" class="stock" title="Available Stock">68</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Sunscreen</p>
                                    <data value="46" class="stock" title="Available Stock">46</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Body Wash</p>
                                    <data value="79" class="stock" title="Available Stock">79</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Makeup Kit</p>
                                    <data value="23" class="stock" title="Available Stock">23</data>
                                    </a>
                                </li>

                                </ul>

                            </li>

                            <li class="sidebar-menu-category">

                                <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <img src={glasses} alt="glasses" class="menu-title-img" width="20"
                                    height="20"/>

                                    <p class="menu-title">Glasses</p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-plus add-icon"></i>
                                <i class="fa-solid fa-minus remove-icon"></i>
                                </div>

                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Sunglasses</p>
                                    <data value="50" class="stock" title="Available Stock">50</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Lenses</p>
                                    <data value="48" class="stock" title="Available Stock">48</data>
                                    </a>
                                </li>

                                </ul>

                            </li>

                            <li class="sidebar-menu-category">

                                <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <img src={bag} alt="bags" class="menu-title-img" width="20" height="20"/>

                                    <p class="menu-title">Bags</p>
                                </div>

                                <div>
                                    <i class="fa-solid fa-plus add-icon"></i>
                                <i class="fa-solid fa-minus remove-icon"></i>
                                </div>

                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Shopping Bag</p>
                                    <data value="62" class="stock" title="Available Stock">62</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Gym Backpack</p>
                                    <data value="35" class="stock" title="Available Stock">35</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Purse</p>
                                    <data value="80" class="stock" title="Available Stock">80</data>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Wallet</p>
                                    <data value="75" class="stock" title="Available Stock">75</data>
                                    </a>
                                </li>

                                </ul>

                            </li>

                            </ul>

                        </div>

                        <div class="product-showcase">

                            <h3 class="showcase-heading">best sellers</h3>

                            <div class="showcase-wrapper">

                            <div class="showcase-container">

                                <div class="showcase">

                                <a href="#" class="showcase-img-box">
                                    <img src={productOne} alt="baby fabric shoes" width="75" height="75"
                                    class="showcase-img"/>
                                </a>

                                <div class="showcase-content">

                                    <a href="#">
                                    <h4 class="showcase-title">baby fabric shoes</h4>
                                    </a>

                                    <div class="showcase-rating">
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    </div>

                                    <div class="price-box">
                                    <del>$5.00</del>
                                    <p class="price">$4.00</p>
                                    </div>

                                </div>

                                </div>

                                <div class="showcase">

                                <a href="#" class="showcase-img-box">
                                    <img src={productTwo} alt="men's hoodies t-shirt" class="showcase-img"
                                    width="75" height="75"/>
                                </a>

                                <div class="showcase-content">

                                    <a href="#">
                                    <h4 class="showcase-title">men's hoodies t-shirt</h4>
                                    </a>
                                    <div class="showcase-rating">
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star-half-outline"></i>
                                    </div>

                                    <div class="price-box">
                                    <del>$17.00</del>
                                    <p class="price">$7.00</p>
                                    </div>

                                </div>

                                </div>

                                <div class="showcase">

                                <a href="#" class="showcase-img-box">
                                    <img src={productThree} alt="girls t-shirt" class="showcase-img" width="75"
                                    height="75"/>
                                </a>

                                <div class="showcase-content">

                                    <a href="#">
                                    <h4 class="showcase-title">girls t-shirt</h4>
                                    </a>
                                    <div class="showcase-rating">
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star-half-outline"></i>
                                    </div>

                                    <div class="price-box">
                                    <del>$5.00</del>
                                    <p class="price">$3.00</p>
                                    </div>

                                </div>

                                </div>

                                <div class="showcase">

                                <a href="#" class="showcase-img-box">
                                    <img src={productFour} alt="woolen hat for men" class="showcase-img" width="75"
                                    height="75"/>
                                </a>

                                <div class="showcase-content">

                                    <a href="#">
                                    <h4 class="showcase-title">woolen hat for men</h4>
                                    </a>
                                    <div class="showcase-rating">
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    <i name="star"></i>
                                    </div>

                                    <div class="price-box">
                                    <del>$15.00</del>
                                    <p class="price">$12.00</p>
                                    </div>

                                </div>

                                </div>

                            </div>

                            </div>

                        </div>

                    </div>
                </div>
                <ProductBox/>
            </div>
        
        
        </div>
        
    </div>
  )
}
