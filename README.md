# MH-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Diego Pineda

## Ejemplo

````
import { 
  ProductImage, 
  ProductTitle, 
  ProductButtons, 
  ProductCard
} from 'mh-product-card'
````

````
<ProductCard
      product={product}
      initialValues={{
        count: 6,
        maxCount: 10
      }}
    >
      {
        ({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )
      }
    </ProductCard>
````