import styles from'./styles.module.scss'

export function TransactionField({value, date, isDeposit}) {
	const transactionType = isDeposit ? "Depósito" : "Saque";

	return(
		<div className={styles.container}>
			<p style={isDeposit ? { color: "#5eae2c" } : { color: "#d34e4e" }} className={styles.value}>
				{value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
			</p>
			<p className={styles.descripition}>{transactionType} realizado em {date}</p>
		</div>
	)
}
