import styles from "./About.module.scss"
import {Layout} from "antd";
import React from 'react';

const About = () => {
    return <Layout className = {styles.about}>
        <Layout className = {styles.headingAbout}> Обо мне </Layout>
        some text some text some text some text some text some text some text some text some text
        some text some text some text some text some text some text some text some text some text
        some text some text some text some text some text some text some text some text some text
        some text some text some text some text some text some text some text some text some text

        some text some text some text some text some text some text some text some text some text
        some text some text some text some text some text some text some text some text some text
        some text some text some text some text some text some text some text some text some text
        some text some text some text some text some text some text some text some text some text
        some text some text some text some text some text some text some text some text some text
        some text some text some text some text some text some text some text some text some text
    </Layout>
}

export default About