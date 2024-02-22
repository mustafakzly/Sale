import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import api from "../../helpers/api";
import "../../styles/store/store.css";

function ProductApi() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get(`products?filters[category][id][$eq]=${categoryId}&populate=*`);
      setProducts(response.data.data);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="store">
      {products.map((item, index) => (
        <div key={index} className="store-item">
          {item?.attributes?.image?.data.map((imagesItem, imagesIndex) => (
            <div key={imagesIndex}>
              <img
                src={
                  "http://192.168.202.128:1337" + imagesItem?.attributes?.url
                }
                alt={item?.attributes?.name}
              />
            </div>
          ))}
          <h3>{item?.attributes?.name}</h3>
          <p>{item?.attributes?.price} TL</p>
          <button>SEPETE EKLE</button>
        </div>
      ))}
    </div>
  );
}

export default ProductApi;
