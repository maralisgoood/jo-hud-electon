import "../styles/home.css";
import Products from "./Products";
import { CATEGORIES } from "../util/data";
import { useState } from "react";

export default function Popular() {
  const [saver, setSaver] = useState(0);

  return (
    <div className="content popular">
      <div className="pop-head">
        <h2>Popular products</h2>
        <div className="btns">
          <ul>
            {CATEGORIES.map((category, index) => (
              <li key={index} onClick={() => { setSaver(index); }}>
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
      <Products />
    </div>
  );
}
