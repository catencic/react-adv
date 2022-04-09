


import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
import { PropsButtonProps } from "../components/ProductButtons";
import { PropsProductCard } from "../components/ProductCard";


  
  export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
  export interface ProductContextProps {
      counter: number;
      increaseBy: (value: number)=> void;
      product: Product;
  }

  export interface ProductCardHOCProps {
    ({ children, product }: PropsProductCard) : JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props : ProductImageProps ) => JSX.Element,
    Buttons: (Props : PropsButtonProps) => JSX.Element
    
  }