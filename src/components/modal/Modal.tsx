import './modal.scss'
import Filter from "../Filter";

const Modal = ({active, setActive}: { active: boolean, setActive: Function }) => {
    return (
        <div className={active?'modal':'button'} >
            <div  className={active?'modalContent':'button'}>
                <Filter setActive={setActive}/>

            </div>
        </div>
    )
}

export default Modal;