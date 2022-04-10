import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";





export const useShoppingCart = () => {
  

      /* 
asi luce el shoping state
    '1': {...product1 , count: 10},
    '2': {...product2 , count: 2}, */

  /* el tipado del useState [key: string] significa que van a ser varias key de tipo
    string y el valor va a ser un objeto de tipo ProductCard */
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({count,product}: { count: number ,product: Product}) => {
    setShoppingCart((oldShoppingCart) => {
      // si existe un product ese voy a tomar, si no creo el objeto
    /*   const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      } */

      // si no entra al if anterior hay que eliminar el producto, porque el count llego a 0

      /* const { [product.id]: toDelete, ...rest } = oldShoppingCart;

      return rest; */

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;

        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
}

  return {
 
    shoppingCart,
    onProductCountChange
    
  }
}
