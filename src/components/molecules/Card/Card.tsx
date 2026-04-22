import React from "react";
import "./Card.css";

export interface TechTag {
    name: string;
    iconUrl?: string;
    color: string;
    textColor?: string;
}

export interface NetworkLink {
    icon: string;
    url: string;
    text: string;
}

interface Props {
    title: string;
    subtitle?: string;
    age?: number;
    image: string;
    techs?: TechTag[];
    networks?: NetworkLink[];
    className?: string;
}

const Card: React.FC<Props> = ({ title, subtitle, age, image, techs, networks, className }) => {
    return (
        <div className={`Card${className ? ` ${className}` : ""}`}>
            <div className="Card__picture">
                <img src={image} alt={title} className="Card__image" />
            </div>
            <p className="Card__title">{title}</p>
            {(subtitle || age !== undefined) && (
                <div className="Card__meta">
                    {subtitle && <span className="Card__subtitle">{subtitle}</span>}
                    {age !== undefined && <span className="Card__age">{age} years old</span>}
                </div>
            )}
            {techs && techs.length > 0 && (
                <div className="Card__techs">
                    {techs.map((tech, index) => (
                        <span
                            key={index}
                            className="Card__tech-tag"
                            style={{ backgroundColor: tech.color, color: tech.textColor ?? "#000" }}
                        >
                            {tech.iconUrl && (
                                <img src={tech.iconUrl} alt={tech.name} className="Card__tech-icon" />
                            )}
                            <span>{tech.name}</span>
                        </span>
                    ))}
                </div>
            )}
            {networks && networks.length > 0 && (
                <div className="Card__networks">
                    <p className="Card__networks-title">Find me on</p>
                    <div className="Card__networks-links">
                        {networks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="Card__network-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={link.icon} alt={link.text} className="Card__network-icon" />
                                <span className="Card__network-text">{link.text}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
