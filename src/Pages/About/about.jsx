import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success fst-italic">About Khamma Ghani</h1>
        <p className="text-secondary fs-5 mt-3">
          Bringing the royal flavors of Rajasthan to your plate — fresh, flavorful, and full of love.
        </p>
      </div>

      {/* Story Section */}
      <div className="row align-items-center justify-content-center mb-5">
        <div className="col-md-6 text-center mb-4 mb-md-0">
        <img
  src="https://media.istockphoto.com/id/1173807289/photo/indian-food.webp?s=1024x1024&w=is&k=20&c=UEDAEcQ_ywEk179pOJ-7IpQ3fxWabJmsw3fznJi6qbQ="
  alt="Rajasthani Thali - Khamma Ghani"
  className="img-fluid rounded-4 shadow"
  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
/>

        </div>
        <div className="col-md-6">
          <h3 className="fw-bold text-success mb-3">Our Story</h3>
          <p className="text-muted">
            Founded with a deep passion for authentic Indian cuisine, Khamma Ghani celebrates
            the essence of traditional Rajasthani hospitality. From spicy curries to soulful dal,
            every dish is prepared with fresh ingredients and a touch of home-style warmth.
          </p>
          <p className="text-muted">
            Our mission is simple — to make delicious, hygienic, and affordable food easily
            accessible for everyone, whether you’re dining in or ordering online.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="text-center mb-5">
        <h3 className="fw-bold text-success mb-3">Our Mission & Values</h3>
        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          At Khamma Ghani, we believe food is not just about taste — it’s an emotion.
          Every meal we serve is a reflection of our values:
        </p>
        <ul className="list-unstyled text-muted fs-6">
          <li>🍲 Fresh, locally sourced ingredients</li>
          <li>👨‍🍳 Authentic Indian recipes with a modern twist</li>
          <li>❤️ Hygiene, health, and happiness in every bite</li>
          <li>🚀 Fast and reliable delivery</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link to="/contact" className="btn btn-success px-4 py-2 rounded-pill">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
