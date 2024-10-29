// src/components/Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const mockProducts = [
    { id: 1, name: 'عطر 1', price: 100, image: 'path/to/image1.jpg' },
    { id: 2, name: 'عطر 2', price: 200, image: 'path/to/image2.jpg' },
    { id: 3, name: 'عطر 3', price: 150, image: 'path/to/image3.jpg' },
    // أضف المزيد من المنتجات حسب الحاجة
];

function Products() {
    return (
        <div className="container mt-4">
            <h1 className="text-center">جميع المنتجات</h1>
            <div className="row">
                {mockProducts.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">سعر: {product.price} ليرة</p>
                                <Link to={`/product/${product.id}`} className="btn btn-primary">عرض التفاصيل</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
