import React, { Dispatch, SetStateAction, useState } from "react";
import { TableHead } from "./styles/TableHeader.styled";
import { Column } from "./Table";
import TableFilter from "./TableFilter";

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<Column<T, K>>;
  setFilterCommand: Dispatch<SetStateAction<string | null>>;
};

const TableHeader = <T, K extends keyof T>({
  columns, setFilterCommand
}: TableHeaderProps<T, K>): JSX.Element => {
 

  const headers = columns.map((col, index) => {
    return (
      <td key={`col-${index}`}>
        <div className="table-head-col">{col.header}</div>
        <TableFilter setFilterCommand={setFilterCommand} />
      </td>
    );
  });

  return <TableHead><tr>{headers}</tr></TableHead>;
};

export default TableHeader;
