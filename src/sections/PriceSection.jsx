import React from 'react';
import TitleSection from "../components/TitleSection/TitleSection";
import styles from '../styles/PriceSection.module.css'

const PriceSection = () => {
    return (
    <div className={styles.title__wrapper}>
        <TitleSection
            subtitle= 'OUR LATEST OFFERS'
            title = 'Pricing Table'
            text = 'Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etia rmrhoncustema ecenas tempus, tellus eget...'
            bgText = 'PRICES'
        />
    </div>
    );
};

export default PriceSection;