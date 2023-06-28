import './App.module.scss';
import Header from "../header/Header"
import React from 'react';
import {Drawer, Anchor, Button, Layout, List} from "antd";
import About from "../about/About";
import {useState} from "react";
import styles from "./App.module.scss"
import Education from "../education/Education";
import Recognition from "../recognition/Recognition";
import Ethics from "../ethics/Ethics";
import Articles from "../articles/Articles";
import Reviews from "../reviews/Reviews";
import Contacts from "../contacts/Contacts";
import Theory from "../theory/Theory";

function App() {

    console.log("App mounted")

    const [menuShown, setMenuShown] = useState(true)

    const onClose = () => {
        setMenuShown(prevState => !prevState)
    }

    let componentList = [
        {
            key: 'about-row',
            href: '#about-row',
            title: 'Обо мне',
            item: <About />
        },
        {
            key: 'education-row',
            href: '#education-row',
            title: 'Образование',
            item: <Education />
        },
        {
            key: 'recognition-row',
            href: '#recognition-row',
            title: "Профессиональное признание",
            item: <Recognition />
        },
        {
            key: 'ethics-row',
            href: '#ethics-row',
            title: 'Этический кодекс',
            item: <Ethics />
        },
        {
            key: 'theory-row',
            href: '#theory-row',
            title: 'Транзактный анализ',
            item: <Theory />
        },
        {
            key: 'articles-row',
            href: '#articles-row',
            title: 'Статьи',
            item: <Articles />
        },
        {
            key: 'review-row',
            href: '#review-row',
            title: 'Отзывы',
            item: <Reviews />
        },
        {
            key: 'contacts-row',
            href: '#contacts-row',
            title: 'Контакты',
            item: <Contacts />
        }
    ]

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
            style = {{ backgroundColor: "rgb(15, 63, 39)" }}
            bodyStyle = {{ backgroundColor: "white" }}
        >
            <Anchor
                items={componentList}
            >
            </Anchor>
        </Drawer>
        <Layout className={menuShown ? styles.mainSection : styles.mainSectionFullScreen}>
            <List
                dataSource = {componentList}
                itemLayout="vertical"
                renderItem = { (componentItem) => (
                    <List.Item>
                        <div
                            id = {componentItem.key}
                        >
                            {componentItem.item}
                        </div>
                    </List.Item>
                )}
            />
        </Layout>
    </div>
}

export default App;
