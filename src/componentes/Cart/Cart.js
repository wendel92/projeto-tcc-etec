import { useSelector } from 'react-redux'
import Card from './Card'
import classes from '../Cart/Cart.module.css'
import CartItem from '../Cart/CartItem'

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Carrinho em desenvolvimento!!</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  )
}

export default Cart
