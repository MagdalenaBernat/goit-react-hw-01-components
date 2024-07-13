import React from 'react'
import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'

const transactions = [
    {
        id: "icihbd",
        type: "Invoice",
        amount: 125.00,
        currency: "USD"
    },
    {
        id: "wlkcb",
        type: "Withdrawal",
        amount: 85.00,
        currency: "USD"
    },
    {
        id: "ljwcn",
        type: "Deposit",
        amount: 103.10,
        currency: "BWP"
    },
    {
        id: "wkwjdn",
        type: "Payment",
        amount: 862.44,
        currency: "AUD"
    },
    {
        id: "widcm",
        type: "Withdrawal",
        amount: 371.43,
        currency: "MUR"
    }
]

export const TransactionHistory = () => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.string
}
