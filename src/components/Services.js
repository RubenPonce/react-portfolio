
import React from 'react';

export const Services = () => {
const services = [{
    title: "Custom Website Development",
        text: "Your site, your way. We can build your site from the ground up, or we can work with your existing site to make it better.",
    icon: "fas fa-code"
},

{
    title: "Web Design and Implementation",
        text: "No Design? No Problem. Your site will be implemented by UI specialists who will make your site look great.",
    icon: "fas fa-paint-brush"
},
    {
        title: "WordPress Development, Maintenance, and Support",
        text: "Looking for specific WordPress functionality or custom plugins? We can help. We can also help you maintain your WordPress site, and provide support for your WordPress site.",
        icon: "fab fa-wordpress"
    },
]

    return (
        <div className="services-container">
            {services.map((service, index) => (
                <div className="service-card" key={index}>
                    <i  className={`${service.icon} service-icon`} alt={service.title} />
                    <h4 className="service-title">{service.title}</h4>
                    <p className="service-text">{service.text}</p>
                </div>
            ))}
        </div>
    );
}