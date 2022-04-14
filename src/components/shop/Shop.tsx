import './shop.scss';
import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faArrowLeft,
    faBars,
    faCheck,
    faInfo,
    faPencil,
    faPlus,
    faPlusCircle,
    faSearch,
    faSlidersH,
    faTrash,
    faX
} from "@fortawesome/free-solid-svg-icons";
import Cards from "../cards/Cards";
import Modal from "../modal/Modal";

library.add(faBars, faSearch, faSlidersH, faArrowLeft, faPencil, faInfo, faCheck, faPlus, faTrash, faPlusCircle, faX);

const Shop = ():JSX.Element => {
    const [modalActive, setModalActive] = useState(false);
    return (<>
            <div className='shop'>

                <section className='logo'>
                    <h1>Shop</h1>
                    <button><FontAwesomeIcon icon="bars" className='fa-xl'/></button>
                </section>
                <section className='search'>
                    <div className='searching'>
                        <input type={"text"} placeholder={'Search'}/>
                        <button className='buttonSearch'><FontAwesomeIcon icon="search"/>
                        </button>
                    </div>
                    <button className='buttonSliders' onClick={() => {
                        setModalActive(true)
                    }}>
                        <FontAwesomeIcon icon='sliders-h' className='fa-xl'/></button>
                </section>
                <Cards/>
                {modalActive && <Modal setActive={setModalActive}/>}
            </div>

        </>
    )
}

export default Shop;