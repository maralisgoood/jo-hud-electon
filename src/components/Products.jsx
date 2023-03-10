import '../styles/products.css';
import { productsData } from '../util/data';

export default function Products(prop) {

    return (
        <div className="products">
            {productsData.map((product, index) => {
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
        </div>
    );
}