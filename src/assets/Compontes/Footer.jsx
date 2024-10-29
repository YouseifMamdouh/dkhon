import React from 'react';
import '../css/Footer.css'; 
import logo from '../imaeags/footer-logo.svg'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section logo-section">
                        <img src={logo} alt="شعار" className="footer-logo" />
                    </div>
                    <div className="footer-section">
                        <h4>تواصل معنا</h4>
                        <p>البريد الإلكتروني: info@example.com</p>
                        <p>الهاتف: +123 456 789</p>
                    </div>
                    <div className="footer-section">
                        <h4>روابط سريعة</h4>
                        <ul>
                            <li><Link to="/">الصفحة الرئيسية</Link></li>
                            <li><Link to="/about">حول</Link></li>
                            <li><Link to="/services">الخدمات</Link></li>
                            <li><Link to="/contact">تواصل معنا</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>تابعنا على</h4>
                        <div className="social-links">
                            <Link to="#" target="_blank" rel="noopener noreferrer">فيسبوك</Link>
                            <Link to="#" target="_blank" rel="noopener noreferrer">تويتر</Link>
                            <Link to="#" target="_blank" rel="noopener noreferrer">إنستغرام</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 جميع الحقوق محفوظة. تصميم بواسطة <Link to="#">اسمك</Link>.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
