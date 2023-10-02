import React from "react";
import {ProjectCard} from "./ProjectCard";
import projects from "../data.js"

export const Projects = () => {
    return (
        <div>
            <div className="project-intro">
                <h2>Projects: </h2>
            </div>
            <div className="projects-container">
                {projects.map(projectCard => {
                    return (
                        <ProjectCard
                            project={projectCard}
                            key={projectCard.id}
                            projectRoute={`/project/${projectCard.id}`}
                        />
                    );
                })}
            </div>
        </div>
    );
}

