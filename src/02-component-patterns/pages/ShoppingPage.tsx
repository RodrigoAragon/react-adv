import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

const product = products[0]

export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart()

  return (
    <div>
        <h1>Shopping Page</h1>
        <hr/>
          <ProductCard 
            key={product.id}
            product={product}
            className = "bg-dark"
            initialValues = {{
              count:4,
              maxCount:10
            }}
          >
            {
              ({reset, isMaxCountReached, increase, count}) =>(
                <>
                  <ProductImage className="custom-image" style={{ boxShadow:'10px 10px 10px rgba(0,0,0,0.2)' }}/>
                  <ProductTitle className="text-white text-bold"/>
                  <ProductButtons className="custom-buttons"/>
                  <button onClick={reset}>Reset</button>

                  <button onClick={() => increase(-2)}>-2</button>
                  {/*Si no se llega al maxCount, mostrar, sino ocultar*/}
                  <button onClick={() => increase(+2)} hidden={isMaxCountReached}>+2</button>

                  <span>{count}</span>
                  
                </>
              )
            }

            
          </ProductCard>
    </div>
  )
}
