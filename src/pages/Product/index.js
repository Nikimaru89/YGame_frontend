import React, { useState, useRef } from "react";

import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import { getImg } from "../../utils/Helper";
import Styles from './Product.module.scss';
import ProductItem from "../../components/ProductItem";
import Cart from "../../components/Home/Cart";
import { useDetectOutsideClick } from "../../hook/useCustomHook";


function Product() {
	const containRef = useRef(null);
	const [isActive, setIsActive] = useDetectOutsideClick(containRef, false);
	const [pageno, setPageNo] = useState(0);
	const [showcart, setShowCart] = useState(false);
	const myItems = [
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' }
	];
	const selectPage = (no) => {
		setPageNo(no)
	}


	const handleShowCart = () => {
		setShowCart((showcart === true) ? false : true);
	}

	const handleHideCart = () => {
		setShowCart(false);
	}

	return (
		<div className={Styles.product_page} >
			<Cart onClick={() => setIsActive(!isActive)} ref={containRef} isOpen={showcart} handleShowCart={() => handleShowCart()} handleHideCart={() => handleHideCart()} />
			<div className={Styles.container}>
				<Header handleShowCart={() => handleShowCart()} />
				{/* <Header /> */}
				<div className={Styles.product_detail_container}>
					<div className={Styles.product_detail_wrap}>
						<div className={Styles.product_title}>Playstation Plus 12 meses - Assinatura Digital</div>
						<img src={getImg('product/product_large.png')} alt="" />
						<div className={Styles.product_detail_content}>
							<div className={Styles.icon_group}>
								<img src={getImg('product/icon1.png')} alt="" />
								<img src={getImg('product/icon2.png')} alt="" />
							</div>
							<div className={Styles.time_wrap}>
								{/* <button>-5%</button> */}
								<div className={Styles.time_per}>-5%</div>
								<div>
									<span>Acaba em:</span>
									<span>00D / 13:24:32</span>
								</div>
							</div>
							<div className={Styles.product_price}>
								R$ 47,50
							</div>
							<button className={Styles.btn_purchase}>Comprar</button>
							<div className={Styles.btn_group}>
								<button><i class="fa fa-heart"></i> Desejo</button>
								<button><i class="fa fa-reply"></i> Compartilhar</button>
							</div>
							<div className={Styles.footer_text}>
								Sua compra est?? segura conosco.
								Para saber mais sobre n??s, <a href="#">clique aqui!</a>
							</div>
						</div>
					</div>
					<div className={Styles.explain_wrap}>
						<dl>
							<dt>
								<span className={pageno == 0 ? Styles.active : ''} onClick={() => selectPage(0)}>Detalhes</span>
								<span className={pageno == 1 ? Styles.active : ''} onClick={() => selectPage(1)}>Como Resgatar</span>
							</dt>
							<dd>
								{pageno == 0 && <div>
									<p>Os cart??es-presente da PlayStation Store s??o uma alternativa simples e r??pida para
										recarregar sua conta PSN com cr??dito sem um cart??o de cr??dito!
									</p>
									<p>Sempre o presente perfeito ??? O cr??dito PSN pode ser comprado e doado sem uma contaPSN.</p>
									<p>Compre e resgate em alguns minutos ??? ap??s concluir a compra voc?? receber?? um e-mailcom seu c??digo!</p>
									<p>Use o cr??dito PSN para compre ofertas exclusivas na PSN Store!</p>
								</div>}
								{pageno == 1 && <div>
									<p>Para usar seu c??digo PlayStation Network, siga as instru????es abaixo:</p>
									<div className={Styles.explain_detail_wrap}>
										<p>- V?? para??<a href="http://www.SonyEntertainmentNetwork.com">http://www.SonyEntertainmentNetwork.com</a></p>
										<p>- Clique em ???Gerir conta??? e fa??a login com suas informa????es de login e senha</p>
										<p>- Clique em ???Usar o cart??o pr??-pago???</p>
										<p>- Introduza o c??digo impresso no vale ou no cart??o PlayStation Network e clique em ???Continuar???</p>
										<p>- Se o c??digo estiver correto, ver?? uma descri????o do produto ou servi??o associado ao c??digo</p>
										<p>- Clique em ???Utilizar??? para adicionar o produto ou fundos a sua conta</p>
									</div>
								</div>}
							</dd>
						</dl>
					</div>
					<div className={Styles.product_recommend_wrap}>
						<div className={Styles.caption}>
							Produtos recomendados
						</div>
						<div className={Styles.product_recommend_list}>
							{myItems.map((items) => (
								<ProductItem item={items} />
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Product;
