import { Link } from "react-router-dom"
import {TbListDetails, TbShoppingBagCheck} from "react-icons/tb"
import {shortenText, productQuantity} from "../helpers/helper"
import styles from "./Card.module.css"
// import { useCart } from "../context/CartContext"
import { MdDeleteOutline} from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { addItem, increase, decrease, removeItem } from "../features/cart/cartSlice"

function Cards({data}) {
    const {id, title, image, price} = data

    const state = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    const quantity = productQuantity(state, id)


    // const [state, dispatch] = useCart()
    

    // const quantity = 0
    
    // const clickHandler = (type) => {
    //     // dispatch({type , payload: data})
    // }
    // console.log(state)



  return (
    <div className={styles.card}>
        <img src={image} style={{width: "150px"}}/>
        <h3>{shortenText(title)}</h3>
        <p>{price}$</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}>
                <TbListDetails/>
            </Link>
            <div className={styles.bio}>
                {quantity === 1 && (
                    <button onClick={() => dispatch(removeItem(data))}><MdDeleteOutline/></button>
                )}


                {quantity > 1 && (
                    <button onClick={() => dispatch(decrease(data))}>-</button>
                )}

                {!!quantity && <span>{quantity}</span>}

                {quantity === 0 ? (
                    <button onClick={() => dispatch(addItem(data))}><TbShoppingBagCheck/></button>
                ) : 
                    <button onClick={() => dispatch(increase(data))}>+</button>
                }


            </div>
        </div>
    </div>
  )
}

export default Cards