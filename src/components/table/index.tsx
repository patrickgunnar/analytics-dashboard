"use client";

import { useSidebar } from "@/store/useSidebar";
import { PropsWithChildren, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Table({ children }: PropsWithChildren) {
    const matches = useMediaQuery("(max-width: 1024px)");
    const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);

    useEffect(() => {
        if (matches) onCollapsed();
        else onExpand();
    }, [matches, onCollapsed, onExpand]);

    return (
        <div
            className={
                collapsed
                    ? "@module:table::noSidebar"
                    : "@module:table::onSidebar"
            }
        >
            {collapsed && matches && children}
            {!matches && children}
        </div>
    );
}
