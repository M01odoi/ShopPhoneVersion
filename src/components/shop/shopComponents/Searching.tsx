import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const Searching = (props: { setIsShowModal: Function }):JSX.Element => {
    return (
        <>
            <div className='searching'>
                <input type={"text"} placeholder={'Search'}/>
                <button className='buttonSearch'><FontAwesomeIcon icon="search"/>
                </button>
            </div>
            <button className='buttonSliders' onClick={() => {
                props.setIsShowModal(true)
            }}>
                <FontAwesomeIcon icon='sliders-h' className='fa-xl'/></button>
        </>
    )
}

export default Searching;