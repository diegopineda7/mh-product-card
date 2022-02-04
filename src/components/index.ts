import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductButtons from './ProductButtons';
import ProductCardHOC from './ProductCard';
import { ProductCardHOCProps } from '../interfaces';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

const useComponents = () => {
  return {
    ProductImage,
    ProductTitle,
    ProductButtons,
    ProductCard
  }
}

export default useComponents