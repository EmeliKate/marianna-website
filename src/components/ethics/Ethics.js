import styles from "./Ethics.module.scss"
import {List, Layout} from "antd";
import React from 'react';

const data = [
    {
        title: 'Rule 1',
        description: "some description 1 some description 1 some description 1 some description 1 some description 1 some description 1 some description 1"
    },
    {
        title: 'Rule 2',
        description: "some description 2some description 2some description 2some description 2 some description 2"
    },
    {
        title: 'Rule 3',
        description: "some description 3some description 3some description 3some description 3some description 3some description 3some description 3"
    },
    {
        title: 'Rule 4',
        description: "some description 3some description 3some description 3some description 3some description 3some description 3some description 3"
    },
    {
        title: 'Rule 5',
        description: "some description 3some description 3some description 3some description 3some description 3some description 3some description 3"
    },
    {
        title: 'Rule 6',
        description: "some description 3some description 3some description 3some description 3some description 3some description 3some description 3"
    }
];

const Ethics = () => {
    return <div>
        <Layout className = {styles.headingEthics}> Этический кодекс </Layout>
        <List
            dataSource = {data}
            itemLayout="vertical"
            renderItem = { (item) => (
                <List.Item>
                    <Layout className={styles.ethicsItem}>
                        {item.title}
                    </Layout>
                    <Layout className={styles.ethicsItemDescription}>
                        {item.description}
                    </Layout>
                </List.Item>
            )}
        />
    </div>
}

export default Ethics;