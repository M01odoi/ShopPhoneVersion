import './filter.scss';
import React, {useEffect} from "react";
import {useAppDispatch} from "../../hooks/redux";
import {setCategory} from "../../store/reducers/categorySlice";
import category from "../../api/category";
import {ICategory} from "../../interfaces/ICategory";
import SectionOfChoosing from "./filterComponents/SectionOfChoosing";
import FilterHeader from "./filterComponents/FilterHeader";

interface Props {
    setActive: Function
}

const Filter: React.FC<Props> = ({setActive}): JSX.Element => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        category.then((value: ICategory[]) => {
            dispatch(setCategory(value));
        });
    }, []);

    return (
        <>
            <FilterHeader setActive={setActive}/>
            <SectionOfChoosing/>
        </>
    )
}

export default Filter;