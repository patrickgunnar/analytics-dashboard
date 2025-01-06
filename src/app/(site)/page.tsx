import ReportsHeader from "./_components/reports-header";
import Selectors from "./_components/selectors";
import TopicCard, { TopicCardItem } from "./_components/topic-card";
import {
    FaFish,
    FaBalanceScaleLeft,
    FaUsers,
    FaHospitalAlt,
    FaUserShield,
    FaCheckDouble,
} from "react-icons/fa";

const weakestTopics: TopicCardItem[] = [
    {
        title: "Food Safety",
        percentage: 74,
        icon: FaFish,
    },
    {
        title: "Compliance Basics Procedures",
        percentage: 52,
        icon: FaBalanceScaleLeft,
    },
    {
        title: "Company Networking",
        percentage: 36,
        icon: FaUsers,
    },
];

const strongestTopics: TopicCardItem[] = [
    {
        title: "Covid Protocols",
        percentage: 95,
        icon: FaHospitalAlt,
    },
    {
        title: "Cyber Security Basics",
        percentage: 92,
        icon: FaUserShield,
    },
    {
        title: "Social Media Policies",
        percentage: 89,
        icon: FaCheckDouble,
    },
];

export default function Home() {
    return (
        <main className="@module:mainPage::main">
            <ReportsHeader />
            <Selectors />
            <div className="@module:mainPage::topicCards">
                <TopicCard
                    title="Weakest Topics"
                    color="red"
                    items={weakestTopics}
                />
                <TopicCard
                    title="Strongest Topics"
                    color="green"
                    items={strongestTopics}
                />
            </div>
        </main>
    );
}
