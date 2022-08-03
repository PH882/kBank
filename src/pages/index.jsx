import { useState, useEffect } from 'react';
import { ActionButton } from '../components/ActionButton';
import axios from 'axios';

import styles from "../styles/home.module.scss";
import { Extrato } from '../components/ActionPages/Extrato';
import { api } from '../services/api';

export default function Home() {
  const [ name, setName ] = useState("");
  const [ balance, setBalance ] = useState(530.68);

  useEffect(()=> {
    api.get('/user/informations')
    .then(res => {
      console.log(res);

      setName(res.data.name);
      setBalance(res.data.balance);
    });
  },[])
 
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>k<span>Bank</span></h1>
      </div>
      <div className={styles.content}>
        <h1 className={styles.wellcomeMessage}>Seja bem-vindo, {name}</h1>
        <div className={styles.wrapper}/>
        <div className={styles.fieldBalance}>
          <p>Meu saldo</p>
          <h1>{balance.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h1>
        </div>

        <div className={styles.main}>
          <div className={styles.fieldActionButtons}>
            <ActionButton title="extrato" imageSrc="extrato.svg" />
            <ActionButton title="sacar" imageSrc="sacar.svg" />
            <ActionButton title="depositar" imageSrc="depositar.svg" />
            <ActionButton title="transferir" imageSrc="transferir.svg" />
          </div>

          <Extrato />
        </div>
      </div>
        <div className={styles.footer}>
          <p>copyright © 2022 kBank</p>
        </div>
    </div>
  )
}
