import './styles.css'
import {ReactComponent as Image} from './Imagem.svg'
import Footer from '../Footer'
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        Faça seu pedido<br/>e entregamos<br/> para você!!!
                    </h1>
                    <h3 className="home-sub-title">
                        Escolha o seu pedido e em poucos minutos<br/>levaremos na sua porta
                    </h3>
                    <Link to="/orders" className="home-btn-order">FAZER PEDIDO</Link>
                </div>
                <div className="home-image">
                    <Image/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Home;