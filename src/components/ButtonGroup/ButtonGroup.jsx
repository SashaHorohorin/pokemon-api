import React from 'react';
import styles from './ButtonGroup.module.scss'
import Button from "@/components/ButtonGroup/Button/Button";

const ButtonGroup = ({objPoke, getClickId}) => {
    return (
        <div className={styles.btnGroup}>
            {objPoke.map((poke) => (
                <Button getClickId={(id) => getClickId(id)} key={poke.id} name={poke.name}/>
            ))}
        </div>
    );
};

export default ButtonGroup;