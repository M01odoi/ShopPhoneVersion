import './filter.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

const Filter = (props: { setActive: Function }) => {
    const [activeChange, setActiveChange] = useState(false);
    return (<>
            <div className='filterHeader'>
                <button onClick={() => {
                    props.setActive(false);
                    setActiveChange(false);
                }}>
                    <FontAwesomeIcon icon={'arrow-left'} className='fa-2x'/>
                </button>
                <h1>Filter</h1>
            </div>
            <div className={activeChange ? 'display editing' : 'displayNone'}>Categories editing</div>
            <div className={activeChange ? 'categories editing2' : 'categories'}>
                <div>Categories</div>
                <button onClick={() => {
                    setActiveChange(true)
                }}
                        className={activeChange ? 'displayNone' : 'display'}>
                    <FontAwesomeIcon icon={'pencil'} className='fa-lg'/></button>
                <button className={activeChange ? 'display' : 'displayNone'}>All</button>
                <button className={activeChange ? 'display' : 'displayNone'}><FontAwesomeIcon icon={'plus'}
                                                                                              className='fa-lg'/>
                </button>
                <button onClick={() => {
                    setActiveChange(false)
                }} className={activeChange ? 'display purple' : 'displayNone'}><FontAwesomeIcon icon={'check'}
                                                                                                className='fa-lg'/>
                </button>
                <button><FontAwesomeIcon icon={'info'} className='fa-xl'/></button>
            </div>
            <div className='categoriesChoose'>
                <button className={activeChange ? 'displayNone' : 'display'}>All</button>
                <button onClick={(e) => {
                    console.log(e)
                }}><span className={activeChange ? 'display' : 'displayNone'}>1</span> category_1
                </button>
                <button className={activeChange ? 'display buttonBlackWhite' : 'displayNone'}>
                    <FontAwesomeIcon icon={'pencil'} className='fa-lg'/></button>
                <button className={activeChange ? 'display buttonBlackWhite' : 'displayNone'}>
                    <FontAwesomeIcon icon={'trash'} className='fa-lg'/></button>
                <button>category_2</button>
                <button>Uncategorised</button>
            </div>

        </>
    )
}

export default Filter;