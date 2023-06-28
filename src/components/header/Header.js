import styles from "./Header.module.scss"
import {Layout, Image} from "antd";
import React from 'react';
import photo from "../../assets/images/header_pic.jpg"

const Header = () => {

    return <Layout
        className={styles.header}
    >
        Марианна. Психолог
        <div className={styles.image}>
            <Image
                src = {photo}
                alt = {"Marianna's photo"}
                style={{ width: "20vw" }}
            >
            </Image>
        </div>
    </Layout>
}

export default Header;