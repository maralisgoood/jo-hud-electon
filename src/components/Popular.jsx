import "../styles/home.css";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../util/data";

export default function Popular() {
  // const navigate = useNavigate();

  // const toCameras = () => {
  //   navigate("cameras");
  // }

  // const toLaptops = () => {
  //   navigate("laptops");
  // }

  // const toTablets=()=>{
  //   navigate("tablets");
  // }

  // const toMouse=()=>{
  //   navigate("mouse");
  // }

  // const toSale=()=>{
  //   navigate("sale");
  // }

  return (
    <div className="content popular">
      <div className="pop-head">
        <h2>Popular products</h2>
        <div className="btns">
          <ul>
            {CATEGORIES.map((category, index)=>(
              <li key={index}>
                <a href={category.url}>{category.name}</a>
              </li>
            ))}
          </ul>
          {/* <button onClick={toCameras} className="active">Cameras</button>
          <button onClick={toLaptops}>Laptops</button>
          <button onClick={toTablets}>Tablets</button>
          <button onClick={toMouse}>Mouse</button>
          <button onClick={toSale}>Sale</button> */}
        </div>
      </div>
      <Products />
    </div>
  );
}
