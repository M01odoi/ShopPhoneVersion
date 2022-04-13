import './shop.scss';
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowLeft, faBars, faSearch, faSlidersH, faPencil,faInfo, faCheck, faPlus,faTrash, faPlusCircle,faX} from "@fortawesome/free-solid-svg-icons";
import Cards from "../Cards";
import Modal from "../modal/Modal";
// import {ReactComponent as List} from "components/list-button-svgrepo-com.svg";
// import Modal from "./modal/Modal";
import products from "../../api/products";

library.add(faBars, faSearch, faSlidersH,faArrowLeft,faPencil,faInfo, faCheck, faPlus,faTrash,faPlusCircle,faX);

const Shop = () => {
    const [modalActive, setModalActive] = useState(false);
    useEffect(() => console.log(modalActive), [modalActive])
    return (<>
            <div className='shop'>

                <div className='logo'>
                    <h1>Shop</h1>
                    <button><FontAwesomeIcon icon="bars" className='fa-xl'/></button>
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
                {modalActive && <Modal setActive={setModalActive}/>}
            </div>

        </>
    )
}

export default Shop;