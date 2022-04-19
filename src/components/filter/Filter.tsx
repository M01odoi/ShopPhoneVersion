import './filter.scss';
import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks/redux";
import {setCategory} from "../../store/reducers/categorySlice";
import category from "../../api/category";
import {ICategory} from "../../interfaces/ICategory";
import FilterContext from './FilterContext';
import SectionOfChoosing from "./filterComponents/SectionOfChoosing";
import FilterHeader from "./filterComponents/FilterHeader";

interface Props {
    setActive: Function
}

const Filter: React.FC<Props> = ({setActive}): JSX.Element => {
    // const [isActiveChange, setIsActiveChange] = useState(false);
    // const [activeCategory, setActiveCategory] = useState(0);
    // const [isAddingCategory, setIsAddingCategory] = useState(false);
    // const [isChangeName, setIsChangeName] = useState(false);
    // const [charLeft, setCharLeft] = useState(20);
    //
    // const filterCtxDefaultValue = {
    //     isActiveChange, setIsActiveChange,
    //     activeCategory, setActiveCategory,
    //     isAddingCategory, setIsAddingCategory,
    //     isChangeName, setIsChangeName,
    //     charLeft, setCharLeft
    // }

    const dispatch = useAppDispatch();
    useEffect(() => {
        category.then((value: ICategory[]) => {
            dispatch(setCategory(value));
        });
    }, []);
    return (
        <>
            {/*<FilterContext.Provider value={filterCtxDefaultValue}>*/}
                <FilterHeader setActive={setActive}/>
                <SectionOfChoosing/>
            {/*</FilterContext.Provider>*/}

        </>
    )
}

export default Filter;