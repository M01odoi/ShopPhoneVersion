import './shop.scss';
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowLeft, faBars, faSearch, faSlidersH, faPencil,faInfo, faCheck, faPlus,faTrash} from "@fortawesome/free-solid-svg-icons";
import Cards from "./Cards";
import Modal from "./modal/Modal";
// import {ReactComponent as List} from "components/list-button-svgrepo-com.svg";
// import Modal from "./modal/Modal";
import products from "../api/products";
import Product from "./Product";

library.add(faBars, faSearch, faSlidersH,faArrowLeft,faPencil,faInfo, faCheck, faPlus,faTrash);

const Shop = () => {
    const [modalActive, setModalActive] = useState(false);
    useEffect(() => console.log(modalActive), [modalActive])
    return (<>
            {/*<Product/>*/}
            <div className='shop'>

                <div className='logo'>
                    <h1>Shop</h1>
                    {/*<List/>*/}
                    <FontAwesomeIcon icon="bars" className='fa-xl'/>
                </div>
                <div className='search'>
                    <div className='searching'>
                        <input type={"text"} placeholder={'Search'}/>
                        <button className='buttonSearch'><FontAwesomeIcon icon="search"/>
                        </button>
                    </div>
                    <button className='buttonSliders' onClick={() => {
                        setModalActive(true)
                    }}>
                        <FontAwesomeIcon icon='sliders-h' className='fa-xl'/></button>
                </div>
                <Cards/>
                <Modal active={modalActive} setActive={setModalActive}/>

            </div>

        </>
    )
}

export default Shop;