import "../styles/home.css";
import '../styles/products.css';
import { productsData } from '../util/data';
import { CATEGORIES } from "../util/data";
import { useEffect, useState } from "react";
import { getData } from "./Filter";
import { useNavigate } from "react-router-dom";

export default function Popular() {
  const [saver, setSaver] = useState(0);
  const [filteredData, setFilteredData] = useState(null);
  useEffect(() => {
    setFilteredData(getData());
  }, []);

  function handleProduct(e) {
    let typeProduct = e.target.value;
    typeProduct !== "all"
      ? setFilteredData(filteredData(typeProduct))
      : setFilteredData(getData());
  }
  const navigate = useNavigate();

  return (
    <div className="content popular">
      {/* <div className="nav">
        {button && button.map((type, index) => (
          <button
            key={index}
            value={type.value}
            onClick={handleProduct}>
            {type.name}
          </button>
        ))}
      </div> */}


      <div className="pop-head">
        <h2>Popular products</h2>
        <div className="btns">
          <ul>
            {CATEGORIES.map((category, index) => (
              <li
                key={index}
                onClick={() => { setSaver(index); }}>
                {saver == index ? (
                  <button className="active">{category.name}</button>
                ) : (
                  <button>{category.name}</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="popularProducts">
        {productsData.slice(0, 8).map((product, index) => {
          return <div key={index} className="singleProduct">
            <img src={product.image} />
            <div className="proBottom">
              <div className="proText">
                <h5 className='productName'>{product.name}</h5>
                <p className='productCategory'>{product.category}</p>
                <h6 className='productPrice'>${product.price}</h6>
              </div>
              <button className="card">
                <img src="./images/icon-card.svg" alt="icon-card" />
              </button>
            </div>
            <div>
              {product.sale > 0 ?
                (<p className='sale'>Sale {product.sale}% off</p>) : (console.log(' '))}
            </div>
          </div>
        })}
        <div className="btn">
          <button className='seeMoreBtn' onClick={() => navigate("/")}>See More &#8681;</button>
        </div>

      </div>
    </div>
  );
}
