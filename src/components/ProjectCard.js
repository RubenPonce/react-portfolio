import React from "react";
import {trackButtonClick} from "./analytics";

export const ProjectCard = ({project}) => {

    return (
        <div className="project-card">
            <div className="landing-image-container">
                <img
                    className="landing-image"
                    src={project.landingImage}
                    alt="project card"
                />
                <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                        <i className={`fab fa-${tech} fa-2x`} key={i}/>
                    ))}
                </div>
            </div>
            <div className="project-header">
                <h3>{project.project_name}</h3>
                <p> {project.description}</p>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={trackButtonClick}>
                    <button
                        className="project-cta"
                    >
                        live demo
                    </button>
                </a>
                <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        color="primary"
                        className="project-cta"
                        style={{margin: "0 .5em"}}
                    >
                        source code
                    </button>
                </a>
            </div>
        </div>
    );
}
