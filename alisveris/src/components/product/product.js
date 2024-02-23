import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/product/product.css';
import api from "../../helpers/api";

function Product() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Miktar durumu eklendi
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`products/${productId}?populate=*`);
                setProduct(response.data.data);
            } catch (error) {
                console.error("Ürün detayları yüklenirken bir hata oluştu:", error);
            }
        };

        fetchProduct();
    }, [productId]);
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

    if (!product) return <div>Ürün yükleniyor...</div>;
    const totalPrice = product.attributes.price * quantity;

    return (
        <div className='product'>
            <div className='product-img'>
                {product.attributes.image.data.map((imageItem, index) => (
                    <img key={index} src={`http://192.168.202.128:1337${imageItem.attributes.url}`} alt={product.attributes.name}/>
                ))}
            </div>
            <div className='product-detail'>
                <h1>{product.attributes.name}</h1>
                <h3>{product.attributes.price} TL</h3>
                <div className='product-category'>
                    <div>
                        <span>Açıklama :</span>
                    </div>
                    <div>
                        <p>{product.attributes.explantion}</p>
                    </div>
                </div>
                <div className='product-category'>
                    <div>
                        <span>Fiyat :</span>
                    </div>
                    <div>
                        <p>{totalPrice.toFixed(2)} TL</p>
                    </div>
                </div>
                <div className='product-counter'>
                    <button className='product-counter-btn' onClick={decreaseQuantity}>-</button>
                    <p>{quantity}</p>
                    <button className='product-counter-btn' onClick={increaseQuantity}>+</button>
                </div>
                <button className='product-btn'>Sepete Ekle</button>
            </div>
        </div>
    );
}

export default Product;
