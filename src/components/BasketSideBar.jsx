import { TbChecklist } from "react-icons/tb"
import { FaHashtag } from "react-icons/fa6"
import { BsPatchCheck } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { checkout } from "../features/cart/cartSlice"
import styles from "./BasketSideBar.module.css"


function BasketSideBar({state}) {

  const dispath = useDispatch()

  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist/>
        <p>Total:</p>
        <span>{state.total}$</span>
      </div>

      <div>
        <FaHashtag/>
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>

      <div>
        <BsPatchCheck/>
        <p>status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => dispath(checkout(state))}>checkout</button>
    </div>
  )
}

export default BasketSideBar