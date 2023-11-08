import React from "react";
import {
    ExclamationCircleOutlined,
    MoreOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";

const ActiveBtn: React.FC = () => (
    <FloatButton.Group
        trigger="hover"
        type="default"
        style={{
            right: 100,
        }}
        icon={<MoreOutlined />}>
        <FloatButton icon={<ExclamationCircleOutlined />} />
        <FloatButton icon={<VerticalAlignBottomOutlined />} />
    </FloatButton.Group>
);

export default ActiveBtn;
