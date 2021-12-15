import React, { Dispatch, SetStateAction, useState } from 'react'
import {ArrowDropUp, ArrowDropDown} from '@material-ui/icons'
const TableFilter = (props: {setFilterCommand: Dispatch<SetStateAction<string | null>>}) => {

    const ascendingStateHandler = () => {
        setFilterSelected(filterStates.ascending);
        props.setFilterCommand("ascending");
      };
      const descendingStateHandler = () => {
        setFilterSelected(filterStates.descending);
        props.setFilterCommand("descending");
      };
      const unselectedStateHandler = () => {
        setFilterSelected(filterStates.unselected);
        props.setFilterCommand("unselected");
      };

    const filterStates = {
        unselected: () => {
          return (
            <div className="filter-selection" onClick={ascendingStateHandler}>
              <ArrowDropUp/>
              <ArrowDropDown/>
            </div>
          );
        },
        ascending: () => {
          return (
            <div className="filter-selection" onClick={descendingStateHandler}>
              <ArrowDropUp style={{ color: "red" }}/>
              <ArrowDropDown />
            </div>
          );
        },
        descending: () => {
          return (
            <div className="filter-selection" onClick={unselectedStateHandler}>
              <ArrowDropUp />
              <ArrowDropDown style={{ color: "red" }} />
            </div>
          );
        },
      };

      const [filterSelected, setFilterSelected] = useState<JSX.Element>(
        filterStates.unselected
      );

    return (
        <>
            {filterSelected}
        </>
    )
}

export default TableFilter
