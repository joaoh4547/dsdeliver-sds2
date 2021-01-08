import './styles.css'
import {ReactComponent as Logo} from './Logo.svg'
import  './StepsHeader'
import StepsHeader from './StepsHeader';

function Orders(){
    return (
        <div className="orders-container">
            <StepsHeader/>
        </div>
    );
}

export default Orders;