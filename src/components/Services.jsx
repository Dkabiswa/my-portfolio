import React from 'react';

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
                    <p>A mobilefirst approach to create websites users can interact with
                        irrespective of the device
                    </p>
                </div>
                <div className="col-md-3">
                    <div className="services-icon pb-2">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <h5>Front-end Development</h5>
                    <p>Using modern technologies like React, Vue ad Angular to create
                        a world class website / web application
                    </p>
                </div>
                <div className="col-md-3">
                    <div className="services-icon pb-2">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h5>Back-end Develpment</h5>
                    <p>Offer back-end solutions using node/express js to your day to day challenges
                        i.e APIs and others
                    </p>
                </div>
                <div className="col-md-3">
                    <div className="services-icon pb-2">
                        <i class="fas fa-briefcase i-5"></i>
                    </div>
                    <h5>eCommerce</h5>
                    <p>Intergration of different ecommerce platforms, payment gateways and more</p>
                </div>
            </div>
        </div>
    )
}

export default Services;