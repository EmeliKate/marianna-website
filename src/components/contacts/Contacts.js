import styles from "./Contacts.module.scss"
import React from 'react';
import {Layout, List} from "antd";
import data from "../../assets/text/Contacts.json"

const contacts = data.data

const Contacts = () => {
    return <div>
        <Layout className = {styles.contacts}> Контакты </Layout>
        <List
            dataSource = {contacts}
            itemLayout="vertical"
            renderItem = { (contact) => (
                <List.Item>
                    <Layout className={styles.contactItem}>
                        {contact.title}
                    </Layout>
                    <Layout className={styles.contactItemDescription}>
                        {contact.description}
                    </Layout>
                </List.Item>
            )}
        />
    </div>
}

export default Contacts;