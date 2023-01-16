import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import '../styles/home.css';
import Banner from '../components/Banner';

export default function Home() {
    return (
        <div className="container">
            <Header />
            <Banner />
            <Footer />
        </div>
    );
}