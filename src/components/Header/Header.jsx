import React from 'react';
import styles from './Header.module.scss'
import Logo from "@/components/Header/Logo/Logo";
import Info from "@/components/Header/Info/Info";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <Info/>
        </header>
    );
};

export default Header;