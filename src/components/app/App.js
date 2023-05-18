import './App.module.scss';
import Header from "../header/Header"
import React from 'react';
import {Drawer, Anchor, Button, Layout} from "antd";
import About from "../about/About";
import {useState} from "react";
import styles from "./App.module.scss"
import Education from "../education/Education";
import Recognition from "../recognition/Recognition";
import Ethics from "../ethics/Ethics";

function App() {

    console.log("App mounted")

    const [menuShown, setMenuShown] = useState(true)

    const onClose = () => {
        setMenuShown(prevState => !prevState)
    }

    return <div className={styles.app}>
        <Header />
        {!menuShown && <Button
            className = {styles.contentsBtn}
            onClick = {onClose}
            colorPrimary = {"rgba(0, 0, 0, 0)"}
            colorText = {"rgba(100,0,0,0)"}
        >
            Содержание
        </Button>}
        <Drawer
            title = "Содержание"
            className = {styles.contents}
            placement = "left"
            open = {menuShown}
            onClose = {onClose}
            mask = {false}
            width = "270px"
        >
            <Anchor
                items={[
                    {
                        key: 'about-row',
                        href: '#about-row',
                        title: 'Обо мне',
                    },
                    {
                        key: 'education-row',
                        href: '#education-row',
                        title: 'Образование',
                    },
                    {
                        key: 'recognition-row',
                        href: '#recognition-row',
                        title: "Профессиональное признание",
                    },
                    {
                        key: 'ethics-row',
                        href: '#ethics-row',
                        title: 'Этический кодекс',
                    },
                    {
                        key: 'theory-row',
                        href: '#theory-row',
                        title: 'Транзактный анализ',
                    },
                    {
                        key: 'articles-row',
                        href: '#articles-row',
                        title: 'Статьи',
                    },
                    {
                        key: 'review-row',
                        href: '#review-row',
                        title: 'Отзывы',
                    },
                    {
                        key: 'contacts-row',
                        href: '#contacts-row',
                        title: 'Контакты',
                    }
                ]}
            >
            </Anchor>
        </Drawer>
        <Layout className={menuShown ? styles.mainSection : styles.mainSectionFullScreen}>
            <div
                id = "about-row"
            >
                <About />
            </div>
            <div
                id = "education-row"
            >
                <Education />
            </div>
            <div
                id = "recognition-row"
            >
                <Recognition />
            </div>
            <div
                id = "ethics-row"
            >
                <Ethics />
            </div>
        </Layout>
    </div>
}

export default App;
