import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import '../styles/home.css';
import Banner from '../components/Banner';
import Popular from '../components/Popular';
import Ad from '../components/Ad';
import Brands from '../components/Brands';
import Special from '../components/Special';

export default function Home() {
    return (
        <div className="container">
            <Header />
            <Banner />
            <Popular/>
            <Ad/>
            <Special/>
            <Brands/>
            <Footer />
        </div>
    );
}