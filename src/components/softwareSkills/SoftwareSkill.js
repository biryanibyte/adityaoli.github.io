import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

// Import custom SVG icons
import artifactory from "../../assets/icons/artifactory.png";
import awslambda from "../../assets/icons/lambda.png";
import dynatrace from "../../assets/icons/dynatrace.png";
import grafana from "../../assets/icons/grafana.png";
import helmcolor from "../../assets/icons/helm.png";
import jenkinsoriginal from "../../assets/icons/jenkins.png";
import jfrog from "../../assets/icons/xray.png";
import kubernetes from "../../assets/icons/kubernetes.png";
import postman from "../../assets/icons/postman.png";
import prometheus from "../../assets/icons/prometheus.png";
import redhat from "../../assets/icons/redhat.png";
import splunk from "../../assets/icons/splunk.png";
import terraformcolor from "../../assets/icons/terraform.png";
import vault from "../../assets/icons/vault.png";
import vmware from "../../assets/icons/vmware.png";
import consulcolor from "../../assets/icons/consul.png";
import git from "../../assets/icons/git.png";
import radar from "../../assets/icons/radar.png";
import python from "../../assets/icons/python.png";


export default function SoftwareSkill() {
  const svgIcons = {
    "artifactory": artifactory,
    "lambda":awslambda,
    "dynatrace":dynatrace,
    "grafana":grafana,
    "helm":helmcolor,
    "jenkins":jenkinsoriginal,
    "jfrog":jfrog,
    "kubernetes":kubernetes,
    "postman":postman,
    "prometheus":prometheus,
    "redhat":redhat,
    "splunk":splunk,
    "terraform":terraformcolor,
    "vault":vault,
    "vmware":vmware,
    "consul":consulcolor,
    "git":git,
    "radar":radar,
    "python":python
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
