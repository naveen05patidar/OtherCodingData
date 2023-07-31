import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
        <div className="foot-panel1">Back to Top</div>

        <div className="foot-panel2">
          <ul>
            <p>Get to Know Us</p>
            <Link>Careers </Link>
            <Link>Blog </Link>
            <Link>About Amazon </Link>
            <Link>Investor Relations </Link>
            <Link>Amazon Devices </Link>
            <Link>Amazon Science </Link>
          </ul>
          <ul>
            <p>Make Money with Us</p>
            <Link>Sell products on Amazon </Link>
            <Link>Sell on Amazon Business </Link>
            <Link>Sell apps on Amazon </Link>
            <Link>Become an Affiliate </Link>
            <Link>Advertise Your Products </Link>
            <Link>Self-Publish with Us </Link>
            <Link>Host an Amazon Hub </Link>
            <Link>See More Make Money with Us </Link>
          </ul>
          <ul>
            <p>Amazon Payment Products </p>
            <Link>Amazon Business Card </Link>
            <Link>Shop with Points </Link>
            <Link>Reload Your Balance </Link>
            <Link>Amazon Currency Converter </Link>
          </ul>
          <ul>
            <p>Let Us Help You</p>
            <Link>Amazon and COVID-19 </Link>
            <Link>Your Account </Link>
            <Link>Your Orders </Link>
            <Link>Shipping Rates & Policies </Link>
            <Link>Returns & Replacements </Link>
            <Link>Manage Your Content and Devices </Link>
            <Link>Amazon Assistant </Link>
            <Link>Help </Link>
          </ul>
        </div>

        <div className="foot-panel3">
          <div className="logo"></div>
        </div>

        <div className="foot-panel4">
          <div className="pages">
            <Link>Conditions of use </Link>
            <Link>Privacy Notice</Link>
            <Link>Your ads Privacy Choices </Link>
          </div>
          <div className="copy-right">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
  )
}
