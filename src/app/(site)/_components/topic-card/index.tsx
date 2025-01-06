import { ElementType } from "react";

export type TopicCardItem = {
    title: string;
    icon: ElementType;
    percentage: number;
};

interface TopicCardInterface {
    title: string;
    color: "red" | "green";
    items: TopicCardItem[];
}

function CardItem({
    title,
    percentage,
    icon: Icon,
    color,
}: TopicCardItem & { color: "red" | "green" }) {
    return (
        <li className="@module:topicCard::item">
            <Icon className="@module:topicCard::icon" />
            <div className="@module:topicCard::itemBox">
                <h3 className="@module:topicCard::itemTitle">{title}</h3>
                <div className="@module:topicCard::progressBarContainer">
                    <div className="@module:topicCard::progressBar">
                        <div
                            className={`@module:topicCard::opacity ${
                                color === "red"
                                    ? "@module:topicCard::red"
                                    : "@module:topicCard::green"
                            }`}
                        ></div>
                        <div
                            style={{ width: `${percentage}%` }}
                            className={`${
                                color === "red"
                                    ? "@module:topicCard::red"
                                    : "@module:topicCard::green"
                            }`}
                        ></div>
                    </div>
                    <div className="@module:topicCard::percentageBox">
                        <span className="@module:topicCard::percentageVal">
                            {percentage}%
                        </span>
                        <span className="@module:topicCard::percentageLabel">
                            Correct
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default function TopicCard({ title, color, items }: TopicCardInterface) {
    return (
        <section className="@module:topicCard::section">
            <h3 className="@module:topicCard::title">{title}</h3>
            <ul className="@module:topicCard::list">
                {items.map((item, idx) => {
                    return (
                        <CardItem
                            key={`${item.title}-${item.percentage}-percent-${idx}`}
                            title={item.title}
                            percentage={item.percentage}
                            icon={item.icon}
                            color={color}
                        />
                    );
                })}
            </ul>
        </section>
    );
}
