import React, { useState } from "react";

import Button from "./../Button";
import Item from "./Item";
import { getImg } from "../../../utils/Helper";
import Styles from './Cart.module.scss';
import { slide as HamburgerMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


var styles = {
  bmBurgerButton: {
    position: 'fixed',
    display: 'none',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '425px'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showCart: true
    };
  }

  handleHideCart = () => {
    this.setState({ showCart: false });
  }

  render() {

    return (
      <div className="cart-item" onBlur={() => this.props.handleHideCart()} >
        <HamburgerMenu disableOverlayClick isOpen={this.props.isOpen} right pageWrapId={"page-wrap"} styles={styles}>
          <div className={Styles.container + " menu-item"} >
            <button className={Styles.modal_close} onClick={this.props.handleHideCart}  >
              <img src={getImg('mypage/close.png')} />
            </button>
            <h5>
              Carrinho de Compras
            </h5>
            <div className={Styles.products}>
              <div className={Styles.productscontent}>
                <Item productname="Minecraft - Código Digital" productcount="1" productprice="R$ 99,99" productimage="home/cart/item1.png" />
                <Item productname="Spotify W - Assinatura 3..." productcount="1" productprice="R$ 250,00" productimage="home/cart/item2.png" />
                <Item productname="800 Robux - Roblox" productcount="1" productprice="R$ 80,00" productimage="home/cart/item3.png" />
              </div>
            </div>
            <div className={Styles.total}>
              <p>Total</p>
              <p>R$ 429,99</p>
            </div>
            <div className={Styles.buttoncontent}>
              <Link to='/checkout'><Button buttontext="Finalizar Compra" background="#F15A24" /></Link>
            </div>

          </div>
        </HamburgerMenu>
      </div>
    )
  }
}

export default Cart