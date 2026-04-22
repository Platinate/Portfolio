import React, { type CSSProperties } from "react";
import "./TimelineItem.css";

const ANIMATION_DELAY_INCREMENT = 0.33; // seconds

export interface TimelineItemProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
}

interface Props {
    value: TimelineItemProps;
    index: number;
}

const TimelineItem: React.FC<Props> = ({ value, index }) => {
    return (<div
        key={index}
        className={`Timeline__item Timeline__item--${index % 2 === 0 ? "left" : "right"}`}>
        <div className="Timeline__dot"></div>
        <div className="Timeline__content" style={{ "--delay": `${index * ANIMATION_DELAY_INCREMENT}s` } as CSSProperties}>
            <h3 className="Timeline__title">{value.title}</h3>
            <p className="Timeline__description">{value.description}</p>
        </div>
    </div>)
}

export default TimelineItem;