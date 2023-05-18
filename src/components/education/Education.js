import styles from "./Education.module.scss"
import {List, Layout} from "antd";
import React from 'react';

const data = [
    {
        title: 'Qualification 1',
        description: "some description 1 some description 1 some description 1 some description 1 some description 1 some description 1 some description 1"
    },
    {
        title: 'Qualification 2',
        description: "some description 2some description 2some description 2some description 2 some description 2"
    },
    {
        title: 'Qualification 3',
        description: "some description 3some description 3some description 3some description 3some description 3some description 3some description 3"
    }
];

const Education = () => {
    return <div>
        <Layout className = {styles.headingEducation}> Образование </Layout>
        <List
            dataSource = {data}
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