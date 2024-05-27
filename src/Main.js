import React from 'react'
import './App.css';
import heroImage from './icons_assets/restaurant.jpg'; 
import greek_salad from './icons_assets/greek_salad.jpg'; 
import lemon_dessert from './icons_assets/lemon_dessert.jpg'; 
import bruchetta from './icons_assets/bruchetta.svg'; 
import testimonialImage1 from './icons_assets/testimonial1.jpg'; 
import testimonialImage2 from './icons_assets/testimonial2.jpg'; 
import testimonialImage3 from './icons_assets/testimonial3.jpg'; 
import aboutImage1 from './icons_assets/Mario and Adrian A.jpg'; 
import aboutImage2 from './icons_assets/Mario and Adrian b.jpg'; 

export default function Main() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <button className="hero-button">Start Free Trial</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      <section className="highlights-section">
        <div className="highlights-header">
          <h1>Special</h1>
          <button className="menu-button">Online Menu</button>
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
            <p className="order-delivery">Order a delivery</p>
          </div>
          <div className="highlight">
            <img src={bruchetta} alt="Dish 2" />
            <div className="dish-info">
              <span className="dish-name">Bruchetta</span>
              <span className="dish-price">$14.99</span>
            </div>
            <p className="dish-description">A classic Italian appetizer consisting of grilled bread rubbed with garlic and topped 
            with a mix of diced tomatoes, fresh basil, olive oil, and balsamic vinegar.</p>
            <p className="order-delivery">Order a delivery</p>
          </div>
          <div className="highlight">
            <img src={lemon_dessert} alt="Dish 3" />
            <div className="dish-info">
              <span className="dish-name">Lemon Dessert</span>
              <span className="dish-price">$16.99</span>
            </div>
            <p className="dish-description">A delightful treat featuring a tangy lemon flavor, often found in lemon  tarts, lemon bars,
             or lemon cakes, with a perfect balance of sweetness  and a zesty finish.</p>
            <p className="order-delivery">Order a delivery</p>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-header">
          <h1 className="testimonials-title">Testimonials</h1>
        </div>
        <div className="testimonials-content">
          <div className="testimonial">
            <div className="testimonial-rating">Rating: 5</div>
            <img src={testimonialImage1} alt="Testimonial 1" className="testimonial-image" />
            <div className="testimonial-info">
              <div className="testimonial-name">John Doe</div>
              <div className="testimonial-review">"Lorem ipsum dolor sit amet"</div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-rating">Rating: 4.5</div>
            <img src={testimonialImage2} alt="Testimonial 2" className="testimonial-image" />
            <div className="testimonial-info">
              <div className="testimonial-name">Jane Smith</div>
              <div className="testimonial-review">"Sed cursus ante dapibus diam. Sed nisi."</div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-rating">Rating: 4</div>
            <img src={testimonialImage3} alt="Testimonial 3" className="testimonial-image" />
            <div className="testimonial-info">
              <div className="testimonial-name">Alice Johnson</div>
              <div className="testimonial-review">"Lorem ipsum dolor sit amet."</div>
            </div>
          </div>
          </div>
        </section>

          <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.  </p>
            </div>
            <div className="about-images">
              <img src={aboutImage1} alt="About 1" className="about-image-1" />
              <img src={aboutImage2} alt="About 2" className="about-image-2" />
            </div>
          </div>
          </section>

    </main>
  );
}