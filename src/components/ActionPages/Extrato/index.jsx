import { TransactionField } from "../../TransactionField";
import styles from "./styles.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

function Extrato () {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/transactions/list')
    .then(res => {
    	setTransactions(res.data)
    })
  }, [])

  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Extrato</h1>

      <div className={styles.fieldTransatrions}>
        {transactions.map((transaction, index) => {
          return (
            <TransactionField key={index} date={transaction.date} value={transaction.value} isDeposit={transaction.isDeposit} />
          )
        })}
      </div>
    </div>
  )
}

export {Extrato};
