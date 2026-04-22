import React from "react";
import "./Timeline.css";
import TimelineItem, {type TimelineItemProps} from "../../molecules/TimelineItem/TimelineItem";

const timelineData: TimelineItemProps[] = [
    {
        title: <div><h1>Brainsquare</h1><h2>2022 - Today</h2></div>,
        description: ".Net Software Developer"
    },
    {
        title: <div><h1>Advensys</h1><h2>2022 - Today</h2></div>,
        description: ".Net Developer & ERP Specialist."
    },
    {
        title: <div><h1>EPHEC</h1><h2>2015 - 2018</h2></div>,
        description: "Bachelor's degree in Computer Science and Systems, with a concentration in Information Technology."
    }
];

const Timeline: React.FC = () => {
    return (
        <div className="Timeline">
            <div className="Timeline__line"></div>
            <div className="Timeline__container">
                {timelineData.map((item, index) => (
                    <TimelineItem key={index} value={item} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Timeline;