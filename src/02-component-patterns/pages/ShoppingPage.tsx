
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";


import "../styles/custom-styles.css";

export const ShoppingPage = () => {

   const product = products[0];

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      
       
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            initialValues={{
              count: 4,
              maxCount: 10
            }}
          >
            {
              ()=>(
                <>
                <ProductImage className="custom-image" />
                <ProductTitle className="text-white" />
                <ProductButtons className="custom-buttons" />
                
                </>
              )
            }
          </ProductCard>
        
        {/* muestra el producto al lado , si hay productos definidos */}
      
      </div>
  
  );
}
