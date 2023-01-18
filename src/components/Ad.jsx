import "../styles/home.css";

export default function Ad() {
  return (
    <div className="content ad">
      <img src="./images/ad.png" alt="ad" />
      <div className="adText">
        <button className="whiteBtn">New Laptop</button>
        <div>
          <h2>Sale up to 50% off</h2>
          <p>12 inch hd display</p>
        </div>
        <button className="greenBtn">Shop now</button>
      </div>
    </div>
  );
}
