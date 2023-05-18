import styles from "./Recognition.module.scss"
import {List, Layout} from "antd";
import React from 'react';

const data = [
    {
        title: 'Item 1',
        description: "some description 1 some description 1 some description 1 some description 1 some description 1 some description 1 some description 1"
    },
    {
        title: 'Item 2',
        description: "some description 2some description 2some description 2some description 2 some description 2"
    },
    {
        title: 'Item 3',
        description: "some description 3some description 3some description 3some description 3some description 3some description 3some description 3"
    }
];

const Recognition = () => {
    return <div>
        <Layout className = {styles.headingRecognition}> Профессиональное признание </Layout>
        <List
            dataSource = {data}
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