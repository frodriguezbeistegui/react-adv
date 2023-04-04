import { ProductCard as ProductCardHOC} from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductTitle } from "./ProductTitle";
import { ProductImg } from "./ProductImage";
import { ProductCardHOCProps } from "../interfaces/ productInterfaces";

export { ProductCard } from "./ProductCard";
export { ProductButtons } from "./ProductButtons";
export { ProductImg } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImg,
    Buttons: ProductButtons,
})

export default ProductCard