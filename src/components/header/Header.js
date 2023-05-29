import styles from "./Header.module.scss"
import {Layout, Image} from "antd";
import React from 'react';

const Header = () => {

    return <Layout
        className={styles.header}
    >
        Марианна. Психолог
        <Image
            src = {"../../assets/header_pic.jpg"}
            alt = {"Marianna's photo"}
        >
        </Image>
    </Layout>
}

export default Header;