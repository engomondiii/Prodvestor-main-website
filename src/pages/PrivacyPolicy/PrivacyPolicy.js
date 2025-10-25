/**
 * PRODVESTOR WEBSITE - PRIVACY POLICY PAGE
 * FILE LOCATION: src/pages/PrivacyPolicy/PrivacyPolicy.js
 */

import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: October 2025</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Prodvestor Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Professional information</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Communications with us</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Process transactions</li>
            <li>Send you updates and marketing communications</li>
            <li>Respond to your inquiries</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            Email: info@prodvestor.com
            <br />
            Address: Ndege Road, The Watermark Business Park, Karen, Nairobi, Kenya
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;