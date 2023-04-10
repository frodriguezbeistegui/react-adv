import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { ReactElement, createContext } from 'react';
import { ProductContextProps, Product } from '../interfaces/ productInterfaces';
import { ProductImg } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import React from 'react'

export const ProductsContext = createContext({} as ProductContextProps)
const { Provider } = ProductsContext

export interface Props {
    children?: ReactElement | ReactElement[]
    product: Product;
    className?: string;
}


export const ProductCard = ({ product, children, className }: Props) => {  
    const {counter, increaseBy} = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ `${styles.productCard} ${className}` }>
                    {children}
            </div>
        </Provider>
  
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImg;
ProductCard.Buttons = ProductButtons;