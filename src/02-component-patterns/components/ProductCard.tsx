import { createContext } from "react";
import { ProductCardProps, ProductContextProps } from "../interfaces/Products.interfaces";
import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css"

export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext


export const ProductCard = ({children, product}:ProductCardProps) => {

  const {counter, increase} =  useProduct();

  return (
    <Provider 
      value={{
        counter,
        increase,
        product
      }}
    >
      <div className={styles.productCard}>

      {children}

      </div>
    </Provider>
    
  )
}