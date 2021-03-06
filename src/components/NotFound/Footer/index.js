import React from "react";

import { getImg } from "../../../utils/Helper";

import styles from './Footer.module.scss';
// import { Button } from "../Button";

export const Footer = (props) => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.div}>
                    <div className={styles.footerbar}>
                        <ul>
                            <li>Siga a gente!</li>
                            <li>
                                <a className={styles.icon_instagram} href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a className={styles.icon_twitter} href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a className={styles.icon_facebook} href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.clearfix }></div>
                </div>
            </div>
        </footer>
    )
}

