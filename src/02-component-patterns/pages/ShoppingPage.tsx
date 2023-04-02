import { ProductCard } from '../ components/ProductCard';

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
      <ProductCard product={product}/>

      </div>
    </div>
  )
}

export default ShoppingPage