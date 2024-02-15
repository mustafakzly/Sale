import '../../styles/product/product.css';

function Product() {
    return ( 
        <div className='product'>
            <div className='product-img'>
                <img src='https://ideacdn.net/idea/ed/42/myassets/products/269/masa_min.jpeg?revision=1697143329' alt=''/>
            </div>
            <div className='product-detail'>
                <h1>Ürün ismi</h1>
                <h3><strike>999999 TL</strike> 55555TL</h3>
                <div className='product-category'>
                    <div>
                        <span>Kategori :</span>
                    </div>
                    <div>
                        <p>Masa</p>
                    </div>
                </div>
                <div className='product-category'>
                    <div>
                        <span>Stok Kodu :</span>
                    </div>
                    <div>
                        <p>18267389124</p>
                    </div>
                </div>
                <div className='product-category'>
                    <div>
                        <span>Fiyat :</span>
                    </div>
                    <div>
                        <p>55555 TL</p>
                    </div>
                </div>
                <div className='product-counter'>
                    <button className='product-counter-btn'>-</button>
                    <p>0</p>
                    <button className='product-counter-btn'>+</button>
                </div>
                <button className='product-btn'>Sepete Ekle</button>
            </div>
            
        </div>
     );
}

export default Product;
