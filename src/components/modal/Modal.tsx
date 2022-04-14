import './modal.scss'
import Filter from "../filter/Filter";

const Modal = ({setActive}: { setActive: Function }):JSX.Element => {
    return (
            <div  className='modalContent'>
                <Filter setActive={setActive}/>
        </div>
    )
}

export default Modal;