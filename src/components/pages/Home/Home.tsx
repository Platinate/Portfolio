import "./Home.css";
import Card from "../../molecules/Card/Card";
import type { TechTag, NetworkLink } from "../../molecules/Card/Card";
import Timeline from "../../organisms/Timeline/Timeline";
import me from "../../../assets/images/me.jpg";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

function calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const BIRTH_DATE = new Date(1996, 3, 26); // April 26, 1996

const techs: TechTag[] = [
    {
        name: "JavaScript",
        iconUrl: `${DEVICON}/javascript/javascript-original.svg`,
        color: "#F7DF1E",
        textColor: "#000",
    },
    {
        name: "React",
        iconUrl: `${DEVICON}/react/react-original.svg`,
        color: "#20232A",
        textColor: "#61DAFB",
    },
    {
        name: "CSS",
        iconUrl: `${DEVICON}/css3/css3-original.svg`,
        color: "#1572B6",
        textColor: "#fff",
    },
    {
        name: "Compass",
        iconUrl: `${DEVICON}/sass/sass-original.svg`,
        color: "#EF5734",
        textColor: "#fff",
    },
    {
        name: "Bootstrap",
        iconUrl: `${DEVICON}/bootstrap/bootstrap-original.svg`,
        color: "#7952B3",
        textColor: "#fff",
    },
    {
        name: ".NET",
        iconUrl: `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
        color: "#512BD4",
        textColor: "#fff",
    },
    {
        name: "ASP.NET",
        iconUrl: `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
        color: "#5C2D91",
        textColor: "#fff",
    },
    {
        name: "SQL",
        iconUrl: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-plain.svg`,
        color: "#CC2927",
        textColor: "#fff",
    },
];

const networks: NetworkLink[] = [
    {
        icon: `${DEVICON}/github/github-original.svg`,
        url: "https://github.com",
        text: "GitHub",
    },
    {
        icon: `${DEVICON}/linkedin/linkedin-original.svg`,
        url: "https://linkedin.com",
        text: "LinkedIn",
    },
];

export default function Home() {
    const age = calculateAge(BIRTH_DATE);

    return (
        <div className="Home">
            <div className="Home__left">
                <Card
                    title="Dolinski Nathan"
                    subtitle="Full Stack Developer"
                    age={age}
                    image={me}
                    techs={techs}
                    networks={networks}
                    className="fadeIn"
                />
            </div>
            <div className="Home__right">
                <Timeline />
            </div>
        </div>
    );
}
