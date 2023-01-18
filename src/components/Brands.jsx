import '../styles/home.css';

export default function Brands() {
    return(
        <div className="content">
            <ul className='brands'>
                <li><a href="#"><img src="./images/brand-1.svg" alt="brand-1" /></a></li>
                <li><a href="#"><img src="./images/brand-2.svg" alt="brand-2" /></a></li>
                <li><a href="#"><img src="./images/brand-3.svg" alt="brand-3" /></a></li>
                <li><a href="#"><img src="./images/brand-4.svg" alt="brand-4" /></a></li>
                <li><a href="#"><img src="./images/brand-5.svg" alt="brand-5" /></a></li>
            </ul>
        </div>
    );
}