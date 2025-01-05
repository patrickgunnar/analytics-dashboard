"use client";

import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const timeframes: string[] = [
    "All Time",
    "Last 7 Days",
    "This Month",
    "This Year",
    "Custom",
];

const topics: string[] = [
    "All",
    "Strongest",
    "Weakest",
    "Medium",
    "Above the Average",
];

interface ItemInterface {
    label: string;
    index: number;
    isActive: boolean;
    onClick: (idx: number) => void;
}

function Item({ label, index, isActive, onClick }: ItemInterface) {
    return (
        <li className="@module:selectors::selectItem">
            <button
                className={`@module:selectors::itemBtn ${
                    isActive ? "@module:selectors::active" : ""
                }`}
                onClick={() => onClick(index)}
            >
                {label}
            </button>
        </li>
    );
}

export default function Selectors() {
    const [onTimeframeOpen, setOnTimeframeOpen] = useState<boolean>(false);
    const [onTopicOpen, setOnTopicOpen] = useState<boolean>(false);

    const [timeframe, setTimeframe] = useState<number>(0);
    const [topic, setTopic] = useState<number>(0);

    const handleTimeframeOpenClose = () => {
        setOnTimeframeOpen((prev) => !prev);
    };

    const handleTopicOpenClose = () => {
        setOnTopicOpen((prev) => !prev);
    };

    const handleTimeframeClick = (idx: number) => {
        if (idx > timeframes.length) return;

        setTimeframe(idx);
        handleTimeframeOpenClose();
    };

    const handleTopicClick = (idx: number) => {
        if (idx > topics.length) return;

        setTopic(idx);
        handleTopicOpenClose();
    };

    return (
        <section className="@module:selectors::section">
            <div className="@module:selectors::selectBox">
                <button
                    className="@module:selectors::selectBtn"
                    onClick={handleTimeframeOpenClose}
                >
                    <span>
                        Timeframe:{" "}
                        <span className="@module:selectors::bold">
                            {timeframes[timeframe]}
                        </span>
                    </span>
                    {onTimeframeOpen ? (
                        <TiArrowSortedUp className="@module:selectors::icon" />
                    ) : (
                        <TiArrowSortedDown className="@module:selectors::icon" />
                    )}
                </button>
                {onTimeframeOpen && (
                    <ul className="@module:selectors::selectList">
                        {timeframes.map((label, index) => {
                            return (
                                <Item
                                    key={`${label}-${index}`}
                                    label={label}
                                    index={index}
                                    isActive={timeframe === index}
                                    onClick={handleTimeframeClick}
                                />
                            );
                        })}
                    </ul>
                )}
            </div>
            <div className="@module:selectors::selectBox">
                <button
                    className="@module:selectors::selectBtn"
                    onClick={handleTopicOpenClose}
                >
                    <span>
                        Topic:{" "}
                        <span className="@module:selectors::bold">
                            {topics[topic]}
                        </span>
                    </span>
                    {onTopicOpen ? (
                        <TiArrowSortedUp className="@module:selectors::icon" />
                    ) : (
                        <TiArrowSortedDown className="@module:selectors::icon" />
                    )}
                </button>
                {onTopicOpen && (
                    <ul className="@module:selectors::selectList">
                        {topics.map((label, index) => {
                            return (
                                <Item
                                    key={`${label}-${index}`}
                                    label={label}
                                    index={index}
                                    isActive={topic === index}
                                    onClick={handleTopicClick}
                                />
                            );
                        })}
                    </ul>
                )}
            </div>
        </section>
    );
}
