import React from "react";
import "./ProjectCard.css";

interface Props {
    image?: string;
    imageAlt?: string;
    title: string;
    description: string;
    link: string;
    inProgress?: boolean;
    style: React.CSSProperties;
}

const ProjectCard: React.FC<Props> = ({ image, imageAlt, title, description, link, inProgress, style }) => {
    return (
        <div className="ProjectCard fadeIn" style={style}>
            {inProgress && <span className="ProjectCard__badge">In Progress</span>}
            <div className="ProjectCard__picture">
                {image
                    ? <img src={image} alt={imageAlt ?? title} className="ProjectCard__image" />
                    : <div className="ProjectCard__image-placeholder" />
                }
            </div>
            <div className="ProjectCard__body">
                <p className="ProjectCard__title">{title}</p>
                <p className="ProjectCard__description">{description}</p>
                <a href={link} className="ProjectCard__link" target="_blank" rel="noopener noreferrer">
                    View project →
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
