import React from 'react'
import { useContext } from "react"
import { ProductsContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

interface Props { 
  className?: string
  title?: string,
}

export const ProductTitle = ({ title, className }: Props ) => {
    const { product } = useContext(ProductsContext)

    return (
        <span className={ `${styles.productDescription} ${className}`}>{ title ? title : product.title }</span>
    )
}