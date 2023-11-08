import React from "react";

type StatusIconProps = {
    color: string;
};

const StatusIcon: React.FC<StatusIconProps> = ({ color }) => (
    <svg
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="9" height="9" rx="4.5" fill={color} />
    </svg>
);

export default StatusIcon;
