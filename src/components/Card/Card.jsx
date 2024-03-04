import React from 'react';
import styles from './Card.module.scss'
import Image from "next/image";

const Card = ({poke}) => {

    const findStatAttack = (stats) => {
        let objAttack = stats?.find(stat => stat.stat.name === 'attack');
        return objAttack?.base_stat;
    }
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{poke?.name}</h2>
            <div className={styles.images}>
                <Image src={poke?.sprites?.front_default} alt='packemon' width={200} height={200}/>
            </div>

            <ul className={styles.info}>
                <li className={styles.text}>Снялся в {poke?.weight} сериях</li>
                <li className={styles.text}>Id: {poke?.id}</li>
                <li className={styles.text}>height: {poke?.height}</li>
                <li className={styles.text}>attack: {findStatAttack(poke?.stats)}</li>
            </ul>
        </div>
    );
};

export default Card;