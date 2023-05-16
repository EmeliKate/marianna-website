import './App.css';
import Header from "../header/Header"
import React from 'react';
import {Drawer, Anchor} from "antd";
import About from "../about/About";
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../../features/menu/menuSlice";

function App() {

    const {isOpen} = useSelector((store) => store.menu)
    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(toggleMenu())
    }

    return (
    <div className="App">
        <Header />
        <Drawer
            className = "settings"
            placement = "right"
            open = {isOpen}
            onClose = {onClose}
            mask={false}
        >
            <Anchor
                items={[
                    {
                        key: 'about-row',
                        href: '#about-row',
                        title: 'About',
                    },
                    {
                        key: 'education-row',
                        href: '#education-row',
                        title: 'Education',
                    },
                    {
                        key: 'recognition-row',
                        href: '#recognition-row',
                        title: 'Recognition',
                    },
                    {
                        key: 'ethics-row',
                        href: '#ethics-row',
                        title: 'Ethics',
                    },
                    {
                        key: 'theory-row',
                        href: '#theory-row',
                        title: 'Theory',
                    },
                    {
                        key: 'articles-row',
                        href: '#articles-row',
                        title: 'Articles',
                    },
                    {
                        key: 'review-row',
                        href: '#review-row',
                        title: 'Review',
                    },
                    {
                        key: 'contacts-row',
                        href: '#contacts-row',
                        title: 'Contacts',
                    }
                ]}
            >
            </Anchor>
        </Drawer>
        <div
            id="about-row"
        >
            <About />
        </div>
    </div>
  );
}

export default App;
