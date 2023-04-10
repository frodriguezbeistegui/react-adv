import React from 'react'
import ProductCardHOC, { ProductButtons, ProductTitle, ProductCard, ProductImg  } from '../ components';
import '../styles/custom-styles.css'
type Props = {}

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = (props: Props) => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      <ProductCardHOC product={product}>
          <ProductCardHOC.Image />     
          <ProductCardHOC.Title title={'Cafe'} />
          <ProductCardHOC.Buttons />
      </ProductCardHOC>

      <ProductCard product={product} className="bg-dark" >
        <ProductImg className='custom-image'/>
        <ProductTitle className='text-white text-bold' />
        <ProductButtons className='custom-buttons' />
      </ProductCard>

      </div>
    </div>
  )
}

export default ShoppingPage