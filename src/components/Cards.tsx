import './cards.scss';
import StackGrid from "react-stack-grid";
import cardImg from '../img/cardImg.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBars, faPlusCircle, faSearch, faSlidersH} from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle);


const Cards = () => {
    return (
        // <div className='cards'>
        <StackGrid duration={0} columnWidth={170} gutterHeight={5}>
            <div className='ticket'>
                <img
                    src={cardImg}
                    alt=""/>
                <p>Product 1</p>
                <p>USD 100.00 <span className='item'>item</span></p>
            </div>
            <div className='ticket'>
                <img
                    src={cardImg}
                    alt=""/>
                <p>Lorem ipsum dolor sit amet, </p>
                <p>USD 100.00 <span className='item'>piece</span></p>
            </div>

            <div className='ticket'>
                <img
                    src={cardImg}
                    alt=""/>
                <p>Lorem ipsum dolor sit amet, Lorem amet, </p>
                <p>USD 100.00 <span className='item'>item</span></p>
            </div>
            <button className='ticket lastCard'>
               <FontAwesomeIcon icon={'plus-circle'} className='fa-3x'/>
                <p>Tap to add<br/> a new item</p>
            </button>
        </StackGrid>
        // </div>
    )
}

export default Cards;