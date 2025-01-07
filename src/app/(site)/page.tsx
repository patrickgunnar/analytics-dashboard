import Activity from "./_components/activity";
import Leaderboard, { LeaderboardItem } from "./_components/leaderboard";
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

const usersLeaderboard: LeaderboardItem[] = [
    {
        name: "Jesse Milles",
        score: "high",
        subheading: "637 Points - 98% Correct",
    },
    {
        name: "Mike Junior",
        score: "down",
        subheading: "637 Points - 89% Correct",
    },
    {
        name: "Helen Labour",
        score: "high",
        subheading: "630 Points - 88% Correct",
    },
    {
        name: "Laura Baker",
        score: "high",
        subheading: "620 Points",
    },
    {
        name: "Kelly Fillips",
        score: "down",
        subheading: "620 Points",
    },
    {
        name: "Ken Court",
        score: "high",
        subheading: "615 Points",
    },
    {
        name: "Alice Williams",
        score: "down",
        subheading: "610 Points",
    },
    {
        name: "Adrian Brooke",
        score: "high",
        subheading: "605 Points",
    },
    {
        name: "Evelyn Lucas",
        score: "down",
        subheading: "605 Points",
    },
    {
        name: "Rosalyn Cullen",
        score: "high",
        subheading: "600 Points",
    },
];

const groupsLeaderboard: LeaderboardItem[] = [
    {
        name: "London Facility",
        score: "high",
        subheading: "52 Points / User - 97% Correct",
    },
    {
        name: "Test Group",
        score: "down",
        subheading: "51 Points / User - 95% Correct",
    },
    {
        name: "Sales Leadership",
        score: "high",
        subheading: "51 Points / User - 87% Correct",
    },
    {
        name: "Northeast Region",
        score: "high",
        subheading: "50 Points / User",
    },
    {
        name: "Southeast Region",
        score: "down",
        subheading: "50 Points / User",
    },
    {
        name: "District Managers",
        score: "high",
        subheading: "49 Points / User",
    },
    {
        name: "Senior Managers",
        score: "down",
        subheading: "48 Points / User",
    },
    {
        name: "New Hires",
        score: "high",
        subheading: "48 Points / User",
    },
    {
        name: "Southwest Region",
        score: "down",
        subheading: "47 Points / User",
    },
    {
        name: "Northwest Region",
        score: "high",
        subheading: "47 Points / User",
    },
];

export default function Home() {
    return (
        <main className="@module:mainPage::main">
            <ReportsHeader />
            <Selectors />
            <div className="@module:mainPage::topicCards">
                <Activity />
            </div>
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
            <div className="@module:mainPage::topicCards">
                <Leaderboard
                    title="User Leaderboard"
                    items={usersLeaderboard}
                    isUserIcon
                />
                <Leaderboard
                    title="Groups Leaderboard"
                    items={groupsLeaderboard}
                />
            </div>
        </main>
    );
}
