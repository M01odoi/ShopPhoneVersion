import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
    setIsShowModal: Function
}

const Searching: React.FC<Props> = ({setIsShowModal}): JSX.Element => {
    return (
        <section className='search'>
            <div className='searching'>
                <input type={"text"} placeholder='Search'/>
                <button className='buttonSearch'><FontAwesomeIcon icon='search'/>
                </button>
            </div>
            <button className='buttonSliders' onClick={() => {
                setIsShowModal(true)
            }}>
                <FontAwesomeIcon icon='sliders-h' className='fa-xl'/></button>
        </section>
    )
}

export default Searching;