import React from "react";

const Services = () => {
  return (
    <div className="container-fluid services-sect" id="services">
      <div className="py-5">
        <h3>SERVICES</h3>
      </div>
      <div className="row pb-4">
        <div className="col-md-3">
          <div className="services-icon pb-2">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <h5>Responsive Design</h5>
          <p>
            Crafting mobile-first experiences that adapt seamlessly to any
            screen size.
          </p>
        </div>
        <div className="col-md-3">
          <div className="services-icon pb-2">
            <i class="fas fa-laptop-code"></i>
          </div>
          <h5>Front-end/Back-end Development</h5>
          <p>
            Building robust web applications using modern technologies like
            React, Next.js, Node.js, and TypeScript.
          </p>
        </div>
        <div className="col-md-3">
          <div className="services-icon pb-2">
            <i class="fas fa-cogs"></i>
          </div>
          <h5>Bot Development</h5>
          <p>
            Creating smart, platform-specific bots for Slack, WhatsApp,
            Telegram, Facebook Messenger, and more.
          </p>
        </div>
        <div className="col-md-3">
          <div className="services-icon pb-2">
            <i class="fas fa-briefcase i-5"></i>
          </div>
          <h5>eCommerce Integration</h5>
          <p>
            Connecting your online store to payment gateways and commerce tools
            with secure, scalable solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
