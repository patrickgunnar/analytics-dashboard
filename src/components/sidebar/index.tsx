"use client";

import { useSidebar } from "@/store/useSidebar";
import { SiCircleci } from "react-icons/si";
import {
    FaChartLine,
    FaBookOpen,
    FaUserFriends,
    FaCheckSquare,
    FaLightbulb,
    FaToolbox,
    FaUserCircle,
} from "react-icons/fa";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Button from "../button";

export default function Sidebar() {
    const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);

    return (
        <aside
            className={
                collapsed
                    ? "@module:sidebar::onCollapse"
                    : "@module:sidebar::onExpand"
            }
        >
            <div>
                {!collapsed && <h1 className="@module:sidebar::logo">BOARD</h1>}
                {collapsed && <SiCircleci className="@module:sidebar::logo" />}
                <div className="@module:sidebar::optionsContainer">
                    <Button
                        isCollapsed={collapsed}
                        label="Reports"
                        icon={FaChartLine}
                        isActive
                        onClick={() => {}}
                    />
                    <Button
                        isCollapsed={collapsed}
                        label="Library"
                        icon={FaBookOpen}
                        onClick={() => {}}
                    />
                    <Button
                        isCollapsed={collapsed}
                        label="People"
                        icon={FaUserFriends}
                        onClick={() => {}}
                    />
                    <Button
                        isCollapsed={collapsed}
                        label="Activities"
                        icon={FaCheckSquare}
                        onClick={() => {}}
                    />
                </div>
                <div className="@module:sidebar::supportContainer">
                    {!collapsed && (
                        <span className="@module:sidebar::supportLabel">
                            Support
                        </span>
                    )}
                    <div className="@module:sidebar::optionsContainer">
                        <Button
                            isCollapsed={collapsed}
                            label="Get Started"
                            icon={FaLightbulb}
                            onClick={() => {}}
                        />
                        <Button
                            isCollapsed={collapsed}
                            label="Settings"
                            icon={FaToolbox}
                            onClick={() => {}}
                        />
                    </div>
                </div>
                <Button
                    isCollapsed={collapsed}
                    label={collapsed ? "Expand" : "Collapse"}
                    icon={collapsed ? GoArrowRight : GoArrowLeft}
                    onClick={collapsed ? onExpand : onCollapsed}
                />
            </div>
            <div className="@module:sidebar::userContainer">
                <FaUserCircle className="@module:sidebar::userIcon" />
                {!collapsed && (
                    <div className="@module:sidebar::userInfo">
                        <span className="@module:sidebar::username">
                            Galadriel CSS
                        </span>
                        <span className="@module:sidebar::userEmail">
                            galadrielcss@gmail.com
                        </span>
                    </div>
                )}
            </div>
        </aside>
    );
}
