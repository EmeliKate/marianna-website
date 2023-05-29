import styles from "./Ethics.module.scss"
import {List, Layout} from "antd";
import React from 'react';
import data from "../../assets/text/Ethics.json"

const ethicsItems = data.data

const Ethics = () => {
    return <div>
        <Layout className = {styles.headingEthics}> Этический кодекс </Layout>
        <List
            dataSource = {ethicsItems}
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