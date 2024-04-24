import React from 'react'
import styles from "./Layout.module.css"
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { useSelector } from 'react-redux'
// import { useCart } from '../context/CartContext'

function Layout({children}) {
    // const [state] = useCart()
    const state = useSelector((store) => store.cart) 

  return (
    <>
    <header className={styles.header}>
        <Link to="/products"> MH SHOP </Link>
        <Link to="/checkout">
           <div>
           <PiShoppingCartSimpleBold/>
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
           </div>
        </Link>
    </header>
    {children}
    <footer className={styles.footer}></footer>
    </>
  )
}

export default Layout