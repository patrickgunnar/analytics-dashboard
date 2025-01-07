import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const months = [
    { label: "JAN", percentage: 10 },
    { label: "FAB", percentage: 40 },
    { label: "MAR", percentage: 15 },
    { label: "APR", percentage: 70 },
    { label: "MAY", percentage: 28 },
    { label: "JUN", percentage: 40 },
    { label: "JUL", percentage: 50 },
    { label: "AUG", percentage: 25 },
    { label: "SEP", percentage: 55 },
    { label: "OCT", percentage: 61 },
    { label: "NOV", percentage: 90 },
    { label: "DEC", percentage: 100 },
];

function Bar({ label, percentage }: { label: string; percentage: number }) {
    return (
        <li className="@module:activity::chartItem">
            <div className="@module:activity::barBox">
                <div
                    className="@module:activity::bar"
                    style={{ height: `${percentage}%` }}
                ></div>
            </div>
            <span className="@module:activity::label">{label}</span>
        </li>
    );
}

export default function Activity() {
    return (
        <section className="@module:activity::section">
            <div className="@module:activity::titleBox">
                <h3 className="@module:activity::title">Activity</h3>
                <Link
                    href="#"
                    className="@class:unstyledLink @module:activity::link"
                >
                    <span>Month</span>
                    <IoIosArrowDown className="@module:activity::icon" />
                </Link>
            </div>
            <div className="@module:activity::chartBox">
                <ul className="@module:activity::sidebar">
                    <li className="@module:activity::sidebarItem">100</li>
                    <li className="@module:activity::sidebarItem">75</li>
                    <li className="@module:activity::sidebarItem">50</li>
                    <li className="@module:activity::sidebarItem">25</li>
                    <li className="@module:activity::sidebarItem">0</li>
                </ul>
                <ul className="@module:activity::chart">
                    {months.map((month, idx) => {
                        return (
                            <Bar
                                key={`${month.label}-${month.percentage}-${idx}`}
                                label={month.label}
                                percentage={month.percentage}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
