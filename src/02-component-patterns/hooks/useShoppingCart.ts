import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/Products.interfaces";

export const useShoppingCart = () =>{

    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({})

    const onProductCountChange = ({count, product}: {count:number, product:Product}) =>{
            // console.log('onProductCountChange', count, product)

            setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count; ///Si suma dos veces es por culpa del stricMode
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest  } = oldShoppingCart;
            return rest;

        })
    }

    return{
        shoppingCart,
        onProductCountChange
    }

}