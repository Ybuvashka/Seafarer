import React from 'react';
import styles from '../../styles/TitleSection.module.css'
const TitleSection = (props) => {
    const {subtitle, title, text, bgText} = props

    return (
        <div className={styles.section__title}>
            {bgText
                ? <span className={styles.bgText}>{bgText}</span>
                : ''
            }
            <h6 className={styles.subtitle}>{subtitle}</h6>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default TitleSection;