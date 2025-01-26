import React from "react";
import "../Pages/Services.css";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Tracking projects",
      description:
      "Adding images improves transparency and helps stakeholders understand progress clearly.",
    },
    {
      id: 2,
      title: "Clear Insights",
      description:
      "Using visuals, like images, enhances transparency and improves stakeholder understanding.",
    },
    {
      id: 3,
      title: "Progress Updates.",
      description:
        "Sending updated progression records of the project via email and a WhatsApp message to the client.",
    },
    {
      id: 4,
      title: "Hardware Finder ",

      description:
        
"Identifying and showcasing nearby hardware stores based on user location. This ensures convenience and easy access to required resources.",
    },
    {id: 5,
      title: "Project Customization",
      description:
      "Providing users with the ability to customize their projects according to their preferences and requirements.",
    },
    {
        id: 6,
      title: "Language Options",
      description:
      "Three language options (English, Sinhala,Tamil).",
    }
  ];

  return (
    <section className="services">
      <div className="services-header">
        <h2>Our Features</h2>
        <p>
        "We are a project management solution providing real-time updates, transparent communication, and resource accessibility to streamline your construction processes.".
        </p>
      </div>
      <div className="services-cards">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <span className="service-number">0{service.id}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;