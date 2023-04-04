import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/ productInterfaces';
import { ProductImg } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

export const ProductsContext = createContext({} as ProductContextProps)
const { Provider } = ProductsContext



export const ProductCard = ({ product, children }: ProductCardProps) => {  
    const {counter, increaseBy} = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard } >
                    {children}
            </div>
        </Provider>
  
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImg;
ProductCard.Buttons = ProductButtons;