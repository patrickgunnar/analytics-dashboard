import { ElementType } from "react";

export default function Button({
    label,
    icon: Icon,
    isActive = false,
    isCollapsed,
    onClick,
}: {
    label: string;
    icon: ElementType;
    isActive?: boolean;
    isCollapsed: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`@module:button::btn ${
                isActive ? "@module:button::active" : ""
            } ${
                isCollapsed
                    ? "@module:button::justifyCenter"
                    : "@module:button::justifyStart"
            }`}
        >
            <Icon
                className={
                    isCollapsed
                        ? "@module:button::iconCollapsed"
                        : "@module:button::iconExpand"
                }
            />
            {!isCollapsed && (
                <span className="@module:button::label">{label}</span>
            )}
        </button>
    );
}
