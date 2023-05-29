import styles from "./Reviews.module.scss"
import React from 'react';
import {Layout, List} from "antd";
import data from "../../assets/text/Reviews.json"

const reviews = data.data
const Reviews = () => {
    return <div>
        <Layout className = {styles.reviews}> Отзывы </Layout>
        <List
            dataSource = {reviews}
            itemLayout="vertical"
            renderItem = { (review) => (
                <List.Item>
                    <Layout className={styles.reviewAuthor}>
                        {review.author}
                    </Layout>
                    <Layout className={styles.reviewText}>
                        {review.review}
                    </Layout>
                </List.Item>
            )}
        />
    </div>
}

export default Reviews;