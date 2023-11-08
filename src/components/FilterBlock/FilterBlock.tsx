import { useState } from "react";
import { Button, Space, Input, Select } from "antd";
import styles from './styles.module.css'
import SelectBlock from "./SelectBlock/SelectBlock";
const FilterBlock = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleFilters = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.filtersList}>
            <Space className={styles.space}>
                <div className={styles.filterContainer}>
                    <Button
                        type="default"
                        onClick={toggleFilters}
                        className={styles.button}
                        style={{ marginLeft: "27px" }}

                    >
                        {isExpanded ? "REMOVE FILTER" : "FILTER"}
                    </Button>
                </div>
                {isExpanded && (
                    <div className={styles.buttonLine}>
                        <SelectBlock />
                        <Input type="default" placeholder="Add key words to find" className={styles.input} />
                        <Button type="default" className={styles.button} >Find</Button>

                    </div>
                )}
            </Space>
        </div>

    );
};

export default FilterBlock;
