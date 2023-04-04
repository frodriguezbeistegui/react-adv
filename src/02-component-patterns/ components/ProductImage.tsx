import { useContext } from "react";
import { ProductsContext } from "./ProductCard";

import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'


export const ProductImg = ({ img = '' }) => {
    const { product } = useContext(ProductsContext)

    let imgToShow: string;
    if( img ) {
        imgToShow = img;
    } else if (product.img){
        imgToShow = product.img
    }else {
        imgToShow = noImg
    }

    return (
        <img className={styles.productImg} src={imgToShow} alt={'Product img'} />
    )
}