import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";
import { InitialValues, onChangeArg, Product, ProductContextProps } from "../interfaces/interfaces";




export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext;


export interface PropsProductCard {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: ()=> ReactElement;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArg) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({ children , product , className , style , onChange , value , initialValues}: PropsProductCard) => {
  const { counter, increaseBy , maxCount} = useProduct( {onChange , product, value, initialValues} );
 
 
   
  

  return (
      <Provider  value={{
          counter,
          increaseBy,
          product,
          maxCount
         
      }}>

    <div className={`${styles.productCard} ${className}`}
         style={style}
    >
        {children() }
        
     {/*  <ProductImage img={product.img}/>

<ProductTitle title={product.title}/>

<ProductButtons counter={counter} increaseBy={increaseBy} /> */}

     
    </div>
</Provider>
  )
}


