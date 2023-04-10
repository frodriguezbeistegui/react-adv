import { useContext } from "react"
import { ProductsContext } from './ProductCard';
import styles from '../styles/styles.module.css'
import React from 'react'

interface Props {
    className?: string;
}

export const ProductButtons = ({ className }: Props) => {
    const { increaseBy, counter} = useContext(ProductsContext)

    return (
        <div className={`${styles.buttonsContainer} ${ className }`} >
                <button className={styles.buttonMinus} onClick={()=> increaseBy(-1)}>-</button>
                <div className={styles.countLabel}>{counter}</div>
                <button className={styles.buttonAdd} onClick={()=> increaseBy(+1)}>+</button>
        </div>
    )
}