import './modal.scss'
import Filter from "../filter/Filter";
import React from "react";

interface Props {
    setActive: Function
}

const Modal: React.FC<Props> = ({setActive}): JSX.Element => {
    return (
        <div className='modalContent'>
            <Filter setActive={setActive}/>
        </div>
    )
}

export default Modal;