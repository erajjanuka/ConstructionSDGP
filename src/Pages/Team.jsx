import React, { useState } from "react";
import'./Team.css'
import { Link } from "react-router-dom";

const TeamSection = () => {
  const teamMembers = [
    { name: "Eraj Januka", role: "Team Leader", image: "Eraj.jpeg" },
    { name: "Carrie Abbey", role: "Photographer", image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" },
    { name: "Sue Attwood", role: "Project Manager", image: "Rumal.jpeg" },
    { name: "John Smith", role: "Sales Marketing", image: "https://media.istockphoto.com/id/1311957094/photo/handsome-smiling-young-man-with-crossed-arms-portrait.jpg?s=612x612&w=0&k=20&c=zALF0xV8gL-W9IooXcbEE95aejQhYYkBslwjPMqlUxA=" },
    { name: "Venuki Mahakumbura", role: "Accountant", image: "Venuki.jpeg" },
    
  ];

  const [animate, setAnimate] = useState(false);

  const handleEnterSection = () => {
    setAnimate(true);
  };

  return (
    <div className={`team-section ${animate ? "animate" : ""}`} onClick={handleEnterSection}>
      <div className="team-intro">
      <h1>Meet Our Team</h1>
        <p>Note: Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-photo">
              <img src={member.image} alt={member.name} />
              <div className="circle-decoration"></div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
