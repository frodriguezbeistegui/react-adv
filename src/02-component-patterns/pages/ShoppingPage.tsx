import ProductCardHOC, { ProductButtons, ProductTitle, ProductCard, ProductImg  } from '../ components';

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

      <ProductCard product={product}>
        <ProductImg />
        <ProductTitle />
        <ProductButtons />
      </ProductCard>

      </div>
    </div>
  )
}

export default ShoppingPage