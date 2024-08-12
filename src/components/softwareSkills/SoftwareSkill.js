import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

// Import custom SVG icons
import artifactory from "../../assets/icons/artifactory.svg";
import awslambda from "../../assets/icons/aws-lambda-color.svg";
import dynatrace from "../../assets/icons/dynatrace.svg";
import grafana from "../../assets/icons/helm-color.svg";
import helmcolor from "../../assets/icons/helm-color.svg";
import jenkinsoriginal from "../../assets/icons/jenkins-original.svg";
import jfrog from "../../assets/icons/jfrog.svg";
import kubernetes from "../../assets/icons/kubernetes.svg";
import pipeline from "../../assets/icons/pipeline.svg";
import postman from "../../assets/icons/postman.svg";
import prometheus from "../../assets/icons/prometheus.svg";
import redhat from "../../assets/icons/redhat.svg";
import splunk from "../../assets/icons/splunk.svg";
import terraformcolor from "../../assets/icons/terraform-color.svg";
import vault from "../../assets/icons/vault.svg";
import vmware from "../../assets/icons/vmware.svg";


export default function SoftwareSkill() {
  const svgIcons = {
    "artifactory": artifactory,
    "awslambda":awslambda,
    "dynatrace":dynatrace,
    "grafana":grafana,
    "helmcolor":helmcolor,
    "jenkinsoriginal":jenkinsoriginal,
    "jfrog":jfrog,
    "kubernetes":kubernetes,
    "pipeline":pipeline,
    "postman":postman,
    "prometheus":prometheus,
    "redhat":redhat,
    "splunk":splunk,
    "terraformcolor":terraformcolor,
    "vault":vault,
    "vmware":vmware
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
                    className="software-skill-inline"
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
