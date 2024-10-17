import React, { useContext } from 'react'
import NavBar from '../Components/NavBar'
import { MyContext } from '../App';

function Cart() {
  const {item, setItem} = useContext(MyContext);

  const totalPrice = item.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);

  return (
    <div>
      <NavBar />
      <div className='cartTitle'>Your Cart Items</div>
      <div className='CartItems'>
        {item.length === 0 ? (<div>Your Cart is empty...</div>):
        (item.map ((cartItem) =>(
          <div key={cartItem.id}>
            <img src={cartItem.pictureUrl} alt='AstianTriditions' className='pictures'></img>
            <div>{cartItem.name}</div>
            <div>${cartItem.price}</div>
            <div>Quantity: {cartItem.quantity}</div>
              <button className='button'
                onClick={() => {
                  // Remove item from cart if quantity is 1, otherwise decrease quantity
                  setItem((prevItems) =>
                    cartItem.quantity > 1
                      ? prevItems.map((item) =>
                          item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
                        )
                      : prevItems.filter((item) => item.id !== cartItem.id)
                  );
                }}
              >
                Remove from cart
              </button>
            </div>
          ))
        )}
      </div>
      {item.length > 0 && (
        <div className='cartTitle'>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  )
}

export default Cart
