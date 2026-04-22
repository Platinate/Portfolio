import React, { useRef, useEffect } from "react";
import './Header.css';
import { Link, useLocation } from "react-router";

const updateHighlightPosition = (link: HTMLElement | null, highlight: HTMLDivElement | null, container: HTMLElement | null) => {
    if (highlight && link && container) {
        const linkRect = link.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        highlight.style.width = `${linkRect.width}px`;
        highlight.style.left = `${linkRect.left - containerRect.left}px`;
    }
};

const Header: React.FC = () => {
    const location = useLocation();
    const highlightRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const activeLink = containerRef.current?.querySelector('.Header__link--active') as HTMLElement | null;
        updateHighlightPosition(activeLink || containerRef.current?.querySelector('.Header__link'), highlightRef.current, containerRef.current);
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            const activeLink = containerRef.current?.querySelector('.Header__link--active') as HTMLElement | null;
            updateHighlightPosition(activeLink || containerRef.current?.querySelector('.Header__link'), highlightRef.current, containerRef.current);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="Header">
            <div className="Header__container" ref={containerRef}>
                <Link to="/" className={`Header__link ${location.pathname === "/" ? "Header__link--active" : ""}`}>Who am I ?</Link>
                <Link to="/projects" className={`Header__link ${location.pathname === "/projects" ? "Header__link--active" : ""}`}>Projects</Link>
                <div ref={highlightRef} className="Header__highlight"></div>
            </div>
        </header>
    )
}

export default Header