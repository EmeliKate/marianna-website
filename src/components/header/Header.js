import styles from "./Header.module.scss"
import {Layout, Image} from "antd";
import React from 'react';

const Header = () => {

    return <Layout
        className={styles.header}
    >
        test test test test test test test test test
        <Image
            src={"../../assets/header_pic.jpg"}
            alt={"Marianna's photo"}
        >
        </Image>
    </Layout>
}

export default Header;