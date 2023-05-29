import styles from "./Recognition.module.scss"
import {List, Layout} from "antd";
import React from 'react';
import data from "../../assets/text/Recognition.json"

const recognitionItems = data.data

const Recognition = () => {
    return <div>
        <Layout className = {styles.headingRecognition}> Профессиональное признание </Layout>
        <List
            dataSource = {recognitionItems}
            itemLayout="vertical"
            renderItem = { (item) => (
                <List.Item>
                    <Layout className={styles.recognitionItem}>
                        {item.title}
                    </Layout>
                    <Layout className={styles.recognitionItemDescription}>
                        {item.description}
                    </Layout>
                </List.Item>
            )}
        />
    </div>
}

export default Recognition;