import { useContext } from "react";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

 export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img  , className , style } : ProductImageProps) => {

    const { product} = useContext(ProductContext);

    let imgShow : string ;

    if(img){
        imgShow = img;
    }else if(product.img){
        imgShow = product.img;
    }else{
        imgShow = noImage;
    }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={styles}
      src={imgShow}
      alt="Product"
    />
  );
};