

const CartItem = ({cartItem}) => {
    console.log(cartItem)
    
return(<div>
        <p> {cartItem.quantity}  portion(s)</p> 
    </div>)
}

export default CartItem;