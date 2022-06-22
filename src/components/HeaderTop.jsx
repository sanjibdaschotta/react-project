import React from 'react'



export const HeaderTop = () => (

         <div className="header-top">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Begin Header Top Left Area --> */}
                            <div className="col-lg-3 col-md-4">
                                <div className="header-top-left">
                                    <ul className="phone-wrap">
                                        <li><span>Telephone Enquiry:</span>(+123) 123 321 345</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Header Top Left Area End Here -->
                            <!-- Begin Header Top Right Area --> */}
                            <div className="col-lg-9 col-md-8">
                                <div className="header-top-right">
                                    <ul className="ht-menu">
                                        {/* <!-- Begin Setting Area --> */}
                                        <li>
                                            <div className="ht-setting-trigger"><span>Setting</span></div>
                                            <div className="setting ht-setting">
                                                <ul className="ht-setting-list">
                                                    <li>My Account</li>
                                                    <li>Checkout</li>
                                                    <li>Sign In</li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Setting Area End Here -->
                                        <!-- Begin Currency Area --> */}
                                        <li>
                                            <span className="currency-selector-wrapper">Currency :</span>
                                            <div className="ht-currency-trigger"><span>USD $</span></div>
                                            <div className="currency ht-currency">
                                                <ul className="ht-setting-list">
                                                    <li>EUR €</li>
                                                    <li className="active">USD $</li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Currency Area End Here -->
                                        <!-- Begin Language Area --> */}
                                        <li>
                                            <span className="language-selector-wrapper">Language :</span>
                                            <div className="ht-language-trigger"><span>English</span></div>
                                            <div className="language ht-language">
                                                <ul className="ht-setting-list">
                                                    <li className="active"><img src="images/menu/flag-icon/1.jpg" alt=""/></li>
                                                    <li><img src="images/menu/flag-icon/2.jpg" alt=""/>Français</li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Language Area End Here --> */}
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Header Top Right Area End Here --> */}
                        </div>
                    </div>
                </div>
    
    
  );


