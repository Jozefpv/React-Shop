import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import { useState } from 'react'
import Header from './components/Header'
import {useFilters} from './hooks/useFilters.js'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App() {
  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filterProducts(products)} />
    </CartProvider>
  )
}

export default App
