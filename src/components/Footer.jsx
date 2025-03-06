import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>About</h3>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Flipkart Stories</a>
        </div>

        <div className="footer-column">
          <h3>Help</h3>
          <a href="#">Payments</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation & Returns</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-column">
          <h3>Consumer Policy</h3>
          <a href="#">Return Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Security</a>
          <a href="#">Privacy</a>
        </div>

        <div className="footer-column">
          <h3>Social</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Uttam Maurya . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
