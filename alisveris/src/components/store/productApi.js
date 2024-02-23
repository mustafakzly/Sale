import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import api from "../../helpers/api";
import "../../styles/store/store.css";

function ProductApi() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0); // Toplam ürün sayısını tutacak yeni state
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const limit = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      const start = (currentPage - 1) * limit;
      const response = await api.get(`products?filters[category][id][$eq]=${categoryId}&populate=*&pagination[start]=${start}&pagination[limit]=${limit}`);
      setProducts(response.data.data);
      setTotalProducts(response.data.meta.pagination.total); // Toplam ürün sayısını güncelle
    };

    fetchProducts();
  }, [categoryId, currentPage]);

  const changePage = (page) => {
    setCurrentPage(page);
    navigate(`?page=${page}`);
  }

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <>
    <div className="store">
      {products.map((item, index) => (
        <NavLink key={item.id} to={`/product/${item.id}`}>
          <div className="store-item">
            {item?.attributes?.image?.data.map((imagesItem, imagesIndex) => (
              <div key={imagesItem.id}> 
                <img
                  src={"http://192.168.202.128:1337" + imagesItem?.attributes?.url}
                  alt={item?.attributes?.name}
                />
              </div>
            ))}
            <h3>{item?.attributes?.name}</h3>
            <p>{item?.attributes?.price} TL</p>
            <button>SEPETE EKLE</button>
          </div>
        </NavLink>
      ))}
      
    </div>
    <div className="pages">
        <button className="page" onClick={() => changePage(currentPage - 1)} disabled={currentPage <= 1}>Önceki Sayfa</button>
        <p>{currentPage}</p>
        <button className="page" onClick={() => changePage(currentPage + 1)} disabled={currentPage >= totalPages}>Sonraki Sayfa</button>
      </div>
    </>
  );
}

export default ProductApi;
