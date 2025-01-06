import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";

export type LeaderboardItem = {
    name: string;
    subheading: string;
    score: "high" | "down";
};

interface LeaderboardInterface {
    title: string;
    isUserIcon?: boolean;
    items: LeaderboardItem[];
}

function LeaderboardItem({
    name,
    score,
    idx,
    subheading,
    isUserIcon,
}: LeaderboardItem & { isUserIcon: boolean; idx: number }) {
    return (
        <li className="@module:leaderboard::item">
            {isUserIcon && (
                <FaUserCircle className="@module:leaderboard::icon" />
            )}
            <div
                className={
                    isUserIcon
                        ? "@module:leaderboard::itemBox"
                        : "@module:leaderboard::itemBox2"
                }
            >
                <h3 className="@module:leaderboard::itemTitle">{name}</h3>
                <p className="@module:leaderboard::itemLabel">{subheading}</p>
            </div>
            <div className="@module:leaderboard::scoreBox">
                <span className="@module:leaderboard::idx">{idx}</span>
                {score === "high" ? (
                    <TiArrowSortedUp className="@module:leaderboard::score @module:leaderboard::high" />
                ) : (
                    <TiArrowSortedDown className="@module:leaderboard::score @module:leaderboard::down" />
                )}
            </div>
        </li>
    );
}

export default function Leaderboard({
    title,
    items,
    isUserIcon = false,
}: LeaderboardInterface) {
    return (
        <section className="@module:leaderboard::section">
            <h3 className="@module:leaderboard::title">{title}</h3>
            <ul className="@module:leaderboard::list">
                {items.map((item, idx) => {
                    return (
                        <LeaderboardItem
                            key={`${item.name}-${item.subheading}-${idx}`}
                            idx={idx + 1}
                            name={item.name}
                            score={item.score}
                            subheading={item.subheading}
                            isUserIcon={isUserIcon}
                        />
                    );
                })}
            </ul>
            <div className="@module:leaderboard::linkContainer">
                <Link
                    href="#"
                    className="@class:unstyledLink @module:leaderboard::link"
                >
                    View full leaderboard
                    <IoIosArrowForward />
                </Link>
            </div>
        </section>
    );
}
