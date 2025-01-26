import React, { useState } from "react";
import'./Team.css'


const TeamSection = () => {
  const teamMembers = [
    { name: "Eraj Januka", role: "Team Leader", image: "Eraj.jpeg" },
    { name: "Nimsara Mahith", role: "Member", image: "Nimsara.jpeg" },
    { name: "Rumal Madagedara", role: "Member", image: "Rumal.jpeg" },
    { name: "Venuki Mahakumbura", role: "Member", image: "Venuki.jpeg" },
    { name: "Tharushi Pemasha", role: "Member", image: "Tharushi2.jpeg" },
    { name: "Methara Nadithi", role: "Member", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjiTbRHnnNRa7CtmDfiSyB5afPUNwUlz8n0Q&s" },
  ];

  const [animate, setAnimate] = useState(false);

  const handleEnterSection = () => {
    setAnimate(true);
  };

  return (
    <div className={`team-section ${animate ? "animate" : ""}`} onClick={handleEnterSection}>
      <div className="team-intro">
      <h1>Meet Our Team</h1>
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
