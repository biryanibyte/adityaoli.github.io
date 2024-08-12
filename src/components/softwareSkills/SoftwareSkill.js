import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

// Import custom SVG icons
import artifactory from "../../assets/icons/artifactory.svg";

export default function SoftwareSkill() {
  const svgIcons = {
    "artifactory": artifactory
  };
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.fontAwesomeClassname ? (
                  <i className={skills.fontAwesomeClassname}></i>
                ) : (
                  <img
                    src={svgIcons[skills.skillName]}
                    alt={skills.skillName}
                    className="custom-svg-icon"
                  />
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
