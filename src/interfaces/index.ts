import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonProps } from "../components/ProductButtons";

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  product: Product
  counter: number
  maxCount?: number
  increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element,
  Title: (props: ProductTitleProps) => JSX.Element
  Image: (props: ProductImageProps) => JSX.Element
  Buttons: (props: ProductButtonProps) => JSX.Element
}

export interface onChangeArgs {
  product: Product,
  count: number
}

export interface ProductInCart extends Product {
  count: number
}

export interface InitialValues {
  count?: number
  maxCount?: number
}

export interface ProductCardHandlers {
  count?: number
  maxCount?: number
  isMaxCountReached: boolean
  product: Product,

  increaseBy: (value: number) => void
  reset: () => void
}