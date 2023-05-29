import styles from "./Education.module.scss"
import {List, Layout} from "antd";
import React from 'react';
import data from "../../assets/text/Education.json"

const educationItems = data.data;
const Education = () => {
    return <div>
        <Layout className = {styles.headingEducation}> Образование </Layout>
        <List
            dataSource = {educationItems}
            itemLayout="vertical"
            renderItem = { (item) => (
                <List.Item>
                    <Layout className={styles.educationItem}>
                        {item.title}
                    </Layout>
                    <Layout className={styles.educationItemDescription}>
                        {item.description}
                    </Layout>
                </List.Item>
            )}
        />
    </div>
}

export default Education;