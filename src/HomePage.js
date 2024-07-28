import React from 'react'
import heroImage from './icons_assets/restaurant.jpg'; 
import greek_salad from './icons_assets/greek_salad.jpg'; 
import lemon_dessert from './icons_assets/lemon_dessert.jpg'; 
import bruchetta from './icons_assets/bruchetta.svg'; 
import testimonialImage1 from './icons_assets/testimonial1.jpg'; 
import testimonialImage2 from './icons_assets/testimonial2.jpg'; 
import testimonialImage3 from './icons_assets/testimonial3.jpg'; 
import aboutImage1 from './icons_assets/Mario and Adrian A.jpg'; 
import aboutImage2 from './icons_assets/Mario and Adrian b.jpg'; 
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
        <section className="hero-section">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but 
            casual environment. The restauratn features a locally-sourced menu with daily specials.
          </p>
          <button className="hero-button">
        <Link to="/booking">Reserve a Table</Link>
      </button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      <section className="highlights-section">
        <div className="highlights-header">
          <h1>Special</h1>
          <Link to="/menu">
        <button className="menu-button">Online Menu</button>
      </Link>
        </div>
        <div className="highlights-content">
          <div className="highlight">
            <img src={greek_salad} alt="Dish 1" />
            <div className="dish-info">
              <span className="dish-name">Greek Salad</span>
              <span className="dish-price">$12.99</span>
            </div>
            <p className="dish-description">A refreshing mix of ripe tomatoes, crisp cucumbers, red onions, green bell peppers, 
            kalamata olives, and feta cheese, all dressed in a simple olive oil and oregano dressing.</p>
            <p className="order-delivery">
            <Link to="/order">Order a delivery</Link>
            </p>
          </div>
          <div className="highlight">
            <img src={bruchetta} alt="Dish 2" />
            <div className="dish-info">
              <span className="dish-name">Bruchetta</span>
              <span className="dish-price">$14.99</span>
            </div>
            <p className="dish-description">A classic Italian appetizer consisting of grilled bread rubbed with garlic and topped 
            with a mix of diced tomatoes, fresh basil, olive oil, and balsamic vinegar.</p>
            <p className="order-delivery">
            <Link to="/order">Order a delivery</Link>
            </p>
          </div>
          <div className="highlight">
            <img src={lemon_dessert} alt="Dish 3" />
            <div className="dish-info">
              <span className="dish-name">Lemon Dessert</span>
              <span className="dish-price">$16.99</span>
            </div>
            <p className="dish-description">A delightful treat featuring a tangy lemon flavor, often found in lemon  tarts, lemon bars,
             or lemon cakes, with a perfect balance of sweetness  and a zesty finish.</p>
             <p className="order-delivery">
            <Link to="/order">Order a delivery</Link>
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
  <div className="testimonials-header">
    <h1 className="testimonials-title">Testimonials</h1>
  </div>
  <div className="testimonials-content" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
    <div className="testimonial" style={{ flex: '1 0 30%', margin: '10px' }}>
      <div className="testimonial-rating">Rating: 4</div>
      <img src={testimonialImage1} alt="Testimonial 1" className="testimonial-image" />
      <div className="testimonial-info">
        <div className="testimonial-name">Fred, the White-faced Capuchin</div>
        <div 
          className="testimonial-review">
          "As a Capuchin monkey, I was disappointed by the lack of cappuccinos, but they really turned my mood around with that stellar Lemon Dessert!"
        </div>
      </div>
    </div>
    <div className="testimonial" style={{ flex: '1 0 30%', margin: '10px' }}>
      <div className="testimonial-rating">Rating: 4</div>
      <img src={testimonialImage2} alt="Testimonial 2" className="testimonial-image" />
      <div className="testimonial-info">
        <div className="testimonial-name">Jane, the Emerald Toucanet</div>
        <div 
          className="testimonial-review">
          "While I live happy on a steady diet of fruit and eggs, that bruchetta was to DIE for."
        </div>
      </div>
    </div>
    <div className="testimonial" style={{ flex: '1 0 30%', margin: '10px' }}>
      <div className="testimonial-rating">Rating: 5</div>
      <img src={testimonialImage3} alt="Testimonial 3" className="testimonial-image" />
      <div className="testimonial-info">
        <div className="testimonial-name">Alice, the Swallow-Tailed Gull</div>
        <div 
          className="testimonial-review">
          "Scree!! Creow, creow, creow."
        </div>
      </div>
    </div>
  </div>
</section>


          <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>Little Lemon boasts the finest chefs in Chicago, each bringing a wealth of culinary expertise and a passion 
                for creating exceptional dishes. Our chefs are renowned for their innovative approach to cooking, blending 
                traditional techniques with modern flavors to craft unforgettable dining experiences. 
                At Little Lemon, our commitment to excellence is evident in every bite, making us the go-to destination for 
                gourmet cuisine in the heart of Chicago. </p>
            </div>
            <div className="about-images">
              <img src={aboutImage1} alt="About 1" className="about-image-1" />
              <img src={aboutImage2} alt="About 2" className="about-image-2" />
            </div>
          </div>
          </section>
    </div>
  )
}
