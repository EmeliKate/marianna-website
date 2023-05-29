import styles from "./About.module.scss"
import {Layout} from "antd";
import React from 'react';
import data from "../../assets/text/About.json"

const About = () => {

    let text = data.data

    return <Layout className = {styles.about}>
        <Layout className = {styles.headingAbout}> {text[0].title} </Layout>
        {text[0].description}
    </Layout>
}

export default About