import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import '../css/Header.css';
import logo from '../imaeags/logo.svg';

function Header() {
    const [quantity, setQuantity] = useState(1);
    const [isProductSelected, setIsProductSelected] = useState(false);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const selectProduct = () => {
        setIsProductSelected(true);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container d-flex align-items-center justify-content-between">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={logo} alt="Logo" style={{ height: '40px' }} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/search">
                                    <i className="fa fa-search"></i> البحث
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products" onClick={selectProduct}>
                                    <i className="fa fa-th-large"></i> جميع المنتجات
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/perfumes" onClick={selectProduct}>
                                    <i className="fa fa-wine-bottle"></i> العطور
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/women-perfumes" onClick={selectProduct}>
                                    <i className="fa fa-female"></i> عطور النساء
                                </Link>
                            </li>
                        </ul>

                        <form className="d-flex align-items-center" role="search">
                            <button
                                className="btn btn-outline no-border"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                                aria-label="Toggle navigation"
                            >
                                <i className="fa fa-shopping-cart" style={{ color: '#474747' }}></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={logo} alt="Logo" style={{ height: '40px' }} />
                    </Link>
                </div>

                <div className="offcanvas-body">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/search">
                                <i className="fa fa-search"></i> البحث
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">المنتجات</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/perfumes" onClick={selectProduct}>
                                <i className="fa fa-wine-bottle"></i> العطور
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/women-perfumes" onClick={selectProduct}>
                                <i className="fa fa-female"></i> عطور النساء
                            </Link>
                        </li>
                    </ul>

                    {isProductSelected && (
                        <>
                            <h5 className="mt-4 text-center">السلة</h5>
                            <div className="quantity-container d-flex align-items-center">
                                <button className="quantity-button" aria-label="Decrease quantity" onClick={decreaseQuantity}>-</button>
                                <input
                                    type="number"
                                    className="quantity-input"
                                    value={quantity}
                                    readOnly
                                />
                                <button className="quantity-button" aria-label="Increase quantity" onClick={increaseQuantity}>+</button>
                            </div>

                            <div className="action-buttons mt-3 d-flex justify-content-between">
                                <button className="btn btn-success" onClick={() => alert('شراء الآن!')}>
                                    شراء
                                </button>
                                <button className="btn btn-info" onClick={() => alert('فتح المنيو!')}>
                                    منيو
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Header;
