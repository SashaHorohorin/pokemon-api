'use client'
import React, {useContext} from 'react';
import styles from './Button.module.scss'


const Button = ({name, getClickId}) => {

    return (
        <button onClick={() => getClickId(name)} className={styles.btn}>{name}</button>
    );
};

export default Button;