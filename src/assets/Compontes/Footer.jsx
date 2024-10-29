import React from 'react';
import '../css/Footer.css'; 
import logo from '../imaeags/footer-logo.svg'; 

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
                            <li><a href="#">الصفحة الرئيسية</a></li>
                            <li><a href="#">حول</a></li>
                            <li><a href="#">الخدمات</a></li>
                            <li><a href="#">تواصل معنا</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>تابعنا على</h4>
                        <div className="social-links">
                            <a href="#" target="_blank" rel="noopener noreferrer">فيسبوك</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">تويتر</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">إنستغرام</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 جميع الحقوق محفوظة. تصميم بواسطة <a href="#">اسمك</a>.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
