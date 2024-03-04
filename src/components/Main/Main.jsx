'use client'
import React, {useEffect, useState} from 'react';
import styles from "@/app/page.module.scss";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import Card from "@/components/Card/Card";

const Main = ({objPoke}) => {
    const [poke, setPoke] = useState(objPoke[0]);

    const getClickId = (id) => {
        let findObj = objPoke.find(poke => poke.name === id);
        setPoke(findObj)
    }


    return (
        <main className={styles.main}>
            <ButtonGroup getClickId={(id) => getClickId(id)} objPoke={objPoke}/>
            <Card poke={poke}/>
        </main>
    );
};

export default Main;