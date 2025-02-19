import { createContext, CSSProperties, ReactElement } from "react";
import { onChangeArgs, Product, ProductContextProps } from "../interfaces/Products.interfaces";
import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css"

export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext


export interface Props{
  children?: ReactElement | ReactElement[]
  className?: string
  product: Product
  style?: CSSProperties
  onChange?: (args:onChangeArgs) => void
  value?: number
}


export const ProductCard = ({children, product, className, style, onChange, value}:Props) => {

  const {counter, increase} =  useProduct({onChange, product, value});

  return (
    <Provider 
      value={{
        counter,
        increase,
        product
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>

      {children}

      </div>
    </Provider>
    
  )
}