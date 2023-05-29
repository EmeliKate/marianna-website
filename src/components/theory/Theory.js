import styles from "./Theory.module.scss"
import React from 'react';
import data from "../../assets/text/Theory.json"
import {Layout, List} from "antd";

const theory = data.data

const Theory = () => {
    return <div>
        <Layout className = {styles.theory}> Транзактный Анализ </Layout>
        <List
            dataSource = {theory}
            itemLayout="vertical"
            renderItem = { (article) => (
                <List.Item>
                    <Layout className={styles.sectionTitle}>
                        {article.title}
                    </Layout>
                    <Layout className={styles.section}>
                        {article.description}
                    </Layout>
                </List.Item>
            )}
        />
    </div>
}

export default Theory;