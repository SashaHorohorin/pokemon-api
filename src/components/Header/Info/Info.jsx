import React from 'react';
import styles from './Info.module.scss'
import Image from "next/image";

const Info = () => {
    return (
        <div className={styles.info}>
            <Image src='/Icon.svg' alt='click-icon' width={25} height={31}/>
            <p className={styles.text}>Нажмите на
                нужного Покемона</p>
        </div>
    );
};

export default Info;