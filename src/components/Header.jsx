import '../index.css';
import '../styles/header.css';

export default function Header() {
    return (
        <div className="header">
            <img src="./images/logo.svg" alt="logo" className='logo' />
            <div className="search">
                <input type="text" placeholder="Search any things" />
                <button type='button'>Search</button>
            </div>

            <div className="btns">
                <div className="sign-in">
                    <a href="#">
                        <span><img src="./images/icon-signin.svg" alt="icon-signin" /></span>
                        Sign In
                    </a>
                </div>
                <div className="card-in">
                    <a href="#">
                        <span><img src="./images/icon-cardin.svg" alt="icon-cardin" /></span>
                        <span className='counter'>0</span>
                    </a>
                </div>
            </div>
        </div>
    );
}