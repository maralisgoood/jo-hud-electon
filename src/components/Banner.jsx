import '../index.css';
import '../styles/home.css';

export default function Banner() {
    return (
        <div className="banner">
            <div className="bannerText">
                <h1>canon<span>camera</span></h1>
                <div className="bannerBtns">
                    <button className='whiteBtn'>Shop now</button>
                    <button className='greenBtn'>View more</button>
                </div>
            </div>
            <div className="bannerContent">
                <img src="./images/banner-img.png" alt="banner-img" />
                <div className='specialPrice'>
                    <h3>only<span>$89</span></h3>
                </div>
            </div>
        </div>
    );
}