import React from "react";

export interface AnimatedTimelineItemProps {
    event: {
        year: string;
        title: string;
        description: string;
        icon: React.ReactNode;
    };
    isLast: boolean;
}