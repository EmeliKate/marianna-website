import styles from "./Articles.module.scss"
import {List, Layout} from "antd";
import React from 'react';
import data from "../../assets/text/Articles.json"

const articles = data.data;

const Articles = () => {
    return <div>
        <Layout className = {styles.headingArticles}> Статьи </Layout>
        <List
            dataSource = {articles}
            itemLayout="vertical"
            renderItem = { (article) => (
                <List.Item>
                    <Layout className={styles.articlesItem}>
                        {article.title}
                    </Layout>
                    <Layout className={styles.articlesItemDescription}>
                        {article.description}
                    </Layout>
                </List.Item>
            )}
        />
    </div>
}

export default Articles;