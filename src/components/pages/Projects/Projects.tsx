import React, { type CSSProperties } from "react";
import "./Projects.css";
import ProjectCard from "../../molecules/ProjectCard/ProjectCard";

interface Project {
    title: string;
    description: string;
    image?: string;
    link: string;
    inProgress?: boolean;
}

const projects: Project[] = [
    {
        title: "Dice & Friends",
        description: "A web applications to allow multiples persons to roll dice and share the results in real time.",
        link: "https://github.com",
        inProgress: true,
    },
    {
        title: "Pet Care",
        description: "A mobile application to track pet medical records, appointments, and daily care routines.",
        link: "https://github.com",
        inProgress: true,
    }
];

const Projects: React.FC = () => {
    return (
        <div className="Projects">
            <div className="Projects__grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                        inProgress={project.inProgress}
                        style={{"--delay": `${index * 0.2}s`} as CSSProperties}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
